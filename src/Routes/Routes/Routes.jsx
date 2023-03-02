import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Main from "../../components/Main/Main";
import Category from "../../pages/Category/Category/Category";
import News from "../../pages/News/News/News";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/category/:id',
                element : <Category></Category>
            },
            {
                path : "/news/:id",
                element : <News></News>
            }

        ]
    }
])