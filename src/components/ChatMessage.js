import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2 '>
        <img 
            className="h-8 "
            alt="user"
            src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"/>
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage