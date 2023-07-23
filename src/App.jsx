import { useState } from 'react'
import Nav from './layout/Nav'
import Footer from './layout/Footer'
import Banner from './pages/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Banner/>


      <Footer/>
    
    </>
  )
}

export default App
