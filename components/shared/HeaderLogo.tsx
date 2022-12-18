import React from "react";

const HeaderLogo = () => {
  return (
    <svg
      className="w-full"
      viewBox="0 0 44 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="44"
        y="34"
        width="36"
        height="34"
        rx="3"
        transform="rotate(-180 44 34)"
        fill="url(#paint0_linear_21_6)"
        fill-opacity="0.8"
      />
      <rect
        y="8"
        width="36"
        height="34"
        rx="3"
        fill="url(#paint1_linear_21_6)"
        fill-opacity="0.8"
      />
      <defs>
        <linearGradient
          id="paint0_linear_21_6"
          x1="62"
          y1="34"
          x2="35.5442"
          y2="55.8501"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#818CF8" stop-opacity="0.54" />
          <stop offset="1" stop-color="#E964A2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_21_6"
          x1="18"
          y1="8"
          x2="-8.45578"
          y2="29.8501"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#818CF8" stop-opacity="0.54" />
          <stop offset="1" stop-color="#E964A2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeaderLogo;
