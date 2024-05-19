"use client";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Skills() {
  return (
    <div id="skills" className=" bg-white container">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-cyan-800">
              Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <img src="/logos/html.png" alt="html" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  HTML
                </h2>
                <p className="leading-relaxed text-base">
                  HTML is the standard markup language for Web pages.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <img src="/logos/css-3.png" alt="css" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Cascading Style Sheets
                </h2>
                <p className="leading-relaxed text-base">
                  CSS is the language we use to style an HTML document.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <img src="/logos/js.png" alt="javascript" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Javascript
                </h2>
                <p className="leading-relaxed text-base">
                  Javascript is the language we use to style an HTML document.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <img src="/logos/React.png" alt="react" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  React.js
                </h2>
                <p className="leading-relaxed text-base">
                  React.js is the language we use to style an HTML document.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <img src="/logos/bootstrap.png" alt="bootstrap" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Bootstrap
                </h2>
                <p className="leading-relaxed text-base">
                  Bootstrap is the language we use to style an HTML document.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <img src="/logos/programing.png" alt="Node.js" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Node.js
                </h2>
                <p className="leading-relaxed text-base">
                  Node.js is the language used for backend development.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center m-5">
            <AwesomeButton
              size="large"
              className="item-center justify-center"
              type="primary"
              onPress={() => {
                window.location.href = "./contact";
              }}
            >
              Contact
            </AwesomeButton>
          </div>
        </div>
      </section>
    </div>
  );
}
