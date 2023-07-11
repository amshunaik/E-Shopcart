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



// ApI code is below mentioned for movie: uncoment it and run it
// }
// export default App;
// import Experience from "./components/Movies/Experience";
// function App(){
//   return(
//     <Experience/>

//   )

// }
// export default App;
// import Todo from './components1/Actions/todo'
// function App() {
//   return (
//     <div>
      

//       <Todo/>
      

      
//     </div>
    
//   );
// }

//export default App;

// import {createBrowserRouter,RouterProvider} from 'react-router-dom';
// import Home from './page1/Home';
// import Contact from './page1/Contact';
//  function App(){
//   const router=createBrowserRouter([{
//     path:'/',element:<Home/>
//   },
//   {path:'/contact',element:<Contact/>}])
//   return(
//     <div>
//       <RouterProvider router={router}/>

//     </div>

//   )

//  }
//  export default App;