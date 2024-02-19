

import React from 'react'

const Heading = () => {
  return (
    <div  className="overflow-hidden bg-zinc-900">
      <h1 className="w-full h-screen headings"> WE CREATE WHAT ,THAT'S OUR FUTURE</h1>
      <h3 className="headings1"> For The <span className="myspan1">Developement  With Time </span> We cares  with more functionality than others</h3>


      <div className="flex items-center justify-start gap-3 mt-5 all"> 
      
      <button className=" all1  p-3 font-mono font-semibold  uppercase border border-blue-900 -py-[-5vh] px-8 text-1xl rounded-xl bg-[#1F1F1F] text-white"> Get Started </button>
      <button className=" all2  p-3 font-mono font-semibold  uppercase  border border-blue-900 -py-[-5vh] px-9 text-1xl rounded-xl bg-[#1F1F1F] text-white"> Learn Ochi</button>
    
      </div>

      
      <div className="flex items-center justify-between gap-10 mt-[8vh] all"> 

      <div className="w-[25vw] h-[40vh]  newdiv">

        <h2 className="inside"> Route Handling</h2>
        <p className="inside1"> 
         Make your React component async and await your data. Next.js supports both server and client data fetching.</p>
      </div>
      <div className="w-[25vw] h-[50vh]  newdiv1 "></div>
      
      
     
      </div>

      <div > 
      
      <button  className="first">
        Learn More 
      </button>
      
      </div>


    </div>
  )
}

export default Heading
