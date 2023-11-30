import Image from 'next/image'
import { useRouter,usePathname  } from 'next/navigation'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pathname = usePathname()
  const router = useRouter()
  useEffect(() => {
if(pathname==='/'){
  router.push('/home', { scroll: false })
}
    
  }, [])
  
  return (
   null
  )
}
