import { CustomButton } from "../../components";
import CheckLogo from "../../images/check-line.png";
import CopyLogo from "../../images/file-copy-line.png";
import DeleteLogo from "../../images/delete-bin-line.png";
import EnglandFlag from "../../images/EnglandFlag.png";
import DropDown from "../../images/DropDown.png";
import Bold from "../../images/bold.png";
import Italic from "../../images/italic.png";
import Underline from "../../images/underline.png";
import UnorderedList from "../../images/list-unordered.png";
import OrderedList from "../../images/list-ordered.png";
import H1 from "../../images/h-1.png";
import H2 from "../../images/h-2.png";
import Link from "../../images/link-m.png";
import FormatClear from "../../images/format-clear.png";
import MainLogo from "../../images/MainLogo.png";
import "./SpellCheck.css";

export function SpellCheck() {
  return (
    <div className="spellCheck__container">
      <div className="spellCheck-top__container">
        <div className="spellCheck-top-check__Container">
          <CustomButton
            styles={{
              padding: "4px 20px 4px 14px",
              gap: "4px",
              width: "106px",
              height: "36px",
              background: "#2D62ED",
              borerRadius: "6px",
              backgroundColor: "2D62ED",
              border: "none",
              fontSize: "14px",
              color: "#FFFFFF",
            }}
            logo={CheckLogo}
            text="check"
          />
        </div>
        <div className="spellCheck-top-options__container">
          <div className="spellCheck-top-options-buttons__container">
            <CustomButton
              styles={{
                padding: "4px 14px",
                gap: "8px",
                width: "90px",
                height: "36px",
                backgroundColor: "#EDEDED",
                borderRadius: "4px",
                border: "none",
                color: "#2D62ED",
                fontSize: "12px",
              }}
              logo={CopyLogo}
              text="Copy"
            />
            <CustomButton
              styles={{
                padding: " 4px 14px",
                gap: "8px",
                width: "97px",
                height: "36px",
                left: "1010px",
                top: "145px",
                background: "#F8F8F8",
                borderRadius: "4px",
                fontSize: "12px",
                border: "none",
              }}
              logo={DeleteLogo}
              text="Delete"
            />
          </div>
          <div className="spellCheck-top-options-language__container">
            <img src={EnglandFlag} alt="England Flag" />
            <p> Language</p>
            <img src={DropDown} alt="Drop Down" />
          </div>
        </div>
      </div>
      <div className="spellCheck-main__container">
        <textarea
          maxLength={6000}
          className="spellCheck-main-textarea"
          placeholder="| Type or paste (⌘+V) something here."
        />
      </div>
      <div className="spellCheck-footer__container">
        <div style={{ display: "flex" }}>
          <div className="spellCheck-footer-items__container">
            <img src={Bold} alt="spellCheck Item Image" />
            <img src={Italic} alt="spellCheck Item Image" />
            <img src={Underline} alt="spellCheck Item Image" />
          </div>
          <div className="spellCheck-footer-items__container">
            <img src={UnorderedList} alt="spellCheck Item Image" />
            <img src={OrderedList} alt="spellCheck Item Image" />
          </div>
          <div className="spellCheck-footer-items__container">
            <img src={H1} alt="spellCheck Item Image" />
            <img src={H2} alt="spellCheck Item Image" />
          </div>
          <div className="spellCheck-footer-items__container">
            <img src={Link} alt="spellCheck Item Image" />
          </div>
          <div
            className="spellCheck-footer-items__container"
            style={{ border: "none" }}
          >
            <img src={FormatClear} alt="spellCheck Item Image" />
          </div>
        </div>
        <div className="spellCheck-footer-numberCount__container">
          628 characters, 103 words
        </div>
      </div>
      <img className="footer-main-logo" src={MainLogo} alt="Main Logo" />
    </div>
  );
}
