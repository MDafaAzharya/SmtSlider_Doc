import { useState } from 'react';
import Navbar from './component/Navbar';
import pageOne from './component/pageOne';
import Pagetwo from './component/Pagetwo';
import Pagethree from './component/PageThree';
import Footer from './component/Footer';
function App() {

  return (
    <>
      <Navbar/>
      <pageOne/>
      <Pagetwo/>
      <Pagethree/>
      <Footer/>
    </>
  )
}

export default App
