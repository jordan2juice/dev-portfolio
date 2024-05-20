"use client";

import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Projects() {
  return (
    <div
      className="container justify-center items-center p-4 bg-slate-200"
      id="projects"
    >
      <h2>Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <Card className=" w-72 p-4 border-2 bg-white rounded-xl border-cyan-800 ">
          <Card.Body>
            <img src="/image.png" alt="Project 1" />
            <Card.Title>
              <h4>News & Social Webb App</h4>
            </Card.Title>
            <Card.Text>
              This is a web app that bring you the news and is a social
              platform.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className=" w-72 p-4 border-2 bg-white rounded-xl border-cyan-800 ">
          <Card.Body>
            <img src="/image_2.png" alt="Food Recipe app" />
            <Card.Title>
              <h4>Food Recipe app</h4>
            </Card.Title>
            <Card.Text>
              This is a web app that bring you the food recipes. It also brings
              inspiration for food recipes as well.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className=" w-72 p-4 border-2 bg-white rounded-xl border-cyan-800 ">
          <Card.Body>
            <img
              src="/Tres Bien coffee website.jpg
            "
              alt="Project 2"
            />
            <Card.Title>
              <h4>Tres Bien Coffee</h4>
            </Card.Title>
            <Card.Text>
              This is a website design moch-up that I did for a personel
              project. The theme was a coffee shop.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className=" w-72 p-4 border-2 bg-white rounded-xl border-cyan-800 ">
          <Card.Body>
            <img
              src="/Little Abby Flowers site.jpg"
              alt="Little Abby Flowers"
            />
            <Card.Title>
              <h4>Little Abby's Flowers</h4>
            </Card.Title>
            <Card.Text>
              This is a website design moch-up that I did for a personel
              project. The theme was a flower shop.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="flex justify-center items-center p-4 bg-slate-200">
        <Button
          className="text-2xl font-bold text-cyan-700 mb-2 p-4"
          href="./projects"
        >
          See More
        </Button>
      </div>
    </div>
  );
}
