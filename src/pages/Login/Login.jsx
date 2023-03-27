import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import banner from '../../assets/banner.jpg';
import { toast } from 'react-hot-toast';
const Login = () => {
    const [error, setError] = useState()
    const {loginUser, setLoader} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSubmit =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
        .then(result => {
            const user = result.user;
            setError('');
            if(user.emailVerified) {
                setLoader(false)
                navigate(from, {replace : true});
            }else{
                toast.error("Your email is not verified, Please check your email")
            }
        }).catch(err => {
            setError(err.message);
            
        })
    }
    return (
        <div style={{backgroundImage : `linear-gradient(30deg, rgba(22, 49, 100, 20%),rgba(83, 13, 172, 30%)),url(${banner})`, backgroundSize : 'cover'}} className='flex px-2 py-9 justify-center h-screen text-[#23232f] relative'>
               <form onSubmit={handleSubmit} className="px-3 pb-9 pt-3 bg-[#ece6e6] rounded w-[360px]">
                    <h2 className='text-2xl font-bold text-center'>News 360</h2>
                    <p className="text-red-600 text-center mt-3">{error}</p>
                     <div className="mt-2">
                           <label className='text-blue-800 font-[500]'>Email</label>
                           <input name="email" type="email" className=' bg-[#ffffff75] border border-blue-700 placeholder:text-gray-600 w-full p-2 rounded' placeholder='enter you email'/>
                     </div>
                      
                     <div className="mt-5">
                     <label className='text-blue-800 font-[500]'>Password</label>
                      <input name="password" type="password" className=' bg-[#ffffff75] border border-blue-700 placeholder:text-gray-600 w-full p-2 rounded' placeholder='enter you password'/>
                     </div>
                     <small className='float-right mt-2'><Link to=''>Forget password</Link></small>
                      <input type="submit" value="login" className='bg-[#4c4cec] w-full mt-5 text-white p-2 rounded cursor-pointer'/>
                      <p className='float-right mt-2 text-[14px]'>If you do not have any account <Link to='/signUp'>Create account</Link></p>
                         
                </form>
        </div>
    );
};

export default Login;