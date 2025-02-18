'use client'
import { usePath } from '@/hooks/use-nav'
import Link from 'next/link'

import React from 'react'

type Props = {}

const AutomationList = (props: Props) => {
  const {pathname} = usePath();
  return (
    <div className='flex flex-col gap-y-3'>
       <Link
          href={`${pathname}/123456`}
         
          className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
        >
          <div className='flex flex-col flex-1 items-start'></div>
        </Link>
    </div>
  )
}

export default AutomationList