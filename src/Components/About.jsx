import React from "react";
import hero from "../assets/Image1.jpg";
import { motion } from "framer-motion";
function About() {

 
  return (
    <>
      <div className=" mt-10 flex flex-col md:flex-row justify-around gap-10 md:gap-0 ">
        <div className="flex-row max-w-4/6 pl-35 order-2 md:order-1">
          <div className="roboto-google2 pl-3  pt-8 max-w-4/6 text-4xl font-extrabold">
                <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                         Hi, I'm <span className="text-5xl bg-linear-to-r from-blue-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">Pratyush</span> 👋

            </motion.div>
          </div>
          <div className="roboto-google pl-3 pt-1  max-w-4/6 text-xl font-extrabold">
               <motion.h1
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
            Aspiring FullStack Developer!
           </motion.h1> 
          </div>
          <div className="max-w-5/6 pl-3 pt-2">
            <span>
                              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                I’m a developer who enjoys building real, usable web applications
              and learning how things work behind the scenes. I’ve worked with
              the MERN stack and spent a lot of time creating projects that
              helped me understand API design, frontend–backend flow, and clean
              code practices. I like breaking things down, solving problems, and
              improving my skills one project at a time. Always exploring new
              tools and ideas to grow as a developer.
              </motion.p>
             
            </span>
          </div>
        </div>
        <motion.div initial={{ opacity: 0.2, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }} className=" pr-46  shrink-0 order-1 md:justify-center md:order-2">
          <img
            className="shrink-0 transition hover:-translate-y-1 delay-300 hover:scale-110 duration-500 hover:ring-gray-400 hover:ring-2 h-60 w-60  p-1 rounded-full object-cover ring-5 ring-gray-300 dark:ring-gray-300"
            src={hero}
            alt="Pratyush Mishra"
          />
        </motion.div>
      </div>
    </>
  );
}

export default About;
