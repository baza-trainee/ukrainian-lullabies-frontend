import "./QrCodeButton.css";
import { QrCodeIcon } from "../QRCode/QrCodeIcon";
import Popup from "reactjs-popup";
import { useSelector } from "react-redux";
// import qrImageDummy from "../../../assets/images/QR_dummy.png";
import QRCode from "../../../assets/images/QR_Code.svg"
import { Ornaments } from "../../Ornaments/Ornaments";
import classNames from "classnames";

export const QrCodeButton = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  return (
    <Popup
      trigger={
        <button className="achievements-donats-qr-button">
          <QrCodeIcon />
        </button>
      }
      modal
      lockScroll
      overlayStyle={isLightTheme ? { background: "rgba(0, 0, 0, 0.6)" } : { background: "rgba(231, 231, 231, 0.6)" }}
    >
      {(close) => (
        <div className={classNames("qr-button-modal", { "qr-button-modal-light": isLightTheme })}>
          <div className="qr-image">
            <img src={QRCode} alt="QR" width="140" height="140" />
          </div>

          <ul className="qr-info">
            <li>
              <p className="text-xs">Найменування отримувача:</p>
              <p className="text-base-semibold">ГО МУЗЕЙ КОЛИСКОВОЇ</p>
            </li>
            <li>
              <p className="text-xs">Код отримувача:</p>
              <p className="text-base-semibold">45284215</p>
            </li>
            <li>
              <p className="text-xs">Рахунок отримувача (IBAN):</p>
              <p className="text-base-semibold">UA353052990000026006035028980</p>
            </li>
            <li>
              <p className="text-xs">Назва банку:</p>
              <p className="text-base-semibold">АТ КБ "ПРИВАТБАНК"</p>
            </li>
            <li>
              <p className="text-xs">Призначення платежу: </p>
              <p className="text-base-semibold">Безповоротна фінансова допомога від</p>
              <p className="text-base-semibold">Прізвище, ім'я, по-батькові.</p>
            </li>
          </ul>
          <Ornaments />
        </div>
      )}
    </Popup>
  );
};
