import { onBoardUser } from '@/actions/user';
import { redirect } from 'next/navigation';
import React, { use } from 'react'

type Props = {}

const Page =  async (props: Props) => {

    // server action to on board a users
    const user = await onBoardUser();
       if(user?.status == 200 || user?.status == 201 ){
        return redirect(`dashboard/ ${user.data?.firstname} ${user.data?.lastname}`)
       }
      return redirect('/sign-in')
}

export default Page