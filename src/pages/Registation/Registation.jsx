import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import banner from '../../assets/banner.jpg';
import { toast } from 'react-hot-toast';

const Registation = () => {
    const {createAccount, updateUser, verifyEmail} = useContext(AuthContext)
     const navigate = useNavigate();
     const location = useLocation();
     const [accepted, setAccepted] = useState(false)
     let from = location?.state?.from?.pathname || "/";

    const handleSubmit =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        createAccount(email, password)
         .then((userCredential) => {
         const user = userCredential.user;
         updateUser(name, photo);
         navigate("/login")
         verifyEmailHandler()
         console.log(user);
         toast.success("Place verify your email address before login")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log(errorMessage);
  });       
    }
    const handleAccepted=(e)=>{
      setAccepted(e.target.checked);
    }
    const verifyEmailHandler=()=>{
      verifyEmail()
      .then(result => {

      })
      .catch(err =>{
            console.log(err.message);
      })
    }
    return (
        <div style={{backgroundImage : `linear-gradient(30deg, rgba(22, 49, 100, 20%),rgba(83, 13, 172, 30%)),url(${banner})`, backgroundSize : 'cover'}}  className='bg-[#6a7ec1] flex py-9 px-2 justify-center h-screen text-[#23232f] relative'>
               <form onSubmit={handleSubmit} className="px-3 pb-9 pt-3 bg-[#ece6e6] rounded w-[400px]">
                    <h2 className='text-2xl font-bold text-center'>News 360</h2>
                     <div className="mt-5">
                           <label className='text-blue-800 font-[500]'>Name</label>
                           <input name="name" type="text" className=' bg-[#ffffff75] border border-blue-700 placeholder:text-gray-600 w-full p-2 rounded' placeholder='enter your name'/>
                     </div>
                     
                     <div className="mt-5">
                           <label className='text-blue-800 font-[500]'>Photo URL</label>
                           <input name="photo" type="text" className=' bg-[#ffffff75] border border-blue-700 placeholder:text-gray-600 w-full p-2 rounded' placeholder='enter your photo url'/>
                     </div>
                  
                     <div className="mt-5">
                           <label className='text-blue-800 font-[500]'>Email</label>
                           <input name="email" type="email" className=' bg-[#ffffff75] border border-blue-700 placeholder:text-gray-600 w-full p-2 rounded' placeholder='enter your email'/>
                     </div>
                      
                     <div className="mt-5">
                     <label className='text-blue-800 font-[500]'>Password</label>
                      <input name="password" type="password" className=' bg-[#ffffff75] border border-blue-700 placeholder:text-gray-600 w-full p-2 rounded' placeholder='enter your password'/>
                     </div>

                     <div className="form-control mt-3">
                        <label className="label cursor-pointer flex justify-start">
                        <input onClick={handleAccepted} type="checkbox" className="checkbox checkbox-primary" />
                        <span className="ml-2">Accept <Link to='/terms'>Terms And Conditions</Link></span> 
                        </label>
                        </div>

                     <p className='float-right mt-2 text-[14px]'>already created an account? <Link to='/login'>Login</Link></p>
                      <input disabled={!accepted} type="submit" value="sign up" className={`${accepted ? 'bg-[#4c4cec]' : 'bg-[#babacb]'}  w-full mt-5 text-white p-2 rounded cursor-pointer`}/>
                      
                         
                </form>
        </div>
    );
};

export default Registation;