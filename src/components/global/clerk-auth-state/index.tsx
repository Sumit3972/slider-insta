import { ClerkLoading } from '@clerk/nextjs'
import React from 'react'
import Loader from '../loader'

type Props = {}

const ClerkAuthState = (props: Props) => {
  return (
    <>
    <ClerkLoading>
        <Loader state><></></Loader> 
    </ClerkLoading>

    </>
  )
}

export default ClerkAuthState