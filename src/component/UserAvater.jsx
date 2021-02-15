import React from 'react'

export default function UserAvater({profile:{firstname,lastname}})
{
    
   const firstTwo=firstname.substring(0,1)+lastname.substring(0,1)


    return (
        <div>
        <p  className="rounded-full ring-white ring-4 mt-5 relative top-11 p-8 bg-purple-200 text-2xl font-semibold flex items-center justify-center">{firstTwo}</p>
        </div>
    )
}
