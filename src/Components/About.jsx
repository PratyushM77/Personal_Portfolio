import React from "react";
import hero from "../assets/Image1.jpg";
function About() {
  return (
    <>
      <div className=" mt-10 flex justify-around">
        <div className="flex-row max-w-4/6 pl-35 ">
          <div className="roboto-google2 pl-3  pt-8 max-w-4/6 text-4xl font-extrabold">
            Hi, I'm Pratyush 👋
          </div>
          <div className="roboto-google pl-3 pt-1  max-w-4/6 text-xl font-extrabold">
            Aspiring FullStack Developer!
          </div>
          <div className="max-w-5/6 pl-3 pt-2">
            <span>
              I’m a developer who enjoys building real, usable web applications and learning how things work behind the scenes. I’ve worked with the MERN stack and spent a lot of time creating projects that helped me understand API design, frontend–backend flow, and clean code practices. I like breaking things down, solving problems, and improving my skills one project at a time. Always exploring new tools and ideas to grow as a developer.
            </span>
          </div>
        </div>
        <div className="pr-36">
          <img
            className=" h-60 w-60  p-1 rounded-full object-cover ring-5 ring-gray-300 dark:ring-gray-300"
            src={hero}
            alt="Pratyush Mishra"
          />
        </div>
      </div>
    </>
  );
}

export default About;
