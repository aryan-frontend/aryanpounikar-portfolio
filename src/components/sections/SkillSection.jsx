import React from 'react'
import Skill from '../ui/Skill'

export default function SkillSection() {
    return (
        <section className='w-full py-13 px-10 bg-black'>
            <h1
                className="lg:text-5xl text-3xl text-center font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Skills & Experties
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 mt-18">
                <div
                    className="text-white border-2 border-gray-800 hover:border-blue-900 p-5 rounded-3xl hover:-translate-y-3 transition-transform duration-1000">
                    <h2
                        className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-2xl font-bold mb-5">
                        Frontend</h2>
                    <Skill name="HTML" percent={95} />
                    <Skill name="Tailwind CSS" percent={80} />
                    <Skill name="JavaScript" percent={75} />
                    <Skill name="ReactJs" percent={85} />
                    <Skill name="Next.js" percent={85} />

                </div>
                <div
                    className="text-white border-2 border-gray-800 hover:border-blue-900 p-5 rounded-3xl hover:-translate-y-3 transition-transform duration-1000">
                    <h2
                        className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-2xl font-bold mb-5">
                        Tools & Others</h2>

                    <Skill name="Git & GitHub" percent={85} />
                    <Skill name="Figma" percent={85} />
                    <Skill name="ChatGpt" percent={85} />
                    <Skill name="Codex" percent={80}/>
                </div>

                <div
                    className="text-white border-2 border-gray-800 hover:border-blue-900 p-5 rounded-3xl hover:-translate-y-3 transition-transform duration-1000">
                    <h2
                        className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-2xl font-bold mb-5">
                        Backend</h2>

                    <Skill name="NodeJs" percent={50} />
                    
                </div>
            </div>
        </section>
    )
}
