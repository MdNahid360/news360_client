import React, { useState } from 'react';
import { HiOutlineListBullet, HiSquares2X2 } from 'react-icons/hi2';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../../Shared/NewsCart/NewsCart';

const Category = () => {
    const categoryNews = useLoaderData()
     const [mode, setMode] = useState('line');
     return (
        <div>
           <div className="flex items-center justify-between bg-white p-2 rounded">
               <h3 className='font-bold'>Category news : </h3>
               <div className="flex justify-center items-center">
                   <button className={`${mode === 'box' ? 'bg-[#e0edff] ' : ''} p-1 text-[22px] bg-gray-200 mx-2 rounded-lg outline-none border-none focus:border-none focus:outline-none text-[#535673]`}  onClick={()=> setMode('box')}><HiSquares2X2 className={`${mode === 'box' ? 'text-[#5793ce]' : ''}`}></HiSquares2X2></button>
                 
                   <button className={`${mode === 'line' ? 'bg-[#e0edff] ' : ''} p-1 text-[22px] bg-gray-200 mx-2 rounded-lg outline-none border-none focus:border-none focus:outline-none`}  onClick={()=> setMode('line')}><HiOutlineListBullet className={`${mode === 'line' ? 'text-[#5793ce]' : ''}`}></HiOutlineListBullet></button>
               </div>
           </div>
           <div className={`${mode === 'box' ? 'grid' : ''} grid-cols-2 md:gap-2 gap-0 mt-2`}>
                {
                    categoryNews.map((news, index) => <NewsCart index={index} key={news._id} news={news}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default Category;