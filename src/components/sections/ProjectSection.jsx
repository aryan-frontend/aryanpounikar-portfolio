import React from 'react'
import Image from "next/image";
import { projects } from '@/data/projectsdata';

export default function ProjectSection() {
    return (
        <section id='project' className="py-12 px-5 lg:px-10 bg-black">
            <h1 className="lg:text-5xl text-3xl text-center font-bold gradient-text py-5">
                Projects
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 text-white mt-18">
                {
                    projects.map((item, idx) => (
                        <div
                            className="border-2 border-gray-800 hover:border-blue-900  rounded-3xl overflow-hidden hover:-translate-y-4 transition-transform duration-1000" key={idx}>
                            <Image src={item.img} alt={item.title} />
                            <div className="p-4">
                                <h3 className="text-2xl font-bold">To Do List</h3>
                                <p className="text-gray-400 my-3 text-justify ">
                                    {item.disc}
                                </p>
                                <a href={item.liveLink} target="_blank"
                                    className="border-2 border-blue-900 px-3 py-1 rounded-xl m-1">Live Demo</a>

                                <a href={item.repoLink} target="_blank"
                                    className="border-2 border-blue-900 px-3 py-1 rounded-xl m-1">Code</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
