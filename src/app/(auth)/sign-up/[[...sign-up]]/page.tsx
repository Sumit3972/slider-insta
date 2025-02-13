import { SignUp } from '@clerk/nextjs'
import React from 'react'

type Props = {
  children:React.ReactNode
}

const page = ({children}: Props) => {
  return (
    <SignUp/>
  )
}

export default page