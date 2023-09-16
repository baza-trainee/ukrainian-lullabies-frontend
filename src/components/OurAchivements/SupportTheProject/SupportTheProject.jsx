import { CoffeeLogo } from "./CoffeeLogo/CoffeeLogo";
import { DonatLogo } from "./DonatLogo/DonatLogo";
import "./SupportTheProject.css";

export function SupportTheProject() {
  return (
    <div className="SupportTheProject">
      <div className="support__text">Допоможи розвитку проєкту:</div>
      <div className="donats">
        <CoffeeLogo />
        <DonatLogo />
      </div>
    </div>
  );
}
