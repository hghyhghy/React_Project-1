

import { motion,useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import {Power4} from "gsap/all"

const Featured = () => {

  const cards = [useAnimation(), useAnimation()]

  const  handleHover = (index) =>{
    
    cards[index].start({y:"0"})
  }

  const  handleHoverend = (index) =>{
    
    cards[index].start({y:"100%"})
  }
 
  const inr = [useAnimation(), useAnimation()]

  const increase= (index) => {
    inr[index].start({scale:"0.9", cursor:"pointer"})

  }

  const decrease= (index) => {
    inr[index].start({scale:"1"})

  }

 
  return (
    <div  className="w-full py-20 bg-zinc-900">
        <div className="w-full px-20 -py-5">


    <h1 className="text-5xl tracking-tight border-b-[1px] border-zinc-700 pb-20 text-white-950">Featured Projects</h1>
           
        </div>
        <div className='px-20'>
       
        <div className="flex w-full gap-5 mt-10 cards">

           <motion.div 
           
           onHoverStart={()=> handleHover(0)} 
           onHoverEnd={ () => handleHoverend(0)}
           
           
           className=" cardcontainer relative  w-1/2 h-[75vh] ">
              <h1  className="  overflow-hidden flex absolute text-[#CDEA68] left-full z-[99] text-7xl font-semibold leading-none tracking-tighter font-sans -translate-x-1/2 top-1/2 -translate-y-1/2">
                
                {"FYDE".split( '' ).map( (item,index) =>
                <motion.span  initial={{y:"100%"}} 
                
                animate={cards[0]} 

                transition={{ease:[0.22,1,0.36,1] , delay:index*0.05}}
                
                className="inline-block" key={index}>
                  
                  
                  {item}



                </motion.span>)}
                </h1>
         <motion.div 
         
         
         onHoverStart={ () => increase(0)}
         onHoverEnd={ () => decrease(0)}

         initial={{scale:"1"}}
         animate={inr[0]}
         style={{transition:"all ease-in-out 0.6s"}}
         
         className="w-full h-full overflow-hidden card rounded-xl">

            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
         </motion.div>

           </motion.div>
          
        <motion.div 
        
        
        onHoverStart={()=> handleHover(1)} 
        onHoverEnd={ () => handleHoverend(1)}
        
        
        className="relative  cardcontainer w-1/2 h-[75vh]">
            

         <h1  className="flex overflow-hidden absolute text-[#CDEA68] right-full z-[99] text-7xl font-semibold leading-none tracking-tighter font-sans translate-x-1/2 top-1/2 -translate-y-1/2">
         
         {"VISE".split( '' ).map( (item,index) => 
         
         <motion.span  initial={{y:"100%"}} 
                
         animate={cards[1]} 

         transition={{ease:[0.22,1,0.36,1] , delay:index*0.05}}
         
         className="inline-block" key={index}>
           
           
           {item}



         </motion.span>)}
         
         </h1>


         <motion.div
         
         onHoverStart={ () => increase(1)}
         onHoverEnd={ () => decrease(1)}

         initial={{scale:"1"}}
         animate={inr[1]}
         style={{transition:"all ease-in-out 0.6s"}}
         
         
         className="w-full h-full overflow-hidden card rounded-xl">


            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/VISE2-1340x848.jpg" alt="" />
            
         </motion.div>
         

        </motion.div>


        </div>

        </div>
       
    
    </div>
  )
}

export default Featured
