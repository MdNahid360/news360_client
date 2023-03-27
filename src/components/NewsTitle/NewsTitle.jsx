import React from 'react';

const NewsTitle = () => {
    return (
        <div className="flex items-center bg-[#ffffffa3] border border-[#496bff] w-[97%] md:w-[90%] mt-2 mx-auto">
            <div className="bracking-news bg-[#5127ab] h-[40px] md:px-3 px-2 flex items-center text-center md:text-md text-sm">Breaking <span className="ml-2"> News</span> </div>
            <marquee className=" h-[40px] flex items-center text-black" direction="left"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde accusamus possimus dolorem provident deleniti vero minus magnam voluptatibus non, id debitis. In voluptatum enim, quo illum nobis, optio nostrum accusantium delectus velit tenetur dicta laborum molestias natus mollitia beatae magnam ut omnis facilis, libero aut soluta quibusdam magni. Laborum sapiente fuga repellat cum blanditiis, assumenda perferendis in veritatis id tempore ipsum doloribus alias excepturi veniam at voluptatum numquam. Recusandae consequuntur reiciendis nemo amet temporibus voluptatem ea beatae perferendis. Eos fuga rem accusantium ad ab saepe, incidunt est molestiae pariatur! </marquee>
        </div>
    );
};

export default NewsTitle;