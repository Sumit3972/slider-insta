'use server'

import { onCurrentUser } from "../user"
import { CreateAutomation } from "./queries";

 
export const getallAutomation = async ()=>{
    const user = await onCurrentUser();
    try {
        const create = await CreateAutomation(user.id)
        if(create) return{status:200 ,data:'automation created'}
        return {status:400,data:'opps there somthing went wrong'}

    } catch (error) {
         return {status:500 , data:'internal server error'}
    }
}