"use client";

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Page() {
  return (
    <main>
      <Header />
      <h1>Projects</h1>
      <div className="container justify-center items-center p-4 bg-whtie">
        <h2>News & Social Web Application</h2>
        <img
          className=" mt-4 w-1/2 shadow-lg"
          src="/image.png"
          alt="news app"
        />
        <p>
          This site a web application is CRUD appilication that gets info from
          FireStore and uses Firebase for Authentication.{" "}
        </p>
        <h3>Technologies used:</h3>
        <p>React.js, Firebase, Firestore</p>
        <h3>GitHub:</h3>
        <p>
          <a href="https://github.com/jordan2juice/info-page">
            https://github.com/jordan2juice/info-page
          </a>
        </p>
        <h3>Live Demo:</h3>
        <p>
          <a href="https://jt-news-app.netlify.app//">
            https://jt-news-app.netlify.app/
          </a>
        </p>
      </div>
      <div>
        <div className="container justify-center items-center p-4 bg-slate-200">
          <h2>Food Recipe Web Application</h2>
          <img className="mt-4 w-1/2" src="/image_2.png" alt="Food Home" />
          <img
            className="mt-4 w-1/2 shadow-lg"
            src="image_3.png"
            alt="Food Search page"
          />
          <p>
            This site web application is a food inspiraction application app. It
            uses a API to get the images and names of certaian types of food
            recipes.
          </p>
          <h3>Technologies used:</h3>
          <p>React.js, Firebase, Firestore</p>
        </div>
        <h3>GitHub:</h3>
        <p>
          <a href="https://jordan2juice.github.io/Capstone-2---Food-Recipe-Web-Application/">
            https://jordan2juice.github.io/Capstone-2---Food-Recipe-Web-Application/
          </a>
        </p>
        <h3>Live Demo:</h3>
        <p>
          <a href="https://github.com/jordan2juice/Capstone-2---Food-Recipe-Web-Application">
            https://github.com/jordan2juice/Capstone-2---Food-Recipe-Web-Application
          </a>
        </p>
      </div>

      <div className="container justify-center items-center p-4 bg-white">
        <img
          className="mt-4 w-1/2 shadow-lg"
          src="/Little Abby Flowers site.jpg"
          alt="Flowers"
        />
        <h2>Little Abby's Flowers</h2>
        <p>
          This is a website mpchup design I did for my design portfolio. The
          theme was a flower shop based on my daughters name. She is bright and
          colorfuld and I wanted to show that in my design.
        </p>
      </div>
      <div className="container justify-center items-center p-4 bg-slate-200">
        <h2>Tres Bien Coffee Shop</h2>
        <p>
          This is a website mpchup design I did for my design portfolio. The
          theme was a coffee shop. I created the home page, and moched up the
          image.
        </p>
        <img
          className="mt-4 w-1/2 shadow-lg"
          src="/Tres Bien coffee website.jpg"
          alt="Coffee shop"
        />
      </div>
      <Footer />
    </main>
  );
}
