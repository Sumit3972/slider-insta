import Loader from '@/components/global/loader'
import React from 'react'

type Props = {}

const loader = (props: Props) => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Loader state>.... loading</Loader>
    </div>
  )
}

export default loader