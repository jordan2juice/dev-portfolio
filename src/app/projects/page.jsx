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
            src="FoodRecipe.png"
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
          <a href="https://github.com/jordan2juice/Capstone-2---Food-Recipe-Web-Application">
            https://github.com/jordan2juice/Capstone-2---Food-Recipe-Web-Application
          </a>
        </p>
        <h3>Live Demo:</h3>
        <p>
          <a href="https://jordan2juice.github.io/Capstone-2---Food-Recipe-Web-Application/">
            https://jordan2juice.github.io/Capstone-2---Food-Recipe-Web-Application/
          </a>
        </p>
      </div>
      <div className="container justify-center items-center p-4 bg-slate-200">
        <h2>The Daily Grind</h2>
        <img
          className="mt-4 w-1/2 shadow-lg"
          src="/TheDailyGrind.png"
          alt="Coffee shop"
        />
        <p>
          This is a coffee shop web application that I built. I used React.js to
          design my front-end and Express.js for my back-end. This is full-stack
          application that was built for a coffee shop.
        </p>
        <h3>Technologies used:</h3>
        <p>React.js, Express.js</p>
        <h3>GitHub:</h3>
        <p>
          <a href="https://github.com/jordan2juice/coffee-shop-website">
            https://github.com/jordan2juice/coffee-shop-website
          </a>
        </p>
        <h3>Live Demo:</h3>
        <p>
          <a href="https://thedailygrind504.netlify.app/">
            https://thedailygrind504.netlify.app/
          </a>
        </p>
      </div>

      <div className="container justify-center items-center p-4 bg-white">
        <img
          className="mt-4 w-1/2 shadow-lg"
          src="/Little Abby Flowers site.jpg"
          alt="Flowers"
        />
        <h2>Little Abby Flowers</h2>
        <p>
          This is a website mpchup design I did for my design portfolio. The
          theme was a flower shop based on my daughters name. She is bright and
          colorfuld and I wanted to show that in my design.
        </p>
      </div>
      <Footer />
    </main>
  );
}
