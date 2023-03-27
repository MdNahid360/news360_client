import { ArrowLeftIcon, EyeIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { BsBookmark, BsShare } from 'react-icons/bs';
import { HiStar } from 'react-icons/hi2';
import { Link, useLoaderData } from 'react-router-dom';
import NewsCart from '../../Shared/NewsCart/NewsCart';

const News = () => {
    const singleNews = useLoaderData()
    const {author,_id,title, category_id ,thumbnail_url,image_url ,total_view, details, rating} = singleNews;
     return (
        <div>
            <div className="p-3 bg-white"><img src="" alt="" />
                <header className='flex justify-between'>
                   <div className="flex gap-2">
                       {author?.img ? <img src={author?.img} className="w-[50px] rounded-full" alt="" /> : <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" className='w-[50px] rounded-full' alt=""/>}
                        <span>
                            <h5 className="text-md font-[500]">{author?.name ? <>{author.name}</> : <>Unknown</>}</h5>
                            <p className='text-[gray] text-[12px] font-[600]'>{author?.published_date ? <>{author.published_date}</> : <>**************</>}</p>
                        </span>
                   </div>

                </header>
                <img src={image_url} className="mt-3" alt="" />
                <div className="flex items-center justify-between">
                    <ul className="flex items-center gap-5 mt-3">
                        <li className="flex gap-1 items-center text-indigo-600">
                            <EyeIcon className='w-6'></EyeIcon> {total_view}
                        </li>
                        <li className="flex gap-1 items-center 00">
                            <HiStar className='text-[22px] text-[gold]'></HiStar> <span>{rating.number}</span>
                        </li>
                 </ul>
                     <div className="mt-1">
                     <button className='duration-300 hover:bg-[#4c008233] p-2 border-none  hover:text-[indigo]'>
                         <BsBookmark className=''></BsBookmark>
                     </button>
                    
                     <button className='duration-200 hover:bg-[#b9466633] p-2 border-none  hover:text-[#a32aa3]'>
                         <BsShare className=''></BsShare>
                     </button>
                 </div>
                </div>
                <h2 className="text-xl font-bold mt-4">{title}</h2>
                <p className="font-[400] mt-1">{details}</p>
                <Link to={`/category/${category_id}`}>
                    <button className="flex gap-2 p-2 mt-5 bg-blue-500 text-white"><ArrowLeftIcon className='w-6'></ArrowLeftIcon> see this category all news</button>
                </Link>
            </div>
        </div>
    );
};

export default News;