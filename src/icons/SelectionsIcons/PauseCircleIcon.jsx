// Add this component to other components and you can pass the params WIDTH and HEIGHT
// for example: <PauseCircleIconDark width="56" height="53" />

import React from "react";

export const PauseCircleIconDark = ({ width = 24, height = 24 }) => {
  return (
    <>
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12.0009" r="12" fill="url(#paint0_linear_2940_5443)" fillOpacity="0.1" />
        <path
          d="M8.66667 18.0009C9.58333 18.0009 10.3333 17.2294 10.3333 16.2866V7.71514C10.3333 6.77228 9.58333 6.00085 8.66667 6.00085C7.75 6.00085 7 6.77228 7 7.71514V16.2866C7 17.2294 7.75 18.0009 8.66667 18.0009ZM13.6667 7.71514V16.2866C13.6667 17.2294 14.4167 18.0009 15.3333 18.0009C16.25 18.0009 17 17.2294 17 16.2866V7.71514C17 6.77228 16.25 6.00085 15.3333 6.00085C14.4167 6.00085 13.6667 6.77228 13.6667 7.71514Z"
          fill="#C60F18"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2940_5443"
            x1="11.4953"
            y1="-1.53446"
            x2="15.6491"
            y2="25.2839"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
