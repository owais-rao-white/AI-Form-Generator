"use client";

import { useState } from "react";
import GenerateFormInput from "./GenerateFormInput";
import { Button } from "./ui/button";

type suggestionText = {
  label: string;
  text: string;
};

const suggestBtnText: suggestionText[] = [
  {
    label: "Job Application",
    text: "Develop a basic job application form that server as a one-page solution from collecting essential information from applicant",
  },
  {
    label: "Registration Form",
    text: "Create a course registration form suitable from any school or institution",
  },
  {
    label: "Feedback Form",
    text: "Create a client feedback form to gether valuable insights from any clients",
  },
];

const HeroSection = () => {
  const [text, setText] = useState<String>("");

  return (
    <section>
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-50"></div>
        <div className="container mx-auto text-center relative">
          <h1 className="text-4xl font-bold">Build A-Drivan Form Effortlessly</h1>
          <p className="mt-4">
            Leverage the power of AI to create responsive and dynamic Form in Minutes
          </p>
        </div>
      </div>
      {/* Create Input Field */}
      <GenerateFormInput text={text} />
      <div className="grid grid-cols-4 gap-3">
        {suggestBtnText.map((item: suggestionText, index: number) => (
          <Button
            onClick={() => {
              setText(item.text);
            }}
            key={index}
            className="rounded-full h-10"
            variant={"outline"}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

// https://youtu.be/DNlBTMuGMso?t=3378 : 56:18
