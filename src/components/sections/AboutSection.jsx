import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className=" py-12 bg-black">
                <h1 className="lg:text-5xl text-3xl text-center font-bold gradient-text py-5">
                    About me
                </h1>
                <div className="text-white flex flex-col lg:flex-row items-center justify-center gap-10 p-5 mt-18">

                    <article className="max-w-2xl text-center lg:text-left">
                        <p>
                            I am a dedicated Frontend Developer specializing in creating responsive, high-performance,
                            and visually engaging web interfaces. With a strong foundation in HTML, CSS, JavaScript,
                            and modern UI frameworks, I transform designs into functional, interactive experiences.
                            I focus on clean code, accessibility, and performance optimization to deliver seamless
                            user experiences across all screen sizes.
                        </p>
                    </article>

                    <div className="w-75 h-75">
                        {/* <img src="/asset/profile_photo.jpg" alt="profile"
                            className="rounded-full w-full h-full object-cover"> */}
                    </div>

                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 mt-18">
                    <div
                        className="text-white border-2 border-gray-800 hover:border-blue-900 p-7 rounded-3xl hover:-translate-y-4 transition-transform duration-1000">
                        <div
                            className="h-12 w-12 flex gradient-bg p-2 rounded-xl hover:rotate-360 transition-transform duration-500">
                            {/* <img src="/asset/code.svg" alt="code" className="invert"> */}
                        </div>
                        <h1 className="my-3 font-bold text-xl">Clean Code</h1>
                        <p className="text-gray-400">Writing maintainable and scalable code with best practices</p>
                    </div>
                    <div
                        className="text-white border-2 border-gray-800 hover:border-blue-900 p-7 rounded-3xl hover:-translate-y-4 transition-transform duration-1000">
                        <div
                            className="h-12 w-12 flex gradient-bg p-2 rounded-xl hover:rotate-360 transition-transform duration-500">
                            {/* <img src="/asset/design.svg" alt="desigh" className="invert"> */}
                        </div>
                        <h1 className="my-3 font-bold text-xl">Modern Design</h1>
                        <p className="text-gray-400">Creating beautiful interfaces with attention to detail</p>
                    </div>
                    <div
                        className="text-white border-2 border-gray-800 hover:border-blue-900 p-7 rounded-3xl hover:-translate-y-4 transition-transform duration-1000">
                        <div
                            className="h-12 w-12 flex gradient-bg p-2 rounded-xl hover:rotate-360 transition-transform duration-500">
                            {/* <img src="/asset/bold.svg" alt="bold" className="invert"> */}
                        </div>
                        <h1 className="my-3 font-bold text-xl">Fast Performance</h1>
                        <p className="text-gray-400">Optimizing for speed and user experience</p>
                    </div>
                </div>
            </section>
  )
}
