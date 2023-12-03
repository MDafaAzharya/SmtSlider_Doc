import { useState } from 'react';
import Navbar from './component/Navbar';
import Pageone from './component/PageOne';
import Pagetwo from './component/Pagetwo';
import Pagethree from './component/PageThree';
import Footer from './component/Footer';
function App() {

  return (
    <>
      <Navbar/>
      <Pageone/>
      <Pagetwo/>
      <Pagethree/>
      <Footer/>
    </>
  )
}

export default App
