


import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { FaLocationArrow } from "react-icons/fa";

const About = () => {
 
  const s= [useAnimation(),useAnimation()]

  const start = (index) => {
    s[index].start({scale:"1.1", backgroundColor:"black",color:"white"})
  }

  const stop = (index) => {
    s[index].start ({scale:"1",backgroundColor:"white" , color:"black"})
  }

 const [scale, setscale] = useState(1)

 const hoverin = () =>{
  setscale(1.5)
 }

 const hoverout = () => {
  setscale(1)
 }


 const cards = [useAnimation()]

  const increase = (index) => {
    cards[index].start({scale:"1"})
  }

  const decrease = (index) => {
    cards[index].start({scale:"0"})
  }



  

  return (
    <motion.div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
     <h1 className="font-sans text-[4vw] leading-[4.5vw] tracking-tight"> Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
     <div  className="pt-10 w-full flex gap-5 border-t-[1px] border-t-[#a1b562] mt-20">
        <motion.div className="w-1/2 "> 
        <h1 className="text-5xl"> Our approach: </h1>
        <button 
        
    
        
           className="flex items-center gap-10 px-10 py-6 mt-10 text-white uppercase rounded-full mybutton bg-zinc-900" >
             Read More 
            <motion.div  
            
            onHoverStart={ () => hoverin()}
            onHoverEnd={ () => hoverout()}

            style={{  transform:`scale(${scale}`,transition:"all ease-in-out 0.3s"}}

            
            className="bg-black rounded-full w-7 h-7 myround">

            <FaLocationArrow className= "absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 to-black" />

            </motion.div>
            </button>
        </motion.div>
        <motion.div
        
        
        onHoverStart={ () => increase(0)}
        onHoverEnd={ () => decrease(0)}

        
        className="w-1/2 h-[70vh] rounded-3xl  relative ">

          <h1 className="rounded-md  py-10 tracking-widest absolute -ml-[49vw] font-mono text-6xl font-semibold mt-[40vh] text-zinc-800 ">


            {"THE.FUTURE.OF.TODAY".split('') .map( (item,index) => 
            
            <motion.span   
            
            initial={{scale:"0"}} 
            
            
            animate={cards[0]}   

            transition={{ease:[0.22,1,0.36,1] , delay:index*0.06}}
            
            className="inline-block" key={index}>
              
              
              {item}

            
            


              
            </motion.span>
            
            )}
          </h1>


       
          <img  className="w-[50vw] h-[70vh] rounded-3xl"  src="https://qph.cf2.quoracdn.net/main-qimg-dad52d37a2cffeada568b53cca952244" alt="" />
        </motion.div>
     </div>

     <motion.div 
     
   
     
      className="flex items-center justify-end gap-10 mt-5">
      <motion.button 
      
       
      onHoverStart={ () => start(0)}
      onHoverEnd={ () => stop(0)}
       
      initial={{scale:"1"}}
      animate={s[0]}
      style={{transition:"all ease-in-out 0.3s"}}
      
      
      className= "p-5 px-10 py-4 font-mono font-semibold text-black uppercase bg-white border border-blue-900 text-1xl rounded-3xl"> Audit </motion.button>

      <motion.button 
      
        
      onHoverStart={ () => start(1)}
      onHoverEnd={ () => stop(1)}
       
      initial={{scale:"1"}}
      animate={s[1]}
      style={{transition:"all ease-in-out 0.3s"}}
      
      className= "p-5 px-10 py-4 font-mono font-semibold text-black uppercase bg-white border border-blue-900 text-1xl rounded-3xl"> Copywriting </motion.button>

     </motion.div>

    
       

    </motion.div>
  )
}

export default About
