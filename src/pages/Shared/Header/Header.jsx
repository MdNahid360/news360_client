import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRightOnRectangle, HiBars3, HiOutlineUser, HiPlus, HiXMark } from "react-icons/hi2";
import SideBar from '../SideBar/SideBar';
import { AuthContext } from '../../../context/AuthProvider';
const Header = () => {
    const [menu, setMenu] = useState(false);
    const {user, logOut} = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    console.log(user)
    return (
        <div className="bg-white w-full  md:relative fixed ">
            <div className="md:w-[90%] w-[96%] mx-auto flex justify-between relative items-center md:h-[55px] h-[60px]">
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
                        {
                            user ? <li onClick={()=> setOpen(!open)} className={`border border-[#552ee3] flex items-center gap-3 rounded-full w-[40px] h-[40px] justify-center cursor-pointer overflow-hidden`}>
                         {
                               user.photoURL===null ? <img src='https://www.svgrepo.com/show/192244/man-user.svg' /> :  user ? <img src={`${user?.photoURL}`} className="w-[full] rounded-full p-[2px]" alt="" /> : <HiOutlineUser className="text-[#552ee3] text-[23px]"></HiOutlineUser>
                            }
                        </li> : <li className='bg-[#5353ee] w-[90px] rounded-lg relative'>
                                 <Link to="/login" className="text-white hover:text-white  w-[100%] h-[40px] rounded-md flex justify-center items-center gap-1"> Login</Link>
                        </li>
                        }
                        <li onClick={()=> setMenu(!menu)} className="md:hidden block">
                            {
                                menu ? <HiXMark className='text-[35px] text-black'></HiXMark>  : <HiBars3 className='text-[35px] text-black'></HiBars3>
                            }
                        </li>
                    </ul>
            </div>
                      
            <div className={`${menu ?'right-0':'right-[-140%]'} sideMenu bg-[#484150f8] fixed w-full h-screen  duration-300 z-10 p-3`}>
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
           <div className={`${open && user ? 'block' : 'hidden'} w-[260px] p-2 overflow-hidden duration-300  box text-[black] bg-[#fcfcfc] shadow-lg border rounded-lg  absolute top-[55px] right-[60px] z-50 `}>
              {
                user?.photoURL===null ? <img className="w-[100px] mx-auto border-2 border-indigo-600 rounded-full p-1" src='https://www.svgrepo.com/show/192244/man-user.svg' /> :  <img src={user?.photoURL} className="rounded-full mx-auto border-2 border-purple-600 p-1 w-[100px] h-[100px] " alt="" />
              }
               <h2 className='font-bold text-lg text-center'>{user?.displayName}</h2>
               <p className='text-center border-b border-[gray] pb-2 text-[14px]'>{user?.email}</p>
             
               <Link to="/profile" className="mt-3 flex hover:text-white items-center w-full justify-center text-white py-2 gap-1 bg-[#1592ec] rounded-lg">
                  <HiOutlineUser className="text-xl"></HiOutlineUser> Profile
               </Link>
              
               <button onClick={logOut} className="mt-1 flex items-center w-full justify-center text-white py-2 gap-1 bg-[#ec1560] rounded-lg">
                  <HiArrowRightOnRectangle className="text-xl"></HiArrowRightOnRectangle> Logout
               </button>
          </div>
        </div>
    );
};

export default Header;