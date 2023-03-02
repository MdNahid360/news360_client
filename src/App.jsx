import './App.css'
import {RouterProvider} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './pages/Home/Home/Home';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div>
       <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App
