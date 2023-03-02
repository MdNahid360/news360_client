import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer/Footer';
import Header from '../../pages/Shared/Header/Header';
import SideBar from '../../pages/Shared/SideBar/SideBar';
import SideSection from '../../pages/Shared/SideSection/SideSection';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="md:grid grid-cols-4 md:w-[90%] w-[97%] mt-3 mx-auto gap-3 text-black">
                <div className="sidebar md:block hidden bg-[white] rounded-xl p-4 h-screen">
                  <SideBar></SideBar>
                </div>
                <div className="col-span-2 bg-[white] rounded-xl">
                     <Outlet></Outlet>
                </div>
                <div className="right-side-bar bg-[white] rounded-xl md:mt-0 mt-3">
                    <SideSection></SideSection>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;