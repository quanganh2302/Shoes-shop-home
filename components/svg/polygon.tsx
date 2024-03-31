"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface IconProps {
  className?: string;
  width: number;
  height: number;
}

const Polygon: React.FC<IconProps> = (props) => {
  const width = props.width * 0.97;
  const height = props.height * 0.97;
  const points = [
    [width * 0.5, height * 0.05],
    [width * 0.95, height * 0.38],
    [width * 0.82, height * 0.95],
    [width * 0.18, height * 0.95],
    [width * 0.05, height * 0.38],
  ]
    .map((point) => point.join(" "))
    .join(", ");
  return (
    <svg
      className={cn("flex items-center justify-center", props.className)}
      height="515"
      width="515"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB38B0" />
          <stop offset="100%" stopColor="#FCB633" />
        </linearGradient>
      </defs>
      <polygon
        className="bg-transparent fill-none stroke-[4]"
        points={points}
        stroke="url(#strokeGradient)"
      />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};

export default Polygon;
