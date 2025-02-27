import { getallAutomation } from "@/actions/automations";
import { onUserinfo } from "@/actions/user";
import { client } from "@/lib/prisma";
import { QueryClient, QueryFunction } from "@tanstack/react-query"






const prefetch= async(
    client:QueryClient,
    actions:QueryFunction,
    key:string
)=>{
      return await client.prefetchQuery({
        queryKey:[key],
        queryFn:actions,
        staleTime:60000
      })
}




export const PreFetechUser = async ( client:QueryClient)=>{
      return await prefetch(client,onUserinfo,'user-profile');
}

export const PreFetechUserAutomation = async (client:QueryClient)=>{
    return await prefetch(client,getallAutomation,'user-automation')
}