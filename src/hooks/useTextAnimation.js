import { useState, useEffect } from "react";

export function useTextAnimation(text, inView) {
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    if (inView) {
      // Start the animation to reveal the text one character at a time
      let currentIndex = 0;
      const interval = setInterval(() => {
        setVisibleLength((prev) => {
          if (currentIndex >= text.length) {
            clearInterval(interval); // Stop the interval when animation is complete
            return prev;
          }
          currentIndex++;
          return currentIndex;
        });
      }, 100); // Adjust the interval duration for speed

      return () => clearInterval(interval);
    }
  }, [inView, text]);

  // Return the visible part of the text
  return text.substring(0, visibleLength);
}