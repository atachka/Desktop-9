import { memo } from "react";
import { CustomButton } from "../customButton/CustomButton";
import ChromeLogo from "../../images/chrome-logo.png";
import ProfileImage from "../../images/profile-image.png";
import DropDownImage from "../../images/DropDown.png";
import "./Header.css";

function Component() {
  return (
    <header className="header__container">
      <div className="header-buttons__container">
        <CustomButton
          text="Add to Chrome"
          styles={{
            border: "1px solid #DFDFDF",
            color: "#4B4B4B",
            backgroundColor: "#FFFFFF",
            padding: "8px 20px",
            gap: "11.6px",
          }}
          logo={ChromeLogo}
        />
        <CustomButton
          text="Upgrade to Pro"
          styles={{
            color: "#FFFFFF",
            backgroundColor: "#2D62ED",
            border: "none",
            padding: " 4px 20px",
            borderRadius: "6px",
          }}
        />
      </div>
      <div className="header-profile__container">
        <img src={ProfileImage} alt="profile image" />
        <img src={DropDownImage} alt="drop down image" />
      </div>
    </header>
  );
}
const Header = memo(Component);
export { Header };
