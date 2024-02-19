

import React from 'react';
import { motion } from 'framer-motion';

function Marquee()  {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed="-.1"  className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div  className="flex pr-20 overflow-hidden border-t-2 border-b-2 text border-zinc-300 whitespace-nowrap">

      <motion.h1
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ ease:'linear', repeat:Infinity, duration: 10, yoyo:true }}
        className='text-[15vw] leading-none font-bold font-mono uppercase r -pt-2 -mb-[1vw]'
      >
        We are Ochi.
      </motion.h1>
      <motion.h1
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ ease:'linear', repeat:Infinity, duration: 10, yoyo:true }}
        className='text-[15vw] leading-none font-bold uppercase  -pt-2 -mb-[1vw] font-mono'
      >
        We are Ochi.
      </motion.h1>
      <motion.h1
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ ease:'linear', repeat:Infinity, duration: 10 }}
        className='text-[15vw] leading-none font-bold font-mono uppercase tracking-tighter -pt-2 -mb-[1vw]'
      >
        We are Ochi
      </motion.h1>

      </div>
    </div>
  )
}

export default Marquee;
