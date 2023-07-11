import First from "./Core/first";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
function App() {
  const router=createBrowserRouter([
    {path:'/',element:<First/>},
    {path:'/about',element:<About/>},
    {path:'/contact',element:<Contact/>}
  ])
 

  return (
    <div>
      <RouterProvider router={router}/>
      

      
    </div>
    
  );
}
export default App;


