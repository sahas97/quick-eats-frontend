import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import MainNav from './MainNav'

export const Header = () => {
  return (
    <div className='border-b-2 border-black-500 py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link className='text-3xl font-bold tracking-tight text-black-500' to={'/'}>Quick Eats</Link>
        <div className='md:hidden'>
          <MobileNav />
        </div>
        <div className='hidden md:block'>
          <MainNav/>
        </div>
      </div>
    </div>
  )
}
