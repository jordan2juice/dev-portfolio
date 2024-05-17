"use client";

import React from "react";
import { Card, CardBody, CardHeader, CardText } from "react-bootstrap";

export default function Education() {
  return (
    <div id="education" className=" container m-2 p-16">
      <h2 className="text-2xl font-bold text-cyan-700 mb-2 p-4">Education</h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center p-4"
      >
        <Card className="border-2 border-teal-700 rounded-xl p-4">
          <CardBody>
            <CardHeader className="bg-slate-200 text-center p-2">
              <h2>CodeX Academy</h2>
            </CardHeader>
            <CardText className="text-center p-2">
              <h3>Full Stack Web Development</h3>
              <h4>Nov 2023 - Present</h4>
            </CardText>
          </CardBody>
        </Card>
        <Card className="border-2 border-teal-700 rounded-xl p-4">
          <CardBody>
            <CardHeader className="bg-slate-200 text-center p-2">
              <h2>Delgado Community College</h2>
            </CardHeader>
            <CardText className="text-center p-2">
              <h3>Graphic Design</h3>
              <h4>Nov 2002 - May 2006</h4>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
