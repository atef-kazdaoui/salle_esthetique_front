import React from 'react'
import Carousel from './Carousel';
import Filtreimage from './Filtreimage'
import './Home.css'

function home() {
 
  return (
    <div className='body'>
     
     <Carousel />
     <div className='produits'>
     <h1>nos produits</h1>
    
     <Filtreimage/>
     
      </div>
    
    
    
    
    </div>
   
   
   
  )
}

export default home
