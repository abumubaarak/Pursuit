import React from 'react'
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function Back() {
    return (
        <p className=" font-normal text-left flex items-center text-lg cursor-pointer" ><BsChevronLeft/><Link to="/"> <span className="pl-5">Back</span></Link> </p>

    )
}
