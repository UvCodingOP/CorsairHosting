import { useState } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useEffect } from "react";
import {motion} from "framer-motion"
import { animate } from "framer-motion";

const CountUp = ({ target, duration, type }) => {
  const [isAnimated, setIsAnimated] = useState(null);
  const [number, setNumber] = useState(0);

  const numberAnimationRef = useRef(null);
  const isInView = useInView(numberAnimationRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView && !isAnimated) {
      const controls = animate(0, target, {
        duration: 1,
        onUpdate(value) {
          let displayed = Math.round(value);
          if (type === "percentage") {
            if (displayed == 99) {
              setNumber(displayed + "." + 9 + "%");
            } else {
              setNumber(displayed + `.${displayed.toString().charAt(0)}%`);
            }
          } else {
            setNumber(displayed);
          }
        },
        onComplete() {
          setIsAnimated(true);
        },
      });
      return () => controls.stop();
    }
  }, [isInView]);
  return <motion.span ref={numberAnimationRef}>{number}</motion.span>;
};

export default CountUp;