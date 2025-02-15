import React from 'react'
import { Spinner } from './spinner'
import { cn } from '@/lib/utils'

type Props = {
    state : boolean
    className?: string
    color?:string
    children? : React.ReactNode
}

const Loader = ({state,children,className,color}: Props) => {
  return state ? <div className={cn(className)}>
    <Spinner color={color}/>
  </div> : children
}

export default Loader