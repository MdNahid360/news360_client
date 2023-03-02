import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [categories, setCategory] = useState([]);
    useEffect(()=>{
         fetch(`http://localhost:8000/new-category`)
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    console.log(categories);
    return (
        <div className="capitalize">
            <h4 className='text-lg font-semibold border-b-2 pb-2 text-black'>all categories</h4>
            <ul>
                {
                    categories.map(cItem => <li className="bg-[#e6e2ff] mt-2 px-2 py-2 rounded " key={cItem.id}>
                         <Link className='text-[#392b87]' to={`/category/${cItem.id}`}>{cItem.name}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default SideBar;