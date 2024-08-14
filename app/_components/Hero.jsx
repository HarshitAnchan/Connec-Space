import React from "react";
import Footer from "./Footer";
import TestimonialSlider from "./Testimonals";
import FeaturesSection from "./Feature";
import Info from "./Info";
import Info1 from "./Info1";
import Info2 from "./Info2";

function Hero() {
  return (
    <div className="relative" id="home">
      <div className="bg-gray-900 text-white">
        <section>
          <div className="mx-auto max-w-screen-2xl px-6 py-28 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
                ConnecSpace Redefining Team Collaboration.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl/relaxed">
                Unlock your team's potential with ConnecSpace. Our platform
                offers intuitive, customizable tools and seamless integration to
                enhance your workflow, enabling faster innovation and smarter
                collaboration.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-6">
                <a
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-14 py-4 text-base font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="/dashboard"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="py-12">
          <Info />
        </div>
        <div className="py-12">
          <Info1 />
        </div>
        <div className="py-12">
          <Info2 />
        </div>

        <FeaturesSection />

        <hr />
        <TestimonialSlider />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default Hero;
