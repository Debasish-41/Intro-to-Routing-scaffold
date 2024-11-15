import { createBrowserRouter  , RouterProvider , createRoutesFromElements , Route }  from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';
import ItemDetails from "./pages/ItemDetails";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
function App() {

  // const routes = createRoutesFromElements(
  //   
  //   <Route path="/" element={<Navbar/>} />
  //    <Route index element={<Home/>} />
  //    <Route path="/About" element={<About/>}/>
  //    <Route path="/Items" element={<Items/>}/>
  //   <Route/>
  // );

  // const router = createBrowserRouter(routes);


  const router = createBrowserRouter ([
    {path: "/" , 
      element: <Navbar /> , 
      errorElement : <ErrorPage />,
      children :[
      {index : true , element: <Home /> },
      {path: "/about", element : <About />},
      {
        path: "/items", element : <Items />},
       
      {
        path: "items/:id",
        element : <ItemDetails/>
      },
   ],
   },

  ])
  return(
    <>
    <RouterProvider  router={router}/> 
    
    </>
  )
   
}

export default App;
