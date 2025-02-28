'use server'


import { onCurrentUser } from "../user"
import { CreateAutomation, getAutomation } from "./queries";

 
export const createAutomation = async ()=>{
    const user = await onCurrentUser();
    try {
        const create = await CreateAutomation(user.id)
        if(create) return{status:200 ,data:'automation created'}
        return {status:400,data:'opps there somthing went wrong'}

    } catch (error) {
         return {status:500 , data:'internal server error'}
    }
}

export const getallAutomation = async()=>{
     const user = await onCurrentUser();
     try {
        const automation = await getAutomation(user.id);
        if(automation) return {status:200,data:automation.automations}
        return {status:400,data:[]}
     } catch (error) {
        return{status:500,data:[]}
     }
}