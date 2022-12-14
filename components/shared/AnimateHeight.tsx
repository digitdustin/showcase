import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useMeasure } from "../../hooks/useMeasure";

export function AnimateHeight({
  duration,
  ease = "easeOut",
  variants = {
    open: {
      opacity: 1,
      height: "auto",
    },
    collapsed: { opacity: 0, height: 0 },
  },
  isVisible,
  children,
  ...other
}: {
  duration?: number;
  ease?: string;
  variants?: any;
  isVisible: boolean;
  children: any;
}) {
  const ref = useRef(null);
  const bounds = useMeasure(ref);

  return (
    <motion.div
      className="overflow-hidden"
      initial={isVisible ? "open" : "collapsed"}
      animate={isVisible ? "open" : "collapsed"}
      inherit={false}
      variants={variants}
      transition={{
        ease,
        duration:
          typeof duration === "number"
            ? duration
            : getAutoHeightDuration(bounds.height) / 1000,
      }}
      {...other}
    >
      {typeof children === "function" ? (
        children(ref)
      ) : (
        <div ref={ref}>{children}</div>
      )}
    </motion.div>
  );
}

/**
 * Get the duration of the animation depending upon
 * the height provided.
 * @param {number} height of container
 */

function getAutoHeightDuration(height: number) {
  if (!height) return 0;
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
