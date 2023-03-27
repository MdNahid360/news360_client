import React, { useContext } from 'react';
import { BsGoogle, BsTwitter, BsFacebook } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import AddSlide from '../../../components/AddSlide/AddSlide';
import { AuthContext } from '../../../context/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

const SideSection = () => {
    const {providerLogin, setUser} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin =()=>{
        providerLogin(googleProvider)
        .then(result=>{
           const user = result.user;
          setUser(user);
        }).catch(err =>{
            console.log(err);
        })
    }
    return (
        <div className='p-3 h-screen'>
            <div className="">
                <button onClick={handleGoogleLogin} className="flex gap-2 items-center border w-full mt-2 duration-200 text-[#34343d] bg-[#edecec]"><BsGoogle></BsGoogle> Login with google</button>
            
                <button className="flex gap-2 items-center border w-full mt-2 bg-[#3ab0d7] duration-200 text-[#ffffff]"><BsFacebook></BsFacebook> Login with google</button>
            </div>
            <div className="">
                <h4 className='font-semibold mt-4 text-md '>Find us on</h4>
                <div className="">
                    <ul>
                        <li className='mt-2'>
                            <a className='flex items-center gap-2 border p-2 border-[gray] rounded ' href="#"><BsFacebook className='text-lg'></BsFacebook> Facebook</a>
                        </li>
                        <li className='mt-2'>
                            <a className='flex items-center gap-2 border p-2 border-[gray] text-[#3bc54b] rounded ' href="#"><AiOutlineWhatsApp className='text-xl'></AiOutlineWhatsApp> WhatsApp</a>
                        </li>
                        <li className='mt-2'>
                            <a className='flex items-center gap-2 border p-2 border-[gray] rounded ' href="#"><BsTwitter className='text-lg'></BsTwitter> Twitter</a>
                        </li>
                    </ul>
                   <div className="relative overflow-hidden mt-8 rounded-xl">
                       <AddSlide></AddSlide>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SideSection;