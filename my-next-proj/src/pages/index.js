import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<main>
  <h2 className='text-blue-600 text-[80px] bg-red'>Hello 
  </h2>
</main>
  )
}
