import React from 'react';
import { HiEye, HiStar} from "react-icons/hi2";
import { EyeIcon, StarIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { BsBookmark, BsShare } from 'react-icons/bs';

const NewsCart = ({news}) => {
    const {author,_id,title, thumbnail_url,image_url ,total_view, details, rating} = news;
    return (
        <div className="p-3 bg-white mb-4">
            <div className="header flex items-center justify-between">
                 <div className="flex gap-2">
                     {author?.img ? <img src={author?.img} className="w-[50px] rounded-full" alt="" /> : <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" className='w-[50px] rounded-full' alt=""/>}

                    <span className="">
                      <h5 className="text-md font-[500]">{author?.name ? <>{author.name}</> : <>Unknown</>}</h5>
                            <p className='text-[gray] text-[12px] font-[600]'>{author?.published_date ? <>{author.published_date}</> : <>**************</>}</p>
                    </span>
                 </div>
                 <div className="">
                     <button className='duration-300 hover:bg-[#4c008233] p-2 border-none  hover:text-[indigo]'>
                         <BsBookmark className=''></BsBookmark>
                     </button>
                    
                     <button className='duration-200 hover:bg-[#b9466633] p-2 border-none  hover:text-[#a32aa3]'>
                         <BsShare className=''></BsShare>
                     </button>
                 </div>
            </div>
            <img src={image_url} alt="" className="w-full mt-2" />
            <div className="news_info">
                 <ul className="flex items-center gap-5 mt-3">
                    <li className="flex gap-1 items-center text-indigo-600">
                        <EyeIcon className='w-6'></EyeIcon> {total_view}
                    </li>
                    <li className="flex gap-1 items-center 00">
                        <HiStar className='text-[22px] text-[gold]'></HiStar> <span>{rating.number}</span>
                    </li>
                 </ul>
                 <h2 className='text-xl font-[500] mt-2'>{title}</h2>
                 <p className="mt-3 text-[#5c5c5c] ">{
                    details.length > 200 ? <span>{details.slice(0, 250)}<Link to={`/news/${_id}`} className='text-blue-400 ml-1 underline decoration-solid	'>...Read more</Link></span> : <span>{details}</span>
                 }</p>
            </div>
        </div>
    );
};

export default NewsCart;