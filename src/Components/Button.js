import React from "react";

export default function Button(props){
    
    return(
       
            <button onClick={props.click} className={props.className}>{props.rating}</button>
       
    )
}