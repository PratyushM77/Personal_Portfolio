import React from "react";
import { motion } from "framer-motion";
function Internship() {
  return (
    <div className="flex justify-center pr-5 xl:gap-36 lg:gap-20 sm:gap-10">

    <div className=" flex flex-col justify-center px-10">
      {/* Title + Date (same row) */}
      <div className="flex justify-between items-center w-full mb-2">
        <div className="text-2xl font-semibold">
          {" "}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            Internship
          </motion.h1>
        </div>
        {/* <div className="text-lg text-gray-600">
          {" "}
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            April 2025 - June 2025
          </motion.h1>
        </div> */}
      </div>

      {/* Sub text */}
      <div className="mb-2">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          Previously worked as an Intern at <strong>Shiftwaala</strong> (Remote)
        </motion.p>
      </div>

      {/* Points */}
      <ul className="list-disc list-inside space-y-1">
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          Built and maintained backend features using Node.js and Express for
          real-world projects.
        </motion.li>

        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          Ensured API security by implementing JWT authentication, rate
          limiting, input validation.
        </motion.li>

        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          Worked with MongoDB for handling data operations like create, update,
          and aggregation queries.
        </motion.li>

        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          Collaborated with other developers in debugging, improving
          performance, and pushing clean, tested code
        </motion.li>

        {/* <li>p5</li> */}
      </ul>
    </div>
     <div className="text-lg text-gray-600">
          {" "}
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            April 2025 - June 2025
          </motion.h1>
        </div>
          </div>
  );
}

export default Internship;
