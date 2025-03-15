import React from "react";
import { useInView } from "react-intersection-observer";
import { useTextAnimation } from "@/hooks/useTextAnimation";

interface AnimatedTextComponentProps {
  text?: string;
  className?: string;
  as?: React.ElementType;
  [key: string]: any; // For additional props
}

const AnimatedTextComponent: React.FC<AnimatedTextComponentProps> = ({
  text = "",
  className = "",
  as: Element = "h1",
  ...props
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const animatedText = useTextAnimation({ text, inView });

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
};

export default AnimatedTextComponent;