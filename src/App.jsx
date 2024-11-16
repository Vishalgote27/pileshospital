import React, { useRef } from 'react'
import WhatsAppButton from './component/WhatsAppButton'
import Home from './component/Home'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import TestimonialPage from './secondfolder/TestimonialPage'
import TeleConsultationButton from './component/TeleConsultaionButton'
import GalleryTwo from './component/GalleryTwo'


const App = () => {


  const testimonialsRef = useRef(null);
  return <>

    <TeleConsultationButton />
    <WhatsAppButton />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/review' element={<TestimonialPage />} />
      </Routes>
    </BrowserRouter>


  </>
}

export default App