import { usePathname } from "next/navigation"

export const usePath = ()=>{
    const pathname = usePathname()
    const path = pathname.split('/')
    let page = path[path.length - 1]
    return {page,pathname}
}