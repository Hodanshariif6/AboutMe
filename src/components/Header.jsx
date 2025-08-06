
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [count, setCount] = useState(false)
   const handleClick = () => {
    if(count === false){
          setCount(true)
    } else{
      setCount(false)
    }
   }

  return <>
  <div className=" sm:flex hidden pt-3 justify-between">
    <h1 className="font-bold text-4xl pl-12 text-blue-500" >HO<span className='text-cyan-950'>DAN</span></h1>
    <div className="">
      <ul className="sm:flex hidden justify-around text-3xl p-4 gap-16">
        <Link to = '/'> <li className="hover:text-orange-500">Home</li></Link>
        <Link to = '/about'> <li className="hover:text-orange-500">About</li></Link>
        <Link to = '/Coun'> <li className="hover:text-orange-500">Contact</li></Link>
      </ul>
     
    </div>
   {/* <i className="fa-solid fa-shopping-cart text-3xl  pt-3"></i> */}
   </div>
  {/*  mobile */}

    <div className=" sm:hidden sm:flex pt-3">
   <div className="flex gap-40">     <h1 className="font-bold text-4xl pl-4 text-blue-500" >HO<span className='text-cyan-950'>DAN</span></h1>
     <i style={{display: count === true ? 'block' : ''}} onClick={handleClick} className="fa-solid sm:hidden  fa-bars text-[2.5em] font-semibold pt-3"></i></div>
    <div style={{display: count === true ? 'block' : ''}} className="sm:flex hidden bg-blue-500 text-center justify-around text-3xl p-4">
      <ul className=" ">
        <Link to = '/'> <li className="hover:text-white">Home</li></Link>
        <Link to = '/about'> <li className="hover:text-white">About</li></Link>
        <Link to = '/Coun'> <li className="hover:text-white">Contact</li></Link>
      </ul>
     {/* <i className="fa-solid fa-shopping-cart text-3xl  pt-3"></i> */}
    </div>
   
   </div>
  </>

}
export default Header