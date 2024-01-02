
// import React, { useState } from 'react'
// import { findPrime } from '../utils/helper';

// const Demo = () => {
//     const[text,setText]=useState()
//     console.log("render");
//     //heavy operation

//     const prime=findPrime(text)

//   return (
//     <div className='m-4 p-2 w-96 border border-black'>
//         <div>
//         <input
//         className='border border-black w-72 px-2'
//         onChange={(e)=>setText(e.target.value)}
//         type="number"
//         value={text}/>
//         </div>
        
//         <div>
//            <h1>nth prime:{prime}</h1>
//         </div>
//         </div>
//   )
//   }
// export default Demo;




// import React, { useState } from 'react'
// import { findPrime } from '../utils/helper';

// const Demo = () => {
//     const[text,setText]=useState(0);
//     const [isDarkTheme,setIsDarkTheme]=useState(false);
   
//     console.log("render");
//     //heavy operation
//     const prime=()=>{
//       console.log("Calculated Prime Number of",text)
//         return findPrime(text);
//       };

//   return (
//     <div className={
//       "m-4 p-2 w-96 border border-black" +
//     (isDarkTheme && "bg-pink-900 text-white")
//   }
    
//     >
    
//     <div>
//       <button
//       className='bg-green-200 m-5 p-5'
//       onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
//     </div>
        
//       <div>
//         <input
//         className='border border-black w-72 px-2'
//         type='number'
//         onChange={(e)=>setText(e.target.value)}
       
//         value={text}/>
//         </div>
        
//         <div>
//            <h1 className='mt-4 font-bold text-xl'>nth prime:{prime()}</h1>
//         </div>
//         </div>
//   );
//   };
// export default Demo;




//using useMemo
import React, { useState,useMemo } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {
    const[text,setText]=useState(0);
    const [isDarkTheme,setIsDarkTheme]=useState(false);
   
    console.log("render");
    //heavy operation
    const prime=useMemo(() => findPrime(text), [text])
      
  return (
    <div className={
      "m-4 p-2 w-96 border border-black" +
    (isDarkTheme && "bg-pink-900 text-white")
  }
    
    >
    
    <div>
      <button
      className='bg-green-200 m-5 p-5'
      onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
    </div>
        
      <div>
        <input
        className='border border-black w-72 px-2'
        type='number'
        onChange={(e)=>setText(e.target.value)}
       
        value={text}/>
        </div>
        
        <div>
           <h1 className='mt-4 font-bold text-xl'>nth prime:{prime}</h1>
        </div>
        </div>
  );
  };
export default Demo;




