import React from 'react'
import TimeAgo from 'react-timeago';


export default function Time({date}) {
    return (
        <div>
              <p className="text-gray-500 font-custom text-sm"><TimeAgo date={date}/></p>
        </div>
    )
}
