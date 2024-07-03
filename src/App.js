import logo from './logo.svg';
import './App.css';
import Logo from "./assets/images/resturant-removebg-preview.png"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <>
   <Header/>;
{/* <Ro   uterProvider router={appRouter}/> */}
<Outlet/>
   <Footer/> 
   </>

  );
}

export default App;
