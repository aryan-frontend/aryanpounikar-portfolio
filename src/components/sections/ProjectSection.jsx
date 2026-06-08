import React from 'react'
import Image from "next/image";
import todoList from "../../assets/images/todo_list.png"

export default function ProjectSection() {
  return (
   <section id='project' className="py-12 px-5 lg:px-10 bg-black">
                <h1 className="lg:text-5xl text-3xl text-center font-bold gradient-text py-5">
                    Projects
                </h1>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10 text-white mt-18">
                    <div
                        className="border-2 border-gray-800 hover:border-blue-900  rounded-3xl overflow-hidden hover:-translate-y-4 transition-transform duration-1000">
                            <Image src={todoList} alt='todolistimg'/>
                        <div className="p-4">
                            <h3 className="text-2xl font-bold">To Do List</h3>
                            <p className="text-gray-400 my-3 text-justify ">
                                A simple yet powerful task management application that helps users organize daily
                                activities efficiently. Built with a focus on usability, performance, and persistent
                                data storage.
                            </p>
                            <a href="https://todo-list-woad-tau.vercel.app/" target="_blank"
                                className="border-2 border-blue-900 px-3 py-1 rounded-xl m-1">Live Demo</a>

                            <a href="https://github.com/aryan-frontend/todo-list" target="_blank"
                                className="border-2 border-blue-900 px-3 py-1 rounded-xl m-1">Code</a>
                        </div>
                    </div>
                </div>
            </section>
  )
}
