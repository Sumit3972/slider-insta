import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'lucide-react'
import React from 'react'


type Props = {
    children : React.ReactNode
    type:'BUTTON' | 'LINK'
    classname?: string
    href?:string 
}

const GradientButton = ({children,href,type,classname}: Props) => {
     const gradients = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-[2px]'
     switch (type) {
        case 'BUTTON':
          return (
            <div className={gradients}>
              <Button className={cn(classname, 'rounded-xl')}>{children}</Button>
            </div>
          )
    
        case 'LINK':
          return (
            <div className={gradients}>
              <Link
                href={href!}
                className={cn(classname, 'rounded-xl')}
              >
                {children}
              </Link>
            </div>
          )
    
        default:
          return null
      }
  
}

export default GradientButton