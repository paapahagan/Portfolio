import React from "react";

function Contact() {
  return (
    <div className=" bg-slate-600 min-h-screen flex flex-col grid content-center">
      <div className="flex justify-center">
        <h1 className="text-6xl font-extrabold mb-2 text-gray-200">
          Get in Touch
        </h1>
      </div>
      <div className="flex justify-center text-gray-300 mt-5">
        <p>
          I'm currently looking for any new opportunities, my inbox is always{" "}
          open. Whether
          <br /> you have a question or just want to say hi, I'll try my best to
          get back to you!
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <button className="border text-gray-300 p-3 rounded">Say Hello</button>
      </div>
    </div>
  );
}

export default Contact;
