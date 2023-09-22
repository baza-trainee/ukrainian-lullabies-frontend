import React from "react";
import "./CookiesModal.css";
import Popup from "reactjs-popup";
import classNames from "classnames";

export const CookiesModal = ({ isLightTheme, closeCookiesBar }) => {
  return (
    <Popup
      trigger={
        <button
          className={classNames("cookies-settings-button", "text-base-semibold", {
            "cookies-settings-button-light": isLightTheme,
          })}
        >
          <span>Налаштування cookie</span>
        </button>
      }
      modal
      nested
      closeOnDocumentClick={false}
    >
      {(close) => (
        <div className={classNames("cookies-modal", "content", { "cookies-modal-light": isLightTheme })}>
          <button className="cookies-modal-close-button" onClick={close}>
            &times;
          </button>
          <div className="cookies-modal-header text-xl-semibold"> Наша політика cookies 🍪🍪🍪 </div>
          <div className="cookies-modal-content text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint
            vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius
            cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
          </div>
          <div className="cookies-modal-actions">
            <button
              className={classNames("cookies-modal-button", "text-base-semibold", { "cookies-modal-button-light": isLightTheme })}
              onClick={() => {
                close();
                closeCookiesBar();
              }}
            >
              Заперечити всі
            </button>
            <button
              className={classNames("cookies-modal-button", "text-base-semibold", { "cookies-modal-button-light": isLightTheme })}
              onClick={() => {
                close();
                closeCookiesBar();
              }}
            >
              Прийняти всі
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
