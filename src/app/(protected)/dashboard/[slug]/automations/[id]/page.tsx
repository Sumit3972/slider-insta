import Trigger from '@/components/global/automation/trigger'
import AutomationsBreadCrumb from '@/components/global/main-crum/automations'
import { Warning } from '@/icons'
import React from 'react'

type Props = {
  params: { id: string }
}

function page({ params }: Props) {
  return (
    <div className='flex flex-col gap-y-20 items-center'>
      <AutomationsBreadCrumb id={params.id} />
      <div className='w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3'>
        <div className='flex gap-x-2'>
         <Warning/>
         WHEN...
         <Trigger id={params.id}/>
        </div>
      </div>
    </div>
  )
}

export default page