import React from "react";

function Info() {
  return (
    <div>
      <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="relative z-10 gap-5 items-center lg:flex">
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl text-white font-semibold md:text-4xl">
              Unlock the power of shared thinking with{" "}
              <span className="text-indigo-600">Gemini in ConnecSpace</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3">
              Gemini in ConnecSpace helps you cocreate, stay up to date, and
              pick up where others left off.
            </p>
          </div>
          <div className="flex-1 mt-5 mx-auto sm:w-10/12 lg:mt-0 lg:w-9/12">
            <img
              src="/gemini.gif"
              alt="Gemini in ConnecSpace"
              className="w-full rounded-lg transition-transform transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
