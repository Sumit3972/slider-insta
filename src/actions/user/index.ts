'use server'

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/fetch";
import { updateIntegration } from "../intergration/queries";
import { use } from "react";

export const onCurrentUser = async () => {
    const user = await currentUser();
    if (!user) return redirect('/sign-in');
    
    return user;
}

export const onBoardUser = async () => {
    try {
        const user = await onCurrentUser(); // ✅ Await `onCurrentUser`
        if (!user) return; // Extra safety check

        const found = await findUser(user.id); // ✅ Await `findUser`
        if (!found) return; // ✅ Prevents accessing `null.integrations`

        if (found.integrations.length > 0) { // ✅ `found` is guaranteed to exist now
            const today = new Date();
            const expiresAt = found.integrations[0].expiresAt;

            if (expiresAt) { // ✅ Check if `expiresAt` is not null
                const timeLeft = expiresAt.getTime() - today.getTime();
                const days = Math.round(timeLeft / (1000 * 3600 * 24));

                if (days < 5) {
                    console.log('refresh');
                    const refresh = await refreshToken(found.integrations[0].token);
                    const today = new Date();
                    const expire_date = today.setDate(today.getDate()+60)
                    const upadte_token = updateIntegration(
                        refresh.access_token,
                        new Date(expire_date),
                        found.integrations[0].id

                    )
                    if(!upadte_token){
                        console.log("update token failed");
                    }
                }
            }
            return {
                status:200,
                data:{
                    firstname: found.firstname,
                    lastname:found.lastname
                },
            }
        }
        const created = await createUser(
            user.id,
            user.firstName!,
            user.lastName!,
            user.emailAddresses[0].emailAddress,
        )
        return {status:200,data:created}
    } catch (e) {
        console.error("Error in onBoardUser:", e);
        return {status:500}
    }
}


export const onUserinfo = async ()=>{
    const user = await onCurrentUser();
    try {
        const profile = await findUser(user.id)
        if(profile){
            return {
                status:200,
                data:profile
            }
        }
        return {status:404}
    } catch (error) {
        return {status:500}
    }
}

