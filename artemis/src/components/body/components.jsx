import React from 'react';

export function GreenCard({ text  , fontSize = 12}){
    return (
        <span className="px-2 text-center" style={{ fontSize : fontSize , borderRadius : 50 , color:'white' , backgroundColor : '#17ba83' , paddingTop : -8}}>
            {text}
        </span>
    )
}
