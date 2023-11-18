import classNames from "classnames";
import { t } from "i18next";
import { useState } from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import ornamentImg from "../../../assets/images/OrnamentsMapTabs.svg";
import QRCode from "../../../assets/images/QR_Code.svg";
import { QrCodeIcon } from "../QRCode/QrCodeIcon";
import "./QrCodeButton.css";

export const QrCodeButton = ({ mobile = false }) => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const [copyClicked, setCopyClicked] = useState({});

  const copyToClipboard = async (event, paragraphIndex) => {
    const text = event.target.innerText;
    if (!copyClicked[paragraphIndex]) {
      await navigator.clipboard.writeText(text);
      setCopyClicked((prevState) => ({
        ...prevState,
        [paragraphIndex]: true,
      }));
    }

    setTimeout(
      () =>
        setCopyClicked((prevState) => ({
          ...prevState,
          [paragraphIndex]: false,
        })),
      2000
    );
  };

  return (
    <Popup
      trigger={
        <button className="achievements-donats-qr-button">
          <QrCodeIcon mobile={mobile} />
        </button>
      }
      modal
      lockScroll
      overlayStyle={
        isLightTheme
          ? { background: "rgba(0, 0, 0, 0.6)" }
          : { background: "rgba(231, 231, 231, 0.6)" }
      }
    >
      {(close) => (
        <div
          className={classNames("qr-button-modal", {
            "qr-button-modal-light": isLightTheme,
          })}
        >
          <div className="qr-image">
            <img src={QRCode} alt="QR" width="140" height="140" />
          </div>

          <ul className="qr-info">
            <li>
              <p className="text-xs"> {t("recipientName")}:</p>
              <p
                className="text-base-semibold"
                onClick={(e) => copyToClipboard(e, 0)}
              >
                {t("ngoLullabyMuseum")}
              </p>
              <p
                className={classNames(
                  "qr-info-copy-clicked",
                  "text-sm-semibold",
                  {
                    "qr-info-copy-clicked-light": isLightTheme,
                  }
                )}
                style={
                  copyClicked[0]
                    ? { display: "inline-block" }
                    : { display: "none" }
                }
              >
                {t("shareText")}
              </p>
            </li>
            <li>
              <p className="text-xs"> {t("recipientCode")}:</p>
              <p
                className="text-base-semibold"
                onClick={(e) => copyToClipboard(e, 1)}
              >
                45284215
              </p>
              <p
                className={classNames(
                  "qr-info-copy-clicked",
                  "text-sm-semibold",
                  {
                    "qr-info-copy-clicked-light": isLightTheme,
                  }
                )}
                style={
                  copyClicked[1]
                    ? { display: "inline-block" }
                    : { display: "none" }
                }
              >
                {t("shareText")}
              </p>
            </li>
            <li>
              <p className="text-xs">{t("recipientAccount")}:</p>
              <p
                className="text-base-semibold"
                onClick={(e) => copyToClipboard(e, 2)}
              >
                UA353052990000026006035028980
              </p>
              <p
                className={classNames(
                  "qr-info-copy-clicked",
                  "text-sm-semibold",
                  {
                    "qr-info-copy-clicked-light": isLightTheme,
                  }
                )}
                style={
                  copyClicked[2]
                    ? { display: "inline-block" }
                    : { display: "none" }
                }
              >
                {t("shareText")}
              </p>
            </li>
            <li>
              <p className="text-xs">{t("bankName")}:</p>
              <p
                className="text-base-semibold"
                onClick={(e) => copyToClipboard(e, 3)}
              >
                {t("jscCbPrivatbank")}
              </p>
              <p
                className={classNames(
                  "qr-info-copy-clicked",
                  "text-sm-semibold",
                  {
                    "qr-info-copy-clicked-light": isLightTheme,
                  }
                )}
                style={
                  copyClicked[3]
                    ? { display: "inline-block" }
                    : { display: "none" }
                }
              >
                {t("shareText")}
              </p>
            </li>
            <li>
              <p className="text-xs">{t("paymentPurpose")}:</p>
              <p
                className="text-base-semibold"
                onClick={(e) => copyToClipboard(e, 4)}
              >
                {t("paymentPurposePlaceholder1")}
              </p>
              <p className="text-base-semibold">
                {t("paymentPurposePlaceholder2")}
              </p>
              <p
                className={classNames(
                  "qr-info-copy-clicked",
                  "text-sm-semibold",
                  {
                    "qr-info-copy-clicked-light": isLightTheme,
                  }
                )}
                style={
                  copyClicked[4]
                    ? { display: "inline-block" }
                    : { display: "none" }
                }
              >
                {t("shareText")}
              </p>
            </li>
          </ul>
          <img
            src={ornamentImg}
            alt="ornament"
            className="qr-button-modal-ornament"
          />
        </div>
      )}
    </Popup>
  );
};
