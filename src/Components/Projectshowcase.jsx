import React from "react";
import Yoga from "../assets/Yoga_Path.png";
import Chat from "../assets/Chat_App.png";
import Calc from "../assets/Emi_Calc.png";
import News from "../assets/News_App.png";
function Projectshowcase() {
  return (
    <>
      <div className="pl-46 pb-4">
        <h2 className="text-3xl  text-gray-800 lg:text-2xl font-semibold  ">
          Featured Projects
        </h2>
      </div>
      <div className="flex justify-start lg:pl-46 pt-4">
        <div className="grid grid-cols-2 gap-10">
          <div className="max-w-sm bg-white border border-gray-200  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a>
              <img className="rounded-t-lg" src={Yoga} alt="" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Yoga Path App
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Created Yoga Path app where users can explore yoga poses, create
                their own sessions, save them as drafts, publish them whenever
                they want, and even view sessions created by others.
              </p>
              <a
                href="https://yoga-frontend-wdvb.onrender.com/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Live Demo ↗️
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a >
              <img className="rounded-t-lg" src={Chat} alt="" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Chat app
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A Chat Application where users can chat with one another after login/Registration in real time.
                Used <strong>Socket Io</strong> to transfer messages in real time.
              </p>
              <a
                
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Live Demo ↗️
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a >
              <img className="rounded-t-lg" src={Calc} alt="" />
            </a>
            <div className="p-5">
              <a >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Live Demo ↗️
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a >
              <img className="rounded-t-lg" src={News} alt="" />
            </a>
            <div className="p-5">
              <a >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Live Demo ↗️
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projectshowcase;
