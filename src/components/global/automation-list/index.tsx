'use client'
import { usePath } from '@/hooks/use-nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'

import React from 'react'
import GradientButton from '../gradient-button'
import { Button } from '@/components/ui/button'
import { useQueryAutomation } from '@/hooks/Query-automation'
import CreateAutomation from '../create-automation'

type Props = {}

const AutomationList = (props: Props) => {
  const {data} = useQueryAutomation();
  const {pathname} = usePath();

  if(data?.status !== 200 || data?.data.length  <=0){
    return(
      <div className='h-[70vh] flex justify-center items-center flex-col gap-y-3'>
        <h3 className='text-lg text-gray-400'>No AutoMation is Created </h3>
        <CreateAutomation/>
      </div>
    )
  }
  return (
    <div className='flex flex-col gap-y-3'>
       <Link
          href={`${pathname}/123456`}
         
          className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
        >
          <div className='flex flex-col flex-1 items-start'>
            <h2 className='text-xl font-semibold'>Automation Name</h2>
            <p className="text-[#9B9CA0] text-sm font-light mb-2">
              This is from the comment
            </p>
            <div className='flex gap-x-2 flex-wrap mt-3'>
              <div  className={cn(
                        "rounded-full px-4 py-1 capitalize",
                        (0 + 1) % 1 == 0 &&
                          "bg-keyword-green/15 border-2 border-keyword-green",
                        (1 + 1) % 2 == 0 &&
                          "bg-keyword-purple/15 border-2 border-keyword-purple",
                        (2 + 1) % 3 == 0 &&
                          "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                        (3 + 1) % 4 == 0 &&
                          "bg-keyword-red/15 border-2 border-keyword-red"
                      )}
                    >

                      Getstarted 
                    </div>
            </div>
            <div className="rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1">
                <p className="text-sm text-[#bfc0c3]">No Keywords</p>
              </div>
          </div>
          <div className='flex flex-col justify-between'>
            <p className='text-sm captilize font-light text-[#9B9CA0]'>October 5 2024 </p>

            <GradientButton
                type="BUTTON"
                classname="w-full bg-background-80 text-white hover:bg-background-80"
              >
                Smart AI
              </GradientButton>
              <Button className="bg-background-80 hover:bg-background-80 text-white">
                Standard
              </Button>
          </div>
        </Link>
    </div>
  )
}

export default AutomationList