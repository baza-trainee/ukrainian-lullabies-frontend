import "./Cookies.css";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { CookiesModal } from "./CookiesModal";

export const Cookies = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const acceptAllClick = () => {
    const cookies = document.getElementById("cookies");
    cookies.style.display = "none";
  };

  const closeCookiesBar = () => {
    const cookies = document.getElementById("cookies");
    cookies.style.display = "none";
  };
  return (
    <div className={classNames("cookies", { "cookies-light": isLightTheme })} id="cookies">
      <button className="cookies-close-button" onClick={closeCookiesBar}>
        &times;
      </button>
      <p className="cookies-text text-base-regular">
        Натискаючи «Прийняти всі файли cookie», ви погоджуєтеся на збереження файлів cookie на вашому пристрої для покращення
        навігації сайтом, аналізу використання сайту та допомоги в наших маркетингових зусиллях.
      </p>
      <CookiesModal isLightTheme={isLightTheme} closeCookiesBar={closeCookiesBar} />
      <button
        className={classNames("cookies-accept-button", "text-base-semibold", { "cookies-accept-button-light": isLightTheme })}
        onClick={acceptAllClick}
      >
        Прийняти всі cookies
      </button>
    </div>
  );
};
