import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import Input from '../ui/Input'
import ContactCard from '../ui/ContactCard'

export default function ContactSection() {
  return (
    <section id='contact' className="py-12 px-5 lg:px-10 bg-black">
      <h1 className="lg:text-5xl text-3xl text-center font-bold gradient-text py-5">
        Get In Touch
      </h1>
      <p className="text-gray-400 text-center mb-10">Have a project in mind or want to collaborate? Feel free to reach out!</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-18 items-center">
        <div className="text-white">
          <h1 className="font-bold text-xl mb-5">
            Let's create something amazing together
          </h1>
          <p className="text-gray-400">
            I'm always excited to work on new projects and collaborate with creative people.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <ContactCard url={"mailto:pounikararyan@gmail.com"} title={"Email"} name={"pounikararyan@gmail.com"} icon={FaEnvelope}/>
          <ContactCard url={"https://linkedin.com/in/aryan-pounikar-40a617315"} title={"LinkdIn"} name={"Aryan Pounikar"} icon={FaLinkedin}/>
          <ContactCard url={"https://github.com/aryan-frontend"} title={"Github"} name={"aryan-frontend"} icon={FaGithub}/>
          
        </div>
        <form className="bg-[001F3D] p-5  text-white border border-gray-800 rounded-xl">
          <Input labelName={"Name"} type={"text"} name={"name"} id={"name"} />
          <Input labelName={"Email"} type={"email"} name={"email"} id={"email"} />
          <Input labelName={"Message"} type={"textarea"} name={"message"} id={"message"} className={"pt-1 pb-15"} />
          <button type="submit" className="gradient-bg w-full mt-15 rounded-xl py-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-transform duration-300 hover:scale-102 ">Send Message</button>
        </form>
      </div>
    </section>
  )
}
