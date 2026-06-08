import Link from 'next/link'
import React from 'react'

export default function ContactCard({url, title, name, icon: Icon}) {
    return (
        <Link href={url} target="_blank"  className="flex items-center gap-3 mt-8 p-3 rounded-xl border border-transparent hover:border-blue-800 hover:translate-x-2 transition-all duration-500 cursor-pointer">
            <div className="w-12 h-12 gradient-bg flex items-center justify-center rounded-xl">
               <Icon/>
            </div>
            <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="text-gray-400">{name}</p>
            </div>
        </Link>
    )
}
