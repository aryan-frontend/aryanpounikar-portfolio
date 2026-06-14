import React from 'react'
import Image from "next/image";
import profilePhoto from "../../assets/images/profile_photo.jpg"
import { about } from '@/data/aboutdata';

export default function AboutSection() {
    return (
        <section id='about' className=" py-12 px-5 lg:px-10 bg-black">
            <h1 className="lg:text-5xl text-3xl text-center font-bold gradient-text ">
                About me
            </h1>
            <div className="text-white flex flex-col lg:flex-row items-center justify-center gap-10 py-5 mt-18">

                <article className="max-w-4xl text-center lg:text-left">
                    <p>
                        Frontend Developer skilled in HTML, CSS, JavaScript, Tailwind CSS, React.js, and Next.js, with experience building responsive, user-friendly, and modern web applications. Passionate about creating clean UI designs, writing maintainable code, and optimizing web performance. Familiar with Git and GitHub for version control and collaborative development. Continuously learning new technologies and best practices to build scalable and impactful digital experiences.

                    </p>
                </article>

                <Image src={profilePhoto} alt='profilePhoto' className="w-75 h-75 rounded-full" />
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 mt-18">
                {
                    about.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                className="text-white border-2 border-gray-800 hover:border-blue-900 p-7 rounded-3xl hover:-translate-y-4 transition-transform duration-1000" key={idx}>
                                <div
                                    className="h-12 w-12 flex items-center justify-center gradient-bg p-2 rounded-xl hover:rotate-360 transition-transform duration-500">
                                    <Icon className='text-2xl' />
                                </div>
                                <h1 className="my-3 font-bold text-xl">{item.title}</h1>
                                <p className="text-gray-400">{item.disc}</p>
                            </div>
                        )

                    })}
            </div>
        </section>
    )
}
