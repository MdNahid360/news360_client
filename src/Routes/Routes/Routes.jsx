import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Main from "../../components/Main/Main";
import Category from "../../pages/Category/Category/Category";
import News from "../../pages/News/News/News";
import Login from "../../pages/Login/Login";
import Registation from "../../pages/Registation/Registation";
import Profile from "../../pages/Profile/Profile";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import TermsAndCondition from "../../pages/Others/TermsAndCondition/TermsAndCondition";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=> fetch('https://news360-mu.vercel.app/news')
            },
            {
                path : '/category/:id',
                element : <Category></Category>,
                loader : ({params})=>fetch(`https://news360-mu.vercel.app/category/${params.id}`)
            },
            {
                path : "/profile",
                element : <PrivetRoute><Profile></Profile></PrivetRoute>
            },
            {
                path : "/news/:id",
                element : <PrivetRoute><News></News></PrivetRoute>,
                loader : ({params})=> fetch(`https://news360-mu.vercel.app/news/${params.id}`)
            } 
        ]
    },  {
                path : "/login",
                element : <Login></Login>
            },{
                path : "/signUp",
                element : <Registation></Registation>
            }
            ,{
                path : "/signUp",
                element : <Registation></Registation>
            }
            ,{
                path : "/terms",
                element : <TermsAndCondition></TermsAndCondition>
            }
           
        
])