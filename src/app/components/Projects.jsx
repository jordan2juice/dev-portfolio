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
        <Card className=" w-72">
          <Card.Body>
            <img src="https://via.placeholder.com/300x200" alt="Project 1" />
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button href="#">Project 1</Button>
          </Card.Body>
        </Card>
        <Card className=" w-72">
          <Card.Body>
            <img src="https://via.placeholder.com/300x200" alt="Project 2" />
            <Card.Title>Project 2</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button href="#">Project 2</Button>
          </Card.Body>
        </Card>

        <Card className=" w-72">
          <Card.Body>
            <img src="https://via.placeholder.com/300x200" alt="Project 2" />
            <Card.Title>Project 2</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button href="#">Project 3</Button>
          </Card.Body>
        </Card>

        <Card className=" w-72">
          <Card.Body>
            <img src="https://via.placeholder.com/300x200" alt="Project 3" />
            <Card.Title>Project 3</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button href="#">Project 4</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
