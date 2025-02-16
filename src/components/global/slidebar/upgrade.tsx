import React from 'react'
import PaymentButton from '../Payment'

type Props = {}

const UpgradeCard = (props: Props) => {
  return (
    <div className='bg-[#252525] rounded-2xl flex flex-col p-3 gap-y-3'>
        <span className='text-sm text-white'>
           Upgrade to  {''}
           <span   className="bg-gradient-to-r 
        from-[#CC3BD4] 
        to-[#D064AC] 
        font-bold 
        bg-clip-text 
        text-transparent">Smart Ai
        
        </span>
        </span>
        <p className='text-[#9B9CA0] font-light text-sm'>
        Unlock all features <br /> including AI and more
        </p>
        <PaymentButton/>
    </div>
  )
}

export default UpgradeCard 