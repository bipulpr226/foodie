import { createBrowserRouter } from "react-router-dom";
import About from './About'
import Contact from "./Contact";
import Cart from "./Cart";
import Body from "./Body";
import App from '../App';
import ErrorPage from "./ErrorPage";
import { Menu } from "./Menu";
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[

{
    path:"",
    element:<Body/>

},
{
    path:"contact",
    element:<Contact/>
    
},
{
    path:"cart",
    element:<Cart/>
    
} ,
{
    path:"about",
    element:<About/>
    
} ,
{
    path:"menu/:id",
    element:<Menu/>
    
} ]
    }
]);
export default appRouter;