import React from "react";
import { useInView } from "react-intersection-observer";
import { useTextAnimation } from "../hooks/useTextAnimation.js";

function AnimatedTextComponent({
  text = "",
  className = "",
  as: Element = "h1", // Default to <h1>, but can be overridden
  ...props // Capture any additional props
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const animatedText = useTextAnimation(text, inView);

  if (!text) {
    return null;
  }

  return (
    <div ref={ref}>
      <Element className={className} {...props}>
        {animatedText}
      </Element>
    </div>
  );
}

export default AnimatedTextComponent;