import React from 'react'
import { IoNavigateOutline } from "react-icons/io5";


export default function Empty() {
    return (
        <div className="mt-24 flex justify-center flex-col items-center">
        <IoNavigateOutline className="w-16 h-16"/>
        <h1 className="pt-5 text-base font-semibold font-nuito">You have not apply for any job yet </h1>
    </div>
    )
}
