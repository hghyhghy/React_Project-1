

import React from 'react'
import { motion,useAnimation } from 'framer-motion'
import { Power4,Power3 } from 'gsap'

const Cards = () => {

  const cards = [useAnimation() , useAnimation() , useAnimation()]

  const hoverin = (index) => {

    cards[index].start({scale:"1.09"})
  }
   
  const hoverout = (index) => {
    cards[index].start({scale:"1"})
  }



  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3"   className="flex items-center w-full h-screen gap-10 px-32 bg-zinc-900">

        <motion.div

        
         
         onHoverStart={ ()=>hoverin(0)}
         onHoverEnd={ ()=> hoverout(0)}
        
        className="w-1/2 cardcontainer h-[50vh] ">

            <motion.div 
            
            initial={{scale:"1"}}

            animate={cards[0]}

            style={{ transition:"all ease-in-out 0.6s"}}
            
            className=" -top-12 relative rounded-xl card w-full h-full bg-[#004D43] flex items-center justify-center">


                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-12">&copy;ochi 2019</button>
            </motion.div>

        </motion.div>

         
        <motion.div className=" flex gap-10 w-1/2 cardcontainer h-[50vh] ">
        <motion.div
        
        onHoverStart={ ()=>hoverin(1)}
        onHoverEnd={ ()=> hoverout(1)}

         
        initial={{scale:"1"}}

        animate={cards[1]}

        style={{ transition:"all ease-in-out 0.6s"}}
        

        
        className="  -top-12 flex items-center justify-center relative rounded-xl card w-1/2 h-full bg-[#192826]">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className="absolute px-5 py-1 border-2 rounded-full left-15 bottom-12">&copy;ochi 2019</button>
        </motion.div>
        <motion.div
        
        
        onHoverStart={ ()=>hoverin(2)}
        onHoverEnd={ ()=> hoverout(2)}

         
        initial={{scale:"1"}}

        animate={cards[2]}

        style={{ transition:"all ease-in-out 0.6s"}}
        
        
        className="  -top-12 flex items-center justify-center relative rounded-xl card w-1/2 h-full bg-[#192826]">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className="absolute px-5 py-1 border-2 rounded-full left-15 bottom-12">&copy;ochi 2019</button>
        </motion.div>

            
            </motion.div>
          
      
    </div>
  )
}

export default Cards
