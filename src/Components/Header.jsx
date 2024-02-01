import { GiCash } from "react-icons/gi";
const Header = () => {
  return (
    <div className='flex w-full bg-gradient-to-r from-sky-200 to-sky-100 min-h-12 items-center justify-center'>
        <h1 className='flex md:text-2xl text-xl font-serif font-semibold'>BUDGET ALLOCATOR&nbsp;<GiCash size={30}/></h1>
    </div>
  )
}

export default Header