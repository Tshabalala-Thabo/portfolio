import React from "react";
import { Card } from "../card";

interface CardData {
  title: string;
  subtitle: string; 
  content: string;
}

export function WhatIDo() {
  const cardData: CardData[] = [
    {
      title: "UI/UX Design",
      subtitle: "Enhancing User Interactions",
      content: "I design intuitive and visually appealing user interfaces. By focusing on user experience, I create designs that are not only aesthetically pleasing but also functional and easy to navigate."
    },
    {
      title: "Web Development",
      subtitle: "Crafting Digital Experiences",
      content: "I create responsive, user-friendly websites using modern technologies. From concept to deployment, I ensure seamless functionality and engaging interfaces that captivate users and drive business growth."
    },
    {
      title: "Mobile App Development",
      subtitle: "Building for the Small Screen",
      content: "I develop cross-platform mobile applications that work seamlessly on iOS and Android. Using React Native, I create efficient, feature-rich apps that provide a native-like experience to users."
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl text-white font-bold text-center mb-12">WHAT I DO</h2>
      <div className='container'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}