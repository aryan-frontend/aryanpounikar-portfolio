import React from 'react'

export default function Skill({name, percent}) {
    return (
        <div className='mb-6'>
            <div className='flex justify-between mb-2'>
                <span className="text-gray-300 font-medium">{name}</span>
                <span className="text-gray-400">{percent}%</span>
            </div>
            <div className='w-full h-2 bg-gray-700 rounded-full overflow-hidden'>
                <div className="h-full bg-linear-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-700"
                    style={{ width: `${percent}%` }}>

                </div>
            </div>

        </div>
    )
}
