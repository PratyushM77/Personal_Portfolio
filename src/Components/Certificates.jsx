import React from "react";
import ucert from "../assets/Udemy_cert.jpg"
import icert from "../assets/Internship_cert.jpg"
import { motion } from "framer-motion";
function Certificates() {
  return (
    <>
    <motion.div initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }} className="pl-46 pb-4"><h2 className="text-3xl text-gray-800 lg:text-2xl font-semibold  ">
          Certificates & badges
        </h2></motion.div>
    <div className="flex  mt-2 justify-start gap-28 pl-50">
      <motion.div initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }} className="h-100 w-100 ">
        <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-34b803cf-bf78-4774-a25f-72e881d9f87f.jpg?v=1747757873000">
          <img className=" rounded-4xl transition hover:-translate-y-1 delay-300 hover:scale-110 duration-500 ring ring-gray-500" src={ucert} alt="Udemy-Cert" />
        </a>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }} className="h-100 w-100 cursor-pointer">
        <a>
          <img className="transition hover:-translate-y-1 delay-300 hover:scale-110 duration-500 object-cover p-1 rounded-4xl ring ring-gray-500" src={icert} alt="Intership_cert" />
        </a>
      </motion.div>
    </div>
    </>
  );
}

export default Certificates;
