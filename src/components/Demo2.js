
//let
// import { useState } from "react";

// import React from 'react'

// const Demo2 = () => {
//     let x=10;
//   return (
//     <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
//         <button 
//         className="bg-green-100 p-2 m-4"
//         onClick={()=>{
//             x=x+1;
//             console.log(x);
//         }}
//         >Increase x</button>
//        <span className="font-bold text-xl">Let={x}</span>
//     </div>
//   )
// }

// export default Demo2


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//const
// import { useState } from "react";

// import React from 'react'

// const Demo2 = () => {
//     const x=10;
//   return (
//     <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
//         <button 
//         className="bg-green-100 p-2 m-4"
//         onClick={()=>{
//             x=x+1;
//             console.log(x);
//         }}
//         >Increase x</button>
//        <span className="font-bold text-xl">Let={x}</span>
//     </div>
//   )
// }

// export default Demo2

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// let and state useRef

// import { useRef, useState } from "react";

// import React from 'react'

// const Demo2 = () => {
//     const[y,setY]=useState(0);
//     let x=0;
//     const ref=useRef(0)
//     //not like=>ref=0
//     // ref={current:0}
//     console.log(ref)

//   return (
//     <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
//         <div>
//         <button 
//         className="bg-green-100 p-2 m-4"
//         onClick={()=>{
//             x=x+1;
//             console.log("x=",x);
//         }}
//         >Increase x</button>
        
//        <span className="font-bold text-xl">X={x}</span>
//        </div>
//        <div>
//         <button 
//         className="bg-green-100 p-2 m-4"
//         onClick={()=>{
//             setY(y+1)
            
//         }}
//         >Increase y</button>
        
//        <span className="font-bold text-xl">state={y}</span>
//        </div>
//        <div>
//         <button 
//         className="bg-green-100 p-2 m-4"
//         onClick={()=>{
//             ref.current=ref.current+1;
//             console.log("ref=",ref.current)
            
//         }}
//         >Increase Ref</button>
        
//        <span className="font-bold text-xl">Ref={ref.current}</span>
//        </div>
//     </div>
//   )
// }

// export default Demo2



// import { useEffect, useRef, useState } from "react";

// import React from 'react'

// const Demo2 = () => {
//     const[y,setY]=useState(0);
//     let x=0;
//     const ref=useRef(0)
//     let i;
//    useEffect(()=>{
//       i=setInterval(()=>{
//         console.log("Nmaste React",Math.random())

//       },1000)

//       return ()=>clearInterval(i)
//     },[]);



//   return (
//     <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
//         <div>
//         <button 
//         className="bg-green-100 p-2 m-4"
//         onClick={()=>{
//             x=x+1;
//             console.log("x=",x);
//         }}
//         >Increase x</button>
        
//        <span className="font-bold text-xl">X={x}</span>
//        </div>
//        <div>
//         <button 
//         className="bg-green-100 p-2 m-4"
//         onClick={()=>{
//             setY(y+1)
            
//         }}
//         >Increase y</button>
        
//        <span className="font-bold text-xl">state={y}</span>
//        </div>
//        <div>
//         <button 
//         className="bg-green-100 p-2 m-4"
//         onClick={()=>{
//             ref.current=ref.current+1;
//             console.log("ref=",ref.current)
            
//         }}
//         >Increase Ref</button>
        
//        <span className="font-bold text-xl">Ref={ref.current}</span>
//        </div>

//        <button onClick={()=>{
//         clearInterval(i)
//        }}>Stop printing</button>
//     </div>
//   )
// }

// export default Demo2


import { useEffect, useRef, useState } from "react";

import React from 'react'

const Demo2 = () => {
    const[y,setY]=useState(0);
    let x=0;
    // const i=useRef(0)
    let i={
      current:0
    }
   
   useEffect(()=>{
      i.current=setInterval(()=>{
        console.log("Nmaste React",Math.random())

      },1000)

      return ()=>clearInterval(i.current)
    },[]);



  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
        <div>
        <button 
        className="bg-green-100 p-2 m-4"
        onClick={()=>{
            x=x+1;
            console.log("x=",x);
        }}
        >Increase x</button>
        
       <span className="font-bold text-xl">X={x}</span>
       </div>
       <div>
        <button 
        className="bg-green-100 p-2 m-4"
        onClick={()=>{
            setY(y+1)
            
        }}
        >Increase y</button>
        
       <span className="font-bold text-xl">state={y}</span>
       </div>
       <div>
        <button 
        className="bg-green-100 p-2 m-4"
        onClick={()=>{
            ref.current=ref.current+1;
            console.log("ref=",ref.current)
            
        }}
        >Increase Ref</button>
        
       <span className="font-bold text-xl">Ref={ref.current}</span>
       </div>

       <button onClick={()=>{
        clearInterval(i.current)
       }}>Stop printing</button>
    </div>
  )
}

export default Demo2