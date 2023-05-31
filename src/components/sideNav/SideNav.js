import { useState } from "react";
import "./SideNav.css";
import SpellCheckLogo from "../../images/SpellCheckLogo.png";
import SpellCheckLogoSelected from "../../images/SpellCheckLogoSelected.png";
import RampUp from "../../images/RampUp.png";
import RampDown from "../../images/RampDown.png";
import Gears from "../../images/Gears.png";
import ModeButton from "../../images/ModeButton.png";
import VoicePrint from "../../images/voiceprint-line.png";
import VoicePrintSelected from "../../images/voiceprintselected-line.svg";
import Microphone from "../../images/Microphone.png";
import MicrophoneSelected from "../../images/MicrophoneSelected.svg";
import QuestionMark from "../../images/question-line.png";
import FBLogo from "../../images/facebook-circle-line.png";
export function SideNav({ selected, setSelected }) {
  const renderBottomButton = (logo, text) => {
    return (
      <div className="sideNav-bottom-button__container">
        <img src={logo} alt="bottom-button logo" />
        <p>{text}</p>
      </div>
    );
  };
  const renderSectionButton = (id, logo, selectedLogo, text) => {
    return (
      <div
        style={{ color: selected === id ? "#2D62ED" : "#FFFFFF" }}
        onClick={() => {
          setSelected(id);
        }}
        id
        className={`section-button__container ${
          id === selected ? "section-button__container-selected" : ""
        }`}
      >
        {id === selected ? (
          <img className="rampUp" src={RampUp} alt="ramp Up image" />
        ) : null}
        {id === selected ? (
          <img className="rampDown" src={RampDown} alt="ramp Down image" />
        ) : null}
        <img
          width={24}
          height={24}
          src={id === selected ? selectedLogo : logo}
          alt="section logo"
          styles={{ fill: "red" }}
        />
        <p>{text}</p>
      </div>
    );
  };
  return (
    <div className="sideNav__container">
      <div className="sideNav-section-buttons__container">
        {renderSectionButton(
          1,
          SpellCheckLogo,
          SpellCheckLogoSelected,
          "Spellchecker"
        )}
        {renderSectionButton(
          2,
          VoicePrint,
          VoicePrintSelected,
          "Text to speech"
        )}
        {renderSectionButton(
          3,
          Microphone,
          MicrophoneSelected,
          "Speech to text"
        )}
      </div>
      <div className="sideNav-bottom__container">
        <div className="sideNav-bottom-buttons__container">
          {renderBottomButton(Gears, "Settings")}
          {renderBottomButton(FBLogo, "Facebook")}
          {renderBottomButton(QuestionMark, "Contact support")}
        </div>
        <img
          src={ModeButton}
          alt="mode button"
          style={{ margin: "53.35px 0 57.35px 0", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
