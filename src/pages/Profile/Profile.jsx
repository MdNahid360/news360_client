import React, { useContext } from 'react';
import { HiNewspaper, HiPencilSquare } from 'react-icons/hi2';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const handleUpdateUser=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pic = form.pic.value;
        const password = form.password.value;
        
        console.log({"name" : name, "pic" : pic, "email" : email, "password" : password});
    }
    return (
        <div>
            <h2 className="font-bold pb-2 border-b border-[#26262b]">Profile</h2>
            <section className="mt-2 bg-white p-2 rounded">

                 <header className='rounded-lg flex items-center gap-2 justify-between'>
                       <div className="flex items-center gap-2">
                           <img src={user.photoURL} alt="" className="w-[100px] h-[100px] rounded-full border-2 border-[indigo] p-1 " />
                            <div className="">
                                <h3 className='font-bold text-2xl'>{user?.displayName}</h3>
                                <p className='text-[gray]'>{user?.email}</p>
                            </div>
                       </div>
                       <div className="">
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-3" className=""><HiPencilSquare className='text-2xl text-[#332e49]'></HiPencilSquare></label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box bg-white rounded-lg relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <form onSubmit={handleUpdateUser} className="w-full">
                                <h2 className="text-center font-bold text-xl">Update Profile</h2><br />
                                     <input className='w-full bg-[#e6dfdf] py-[5px] font-[400] px-3 rounded border-2 mt-3 border-blue-500' type="text" name="name" defaultValue={user?.displayName} placeholder="Enter your name"/>
                                    
                                     <input className='w-full bg-[#e6dfdf] py-[5px] font-[400] px-3 rounded border-2 mt-3 border-blue-500' type="text" name="pic" defaultValue={user?.photoURL} placeholder="Enter your photo url"/>
                                    
                                     <input className='w-full bg-[#e6dfdf] py-[5px] font-[400] px-3 rounded border-2 mt-3 border-blue-500' type="email" name="email" defaultValue={user?.email} placeholder="Enter your photo url"/>
                                   
                                     <input className='w-full bg-[#e6dfdf] py-[5px] font-[400] px-3 rounded border-2 mt-3 border-blue-500' type="text" name="password"  placeholder="Enter your new password"/> 

                                     <input type="submit" className="bg-[#5252ff] text-white px-5 py-2 rounded cursor-pointer mt-3 float-right" value="Update" />
                                </form>
                            </div>
                            </div>
                       </div>
                 </header>
                 <main>
                    <div className="flex justify-between pb-2 relative">
                         <h2 className='font-bold mt-3'>Media</h2>
                         <label htmlFor="my-modal-6" className="px-3 bg-blue-500 flex items-center text-white rounded-lg cursor-pointer">create news</label>
                    </div>
                    <hr />
                    <div className='flex justify-center items-center'>
                        <HiNewspaper className="text-8xl text-[#0000003e]"></HiNewspaper>
                    </div>
                    {/* modal */}
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-[white] relative">
                         <label htmlFor="my-modal-6" className="w-[40px] h-[40px] flex items-center justify-center text-2xl cursor-pointer rounded-full float-right">x</label>
                        <h2 className="text-2xl text-center">Create news</h2>
                         <div className="mt-8">
                            <label>title</label><br />
                            <input type="text" name="" className='w-full bg-[#ff000000] border border-indigo-500 px-2 py-[3px] rounded' placeholder="type news title" id="" />
                         </div>
                         <div className="mt-3">
                            <label>photo</label><br />
                            <input type="file" name="" className='w-full bg-[#ff000000] border border-indigo-500 px-2 py-[3px] rounded' placeholder="type news title" id="" />
                         </div>
                         
                         <div className="mt-3">
                            <label>description</label><br />
                            <textarea name="" id="" cols="30" rows="10" className='w-full bg-[#ff000000] border border-indigo-500 px-2 py-[3px] h-[100px] rounded' placeholder="type news title" ></textarea>
                         </div>
                        <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Post</label>
                        </div>
                    </div>
                    </div>
                 </main>
            </section>
        </div>
    );
};

export default Profile;