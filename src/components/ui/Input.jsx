import React from 'react'

export default function Input({labelName , type, name, id , className}) {
    return (
        <div className="flex flex-col gap-1 my-6">
            <label htmlFor={id}>{labelName}</label>
            <input type={type} name={name} id={id}
                className={`bg-[#213448] p-2 border border-gray-800 rounded-xl ${className}` }/>
        </div>
    )
}
