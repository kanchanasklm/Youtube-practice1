
// import React from 'react'
// import ChatMessage from './ChatMessage'

// const LiveChat = () => {
//   return (
//     <div className=' w-full h-[500px] ml-2 p-2 m-2 border  border-black bg-slate-100 rounded-lg'>
//         <ChatMessage 
//         name="KANCHANA PALAVAALSA" 
//         message="This is namste react live " />

// <ChatMessage 
//         name="KANCHANA PALAVAALSA" 
//         message="This is namste react live " />

// <ChatMessage 
//         name="KANCHANA PALAVAALSA" 
//         message="This is namste react live " />

// <ChatMessage 
//         name="KANCHANA PALAVAALSA" 
//         message="This is namste react live " />
//          <ChatMessage 
//         name="KANCHANA PALAVAALSA" 
//         message="This is namste react live " />
//     </div>
//   )
// }

// export default LiveChat



import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import { generateRandomMessage, generateRandomName } from '../utils/helper';
const LiveChat = () => {
    const dispatch=useDispatch();
    const ChatMessages=useSelector((store)=>store.chat.messages);
    console.log(ChatMessages)
    const[liveMessage,setLiveMessage]=useState( )
    useEffect(()=>{
        const i=setInterval(()=>{
            console.log("API POLLING");
        
            // dispatch(addMessage({
            //     name:"kanchana",
            //     message:"lorem ipsum dolor site amet",
            // })
            // );

            dispatch(addMessage({
                name:generateRandomName(),
                message:generateRandomMessage(28)
            })
            );
        },2000);

        return()=>clearInterval(i);

    },[])
  return (
    <>
    <div className=' w-full h-[500px] ml-2 p-2 m-2 border  border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
        {ChatMessages.map((c,  index)=>(
            <ChatMessage key={index} name={c.name} message={c.message} />

        ))}
     </div>
     </div>

     <form onSubmit={(e)=>{
        e.preventDefault();
        // console.log("on form submit",liveMessage);
        dispatch(addMessage({
            name:"kanchana",
            message:liveMessage
        }));
        setLiveMessage("");
     }}>
     <div className='w-full p-2 ml-2 border border-black'>
        <input 
        className="w-[490px]" 
        type='text'
        value={liveMessage}
        onChange={(e)=>{
            setLiveMessage(e.target.value)
        }}/>
        <button className='px-2 mx-2 bg-green-100'>Send</button>
     </div>
     </form>
     </>
  )
}

export default LiveChat