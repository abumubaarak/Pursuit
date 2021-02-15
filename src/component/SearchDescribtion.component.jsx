import React from 'react'

export default function SearchDescribtion({title,describtion}) {
    return (
        <div>
            <h1 className="font-bold font-custom ">{title}</h1>
              <p className="text-gray-500">{describtion}</p>
        
        </div>
    )
}
