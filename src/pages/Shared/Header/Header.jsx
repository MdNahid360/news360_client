import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3, HiOutlineUser, HiPlus, HiXMark } from "react-icons/hi2";
import SideBar from '../SideBar/SideBar';
const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className="bg-white w-full overflow-hidden">
            <div className="md:w-[90%] w-[96%] mx-auto flex justify-between items-center md:h-[55px] h-[60px]">
                <Link to="#" className="font-bold">
                    News <span className="text-">360</span>
                </Link>
                    <ul className="flex items-center gap-3">
                        <li className='md:block hidden'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="bg-[#552ee3] md:block hidden text-white rounded-md">
                            <Link to='/' className="flex items-center gap-1 px-2 py-2 rounded-md text-white"><HiPlus className="text-white" /> Advertise</Link>
                        </li>
                        <li className="border border-[#552ee3] rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer">
                             <HiOutlineUser className="text-[#552ee3] text-[23px]"></HiOutlineUser>
                        </li>
                        <li onClick={()=> setMenu(!menu)} className="md:hidden block">
                            {
                                menu ? <HiXMark className='text-[35px] text-black'></HiXMark>  : <HiBars3 className='text-[35px] text-black'></HiBars3>
                            }
                        </li>
                    </ul>
            </div>
            <div className={`${menu ?'right-0':'right-[-140%]'} sideMenu bg-[#484150f8] fixed w-full h-screen  duration-300 p-3`}>
                <ul className='bg-white p-2 rounded-lg'>
                    <span className='text-black font-bold'>Menu</span>
                  <li className='bg-[#f8d5d5] mt-2 p-2 rounded'>
                       <Link className='text-[#ec1e1e]' to='/'>Home</Link>
                  </li>
                  <li className='bg-[#f8d5d5] mt-2 p-2 rounded'>
                       <Link className='text-[#ec1e1e]' to='/'>Advertise</Link>
                  </li>
                </ul>
                 <div className="bg-white mt-2 rounded px-3 py-2">
                     <SideBar className=""></SideBar>
                 </div>
            </div>
           
        </div>
    );
};

export default Header;