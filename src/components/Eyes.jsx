


import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const Eyes = () => {


  const [rotate, setrotate] = useState(0)


  useEffect( () => {
    window.addEventListener("mousemove" , (e) => {

      let mouseX=e.clientX;
      let mouseY=e.clientY;

      let  deltax = mouseX-window.innerWidth/2;
      let  deltay = mouseY-window.innerHeight/2;
      
      var angle = Math.atan2(deltay,deltax) * (180/Math.PI);
      
      setrotate(angle-180)
      //  set rotate val will be updated in usestate
    })
  })


  return (
    <div className="w-full h-screen overflow-hidden eyes">
      <div data-scroll data-scroll-section  data-scroll-speed="-.7" className=" relative bg-cover bg-center w-full h-full bg-red-500 bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
      <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">

        <div className="flex items-center justify-center rounded-full w-[15vw] h-[15vw] bg-zinc-100">

          <div className="relative w-2/3 rounded-full h-2/3 bg-zinc-900">
          <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="w-full h-10 line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">

          <div className="w-10 h-10 rounded-full bg-zinc-100">

          </div>
          </div>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-full w-[15vw] h-[15vw] bg-zinc-100">
        <div className="relative items-center justify-center w-2/3 rounded-full h-2/3 bg-zinc-900">
        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="w-full h-10 line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">

          <div className="w-10 h-10 rounded-full bg-zinc-100">

          </div>
       </div>
        </div>
        </div>

      </div>
        
      </div>
    </div>
  )
}

export default Eyes
