import React, { useState, useEffect, useRef } from "react";
import AnimatedTextComponent from "./animated-text";

interface CardData {
  title: string;
  subtitle: string;
  content: string;
}

export function Card({ card }: { card: CardData }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isNear, setIsNear] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleGlobalMouseMove = (event: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setMousePosition({ x, y });

        const proximityThreshold = 100;
        const isNearCard =
          event.clientX > rect.left - proximityThreshold &&
          event.clientX < rect.right + proximityThreshold &&
          event.clientY > rect.top - proximityThreshold &&
          event.clientY < rect.bottom + proximityThreshold;

        setIsNear(isNearCard);
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden p-[1px] bg-gray-800 bg-opacity-20 rounded-lg transition-all duration-300 ease-in-out w-full lg:flex-1"
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      <div
        className={`absolute opacity-0 ${
          isNear ? 'opacity-100' : 'group-hover:opacity-100'
        } transition-opacity duration-300 ease-in-out blur-2xl w-64 h-64 bg-white bg-opacity-20 rounded-full`}
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          transform: `translate(-50%, -50%)`,
          zIndex: -1,
        }}
      ></div>

      <div
        className="absolute opacity-0 w-52 h-52 rounded-full"
        style={{ zIndex: -1 }}
      ></div>

      <div className="relative p-6 bg-glass border bg-opacity-70 border-white border-opacity-10 text-white rounded-lg shadow-md h-full rounded-lg transition-all duration-300 ease-in-out group-hover:bg-opacity-40">
        <h3 className="text-2xl font-semibold text-white mb-2">{card.title}</h3>
        <AnimatedTextComponent
          className="text-lg font-source-code-pro font-bold text-primary mb-4"
          text={card.subtitle || "Default Subtitle"}
        />
        <p className="text-white text-opacity-70">{card.content}</p>
      </div>
    </div>
  );
}