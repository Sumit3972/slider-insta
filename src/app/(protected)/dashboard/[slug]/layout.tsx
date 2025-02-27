import Navbar from '@/components/global/Navbar'
import Slidebar from '@/components/global/slidebar'
import React from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { PreFetechUser, PreFetechUserAutomation } from '@/react-query/prefetch'

type Props = {
  children: React.ReactNode
  params: { slug: string }
}




const Layout = async ({ children, params }: Props) => {
  const query = new QueryClient();

  await PreFetechUser(query);
  await PreFetechUserAutomation(query)

  return (
    <HydrationBoundary state={dehydrate(query)}>
    <div className='p-3'>
      <Slidebar slugs={params.slug} />
      <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
        <Navbar slug={params.slug} />
        {children}
      </div>
    </div>
    </HydrationBoundary>
  )
}

export default Layout