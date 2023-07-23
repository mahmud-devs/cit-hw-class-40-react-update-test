import { useState } from 'react'
import Nav from './layout/Nav'
import Footer from './layout/Footer'
import Banner from './pages/Banner'
import About from './pages/About'
import Service from './pages/Service'
import Solution from './pages/Expert'
import Solutionst from './pages/Solutionst'
import Startup from './pages/Startup'


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Rootlayout from './layout/Rootlayout'






function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(

      <>

        <Route  element={<Rootlayout/>}    >
          <Route  path='/' element={<Banner/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/expert' element={<Solution/>}/>
          <Route  path='/solution' element={<Solutionst/>}/>
          <Route  path='/startup' element={<Startup/>}/>
          <Route  path='/service' element={<Service/>}/> 
        </Route>
        



      </>
      



    )
  );



  return (
    <>
      <RouterProvider
        router={router}
      />


    </>
  )
}

export default App
