"use client";

import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Page() {
  const form = useRef();

  const [send, setSend] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_eslp1ne", "template_umaza2c", form.current, {
        publicKey: "qU4ElkBCmDIxGJpt6",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  if (send) {
    return (
      <main>
        <div>
          <h1>Thank you for your message!</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Header />
      <div className="container justify-center items-center p-4 bg-slate-200">
        <h1>Contact</h1>
        <p>Send me an email!</p>
        <div className="flex flex-wrap justify-center items-center">
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg p-4">
            <label htmlFor="user_name">
              Name
              <input
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="user_name"
                type="text"
                name="user_name"
              />
            </label>
            <label htmlFor="user_email">
              Email
              <input
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="user_email"
                type="email"
                name="user_email"
              />
            </label>
            <label htmlFor="user_phone">
              Phone Number
              <input
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="user_phone"
                type="tel"
                name="user_phone"
              />
            </label>
            <label htmlFor="message">
              Message
              <textarea
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
              />
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={() => setSend(true)}
            >
              Submit
            </button>
          </form>
          <div className="w-full max-w-lg p-4">
            <p>For more information, please contact me at:jtoujo1@gmail.com</p>
            <p>Or, you can call me at: 123-456-7890 (504) 495-2295</p>
            <p>Or, you can visit my GitHub and LinkedIn profiles:</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/JordanToujouse">
                <img
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Github"
                />
              </a>
              <a href="https://www.linkedin.com/in/jordan-toujouse-8b5b11233/">
                <img
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
