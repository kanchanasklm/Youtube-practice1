
import React from 'react'


const commentsData=[
    {
        name:"Kanchana",
        text:"Lorem ipsum dolor sit amet,constructor adip",
        replies:[],
     },
     {
        name:"Kanchana",
        text:"Lorem ipsum dolor sit amet,constructor adip",
        replies:[
            {
                name:"Kanchana",
                text:"Lorem ipsum dolor sit amet,constructor adip",
                replies:[],
             },
        ],
     },
     {
        name:"Kanchana",
        text:"Lorem ipsum dolor sit amet,constructor adip",
        replies:[
            {
                name:"Kanchana",
                text:"Lorem ipsum dolor sit amet,constructor adip",
                replies:[
                    {
                        name:"Kanchana",
                        text:"Lorem ipsum dolor sit amet,constructor adip",
                        replies:[],
                     },
                ],
             },
        ],
     },
     {
        name:"Kanchana",
        text:"Lorem ipsum dolor sit amet,constructor adip",
        replies:[{
            name:"Kanchana",
            text:"Lorem ipsum dolor sit amet,constructor adip",
            replies:[],
         },
         {
            name:"Kanchana",
            text:"Lorem ipsum dolor sit amet,constructor adip",
            replies:[],
         },],
     },
     {
        name:"Kanchana",
        text:"Lorem ipsum dolor sit amet,constructor adip",
        replies:[],
     },
     {
        name:"Kanchana",
        text:"Lorem ipsum dolor sit amet,constructor adip",
        replies:[
            {
                name:"Kanchana",
                text:"Lorem ipsum dolor sit amet,constructor adip",
                replies:[
                    {
                        name:"Kanchana",
                        text:"Lorem ipsum dolor sit amet,constructor adip",
                        replies:[],
                     },
                ],
             },
        ],
     },


]


const Comment=({data})=>{
    const {name,text,replies}=data;

    return(

    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
       <img 
       className="w-8 h-8"
       alt="user" 
       src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"/>
       
       <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>

       </div>
        </div>
    );

};


const CommnetsList=({comments})=>{
    return comments.map((comment,index) => (
        <div key={index}>
             <Comment key={index} data={comment}/>
         <div className='pl-5 ml-5 border border-l-black'>
         {/* <Comment key={index} data={comment}/>
         <Comment key={index} data={comment}/>
         <Comment key={index} data={comment}/> */}
{/* // use recursion bcz  replies also array of objects. */}

         <CommnetsList  comments={comment.replies}/> 
         </div>
        </div>
    ))
    };


const CommentsContainer = () => {
  return (

    <div className='m-5 p-2'>
        <h1 className='font-bold text-2xl'>Comments</h1>
        {/* {/* <Comment data={commentsData[0]} /> */}
        <CommnetsList comments={commentsData}/>
        </div>
  )
}

export default CommentsContainer