


import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landingpage = () => {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.7"   className='w-full h-screen pt-[20vh] bg-zinc-900'>

        <div className='px-20 py-15 mt-50 textstructure '> 

        {["We Create ", "Eye Opening " , "Presentations "] .map((item,index) => {
            return (
            <div key={index} className=' masker'> 
            <div className="flex items-end pt-1 overflow-hidden w-fit">
            { index === 1 &&
                  
                  (
                  
                  
                  <motion.div 
                  initial={{width:0}} 
                  animate={{width:"9vw"}} 
                  transition={{ease:[0.76, 0, 0.24, 1],duration:1}}
                  
                  className=" mr-[0.3vw] rounded-md w-[8vw] h-[4.5vw] 
                  
                  relative ">


                    <img className="rounded-md" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                  </motion.div>
                  )
                  
                  
                  }
                  
            <h1 className="pt-[0.5vw] -mb-[1vw] font-sans font-bold leading-[6.9vw] tracking-tighter uppercase text-[6vw]"> {item} </h1>
            </div>
            </div>
            );
        
        })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between  items-center py-5 px-20">
       
       {["For Public And Private Companies", "From The First Pitch To Ipo"].map((item,index) => (<p key={index} className='font-semibold leading-none tracking-tight uppercase text-md'> {item} </p>))}
       
       <div className="flex items-center gap-5 start"> 
       <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase"> Start The Projcet </div>
       <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500  rounded-full -ml-2">
        
        <span className="rotate-[45deg]"> 

        <FaArrowUpLong/>
        </span>
       </div>
       </div>

        </div>
    </div>
  )
}

export default Landingpage;
