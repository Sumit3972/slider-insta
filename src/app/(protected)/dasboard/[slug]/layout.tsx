import Slidebar from '@/components/global/slidebar'
import React from 'react'

type Props = {
    children : React.ReactNode
    params: {slug:string}
}

const Layout = ({children,params}: Props) => {
  return (
    <div className='p-3'>
        <Slidebar slugs={params.slug}/>
    </div>
  )
}

export default Layout