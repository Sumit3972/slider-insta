'use server'

import { client } from "@/lib/prisma"

export const CreateAutomation = async (clerkId:string)=>{
    return await client.user.update({
        where:{
            clerkId,
        },
        data:{
            automations:{
                create:{},
            },
        }
    })
}