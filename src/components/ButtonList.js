
import React from "react";
import Button from "./Button";

const Buttons=["All","Live","Gaming","Songs","Music","Socor","Cricket","Cooking",]
const ButtonList=()=>{
    return(
        <div className="flex m-5">
            {Buttons.map((name)=>(
         <Button name={name}/>
            ))}
            
            

        </div>
    )
};

export default ButtonList;
