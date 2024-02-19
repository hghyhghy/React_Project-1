

import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Boxes = () => {

  const cards =[useAnimation()]
  const increase = (index) => {
    cards[index].start({scale:"1"})
  }

  const decrease = (index) => {
    cards[index].start({scale:"0"})
  }

  const boxes = [useAnimation() , useAnimation()]
  const increase1 = (index) => {
    boxes[index].start({scale:"4"})
  }
  const decrease1 = (index) => {
    boxes[index].start({scale:"0"})
  }
  const change = [useAnimation()]

  
  
  return (
    <motion.div  data-scroll data-scroll-section data-scroll-speed="-0.6" className="w-full h-full">
        <div className="relative w-full h-screen px-10 bg-zinc-400">


        <h1 className="box mt-[30vh] ml-[1vh] px-[40vw] font-semibold  tracking-tight border-b-[1px] text-black  border-zinc-800 pb-10">.Clients Review.</h1>
        </div>
    

        <motion.div 
        
          
        onHoverStart={ () => increase(0)}
        onHoverEnd={ () => decrease(0)}
        
        className = "w-full h-full names"> 
        

        <h1 className="rounded-md  py-10 tracking-widest absolute ml-[15vw] font-mono text-2xl font-semibold -mt-[80vh] text-zinc-800">


            {"SUBHAM.SARKAR".split('') .map( (item,index) => 
            
            <motion.span   
            
            initial={{scale:"0"}} 
            
            
            animate={cards[0]}   

            transition={{ease:[0.22,1,0.36,1] , delay:index*0.06}}
            
            className="inline-block" key={index}>
              
              
              {item}

            
            


              
            </motion.span>
            
            )}
          </h1>
          <img className="bg-cover cursor-pointer myimg rounded-3xl" src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />

        
        </motion.div>
        <div> 

        <p className="myp"> They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>

        </div>

        <motion.div 
     
   
     
      className="flex items-center justify-end gap-2 mt-5">

          <motion.button 

          onHoverStart={ () => increase1(0)}
          onHoverEnd={ () => decrease1(0)}

       
          


          className= "p-2 px-3 py-3 font-mono text-xl font-light text-black uppercase border border-zinc-900 bg-zinc-400 myb rounded-3xl"> Audit Paper </motion.button>

        <motion.div 
        
        initial={{scale:"0"}}
        animate={boxes[0]}
        style={{transition:"all ease-in-out 0.5s"}}
        
        className="w-2 h-2 rounded-full myround1">
          <FaArrowRightLong className=" -rotate-45 absolute w-1.5 h-1.5 transform -translate-x-1/2 -translate-y-1/2 bg-cover top-1/2 left-1/2 text-white" />
          
        </motion.div>
     

      <motion.button 
      
      onHoverStart={ () => increase1(1)}
      onHoverEnd={ () => decrease1(1)}
      
      className= "p-2 px-3 py-3 font-mono text-xl font-light text-black uppercase border border-zinc-900 bg-zinc-400 myb1 rounded-3xl"> Copywriting 
      </motion.button>


      <motion.div 
        
        initial={{scale:"0"}}
        animate={boxes[1]}
        style={{transition:"all ease-in-out 0.5s"}}
        
        className="w-2 h-2 rounded-full myround2">
             <FaArrowRightLong className=" -rotate-45 absolute w-1.5 h-1.5 transform -translate-x-1/2 -translate-y-1/2 bg-cover top-1/2 left-1/2 text-white" />
          
        </motion.div>
     

     </motion.div>


    
     </motion.div>
  )
}

export default Boxes

