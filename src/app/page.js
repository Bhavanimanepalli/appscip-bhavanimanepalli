"use client"
import React from 'react'


import Header from './Components/Header'
import Body from './Components/Body'

import Hidefilters from './Components/Hidefilters'
import Footer from './Components/Footer'



const page = () => {
 
  return (
    <div>
     <Header/>
     <div style={{display:"flex", gap: "170px" }} >
     <Hidefilters/>
     <Body/>
     </div>
     <Footer/>
   

   
    
     
    </div>
  )
}

export default page