import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const SideBar = () => {
    const [categories, setCategory] = useState([]);
    useEffect(()=>{
         fetch(`https://news360-mu.vercel.app/new-category`)
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div className="capitalize">
            <h4 className='text-lg font-semibold border-b-2 pb-2 text-black'>all categories</h4>
            <ul>
                {
                    categories.map(cItem => <li className="mt-2 flex items-center overflow-hidden rounded relative w-[full] h-[50px] duration-200" key={cItem.id}>
                        <NavLink
                            to={`/category/${cItem.id}`}
                            className={({ isActive, isPending }) =>
                                isPending ? "px-2 flex items-center" : isActive ? "bg-[#c9e1fb] text-[#3c66e5] px-3 py-1 absolute w-full h-full flex items-center rounded-lg" : "px-3 py-1 absolute w-full h-full flex items-center duration-200 text-[#4c5ba4]"
                            }
                            >
                            {cItem.name}
                        </NavLink>
                         {/* <Link className='text-[#392b87]' to={`/category/${cItem.id}`}>{cItem.name}</Link> */}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default SideBar;