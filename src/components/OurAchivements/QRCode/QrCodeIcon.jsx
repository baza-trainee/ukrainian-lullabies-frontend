import classNames from "classnames";
import "./QrCodeIcon.css";
import { useSelector } from "react-redux";

export const QrCodeIcon = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames("qr-code-icon", {
        "qr-code-icon_light": isLightTheme,
      })}
    >
      <rect y="0.0256348" width="48" height="48" rx="10" fill="white" />
      <g clipPath="url(#clip0_6030_1721)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5556 11.5812H18.6667V18.6923H11.5556V11.5812ZM8 22.2479V8.02563H22.2222V22.2479H8ZM11.5556 29.359H18.6667V36.4701H11.5556V29.359ZM8 40.0256V25.8034H22.2222V40.0256H8ZM36.4444 11.5812H29.3333V18.6923H36.4444V11.5812ZM25.7778 8.02563V22.2479H40V8.02563H25.7778ZM29.3333 25.8034H25.7778V32.9145H29.3333V36.4701H25.7778V40.0256H29.3333V36.4701H32.8889V40.0256H40V32.9145H36.4444V29.359H40V25.8034H32.8889V29.359H29.3333V25.8034ZM36.4444 32.9145H32.8889V36.4701H36.4444V32.9145Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_6030_1721">
          <rect width="32" height="32" fill="white" transform="translate(8 8.02563)" />
        </clipPath>
      </defs>
    </svg>
  );
};
