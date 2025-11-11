import React from "react";

function Internship() {
  return (
    <div className="max-w-5xl ml-35 flex flex-col px-10">
      {/* Title + Date (same row) */}
      <div className="flex justify-between items-center w-full mb-2">
        <div className="text-2xl font-semibold">Internship</div>
        <div className="text-lg text-gray-600">April 2025 - June 2025</div>
      </div>

      {/* Sub text */}
      <div className="mb-2">
        Previously worked as an Intern at <strong>Shiftwaala</strong> (Remote)
      </div>

      {/* Points */}
      <ul className="list-disc list-inside space-y-1">
        <li>
          Built and maintained backend features using Node.js and Express for
          real-world projects
        </li>
        <li>
          Ensured API security by implementing JWT authentication, rate
          limiting, input validation.
        </li>
        <li>
          Worked with MongoDB for handling data operations like create, update,
          and aggregation queries
        </li>
        <li>
          Collaborated with other developers in debugging, improving
          performance, and pushing clean, tested code
        </li>
        {/* <li>p5</li> */}
      </ul>
    </div>
  );
}

export default Internship;
