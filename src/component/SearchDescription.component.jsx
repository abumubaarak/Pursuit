import React from 'react'

export default function SearchDescription({title,description}) {
    return (
      <div>
        <h1 className="font-bold font-custom ">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    );
}
