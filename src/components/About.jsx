import React from "react";

function About() {
  return (
    <div className="flex justify-center max-h-96	 bg-slate-600 p-1">
      <div className="flex">
        <img className="pr-5" src="./images/p.jpeg" />
        <p className="text-justify grid content-center text-gray-300">
          I do Front-End development, i've built a couple a of websites using{" "}
          <br />
          React and tailwind. I enjoy creating websites and building upon past
          <br />
          developments. There are new things springing up everyday and the
          <br />
          learning never stops.
        </p>
      </div>
    </div>
  );
}

export default About;
