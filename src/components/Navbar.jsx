




import React from 'react'
import { motion,useAnimation } from 'framer-motion'

const Navbar = () => {

  
  const n =[useAnimation()]
  const hoverin = (index) => {
    n[index].start({textDecoration:"underline"})
  }

  const hoverout = (index) => {

    n[index].start({textDecoration:"none"})
  }
   
 
  
  return (

    <div className=' fixed z-[999] w-full px-10 py-8 font-[ "myfont.ttf "] flex justify-between items-center'>



          <div 
       
       
       
       className="logo"> 
        
        <h1 className="text-2xl font-bold "> ochi </h1>
       </div>

      

        <div className="flex gap-10 links">

                
        
                
        <div 
        
      
        
        className="flex gap-10 ">

        {[ "Services" , "Our Works" , "About Us" ,"Insights","Contacts"] .map((item,index)=>(
          
          
          
          <a key={index}  className={` mya font-lg   cursor-pointer   ${index === 4 && "ml-32"}`}>{item} </a>
          ))}
        </div>   
        </div>
     

    </div>
  )
}

export default Navbar
