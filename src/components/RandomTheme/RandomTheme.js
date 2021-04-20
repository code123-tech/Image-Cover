import React from "react";
import "./RandomTheme.css";
import { patterns, colorThemes } from "../MainCover/DefaultValues";
import { RandomThemeSvg } from "../MainCover/SvgImoprt";

export default function RandomTheme({ onThemeChange }) {
  const changeTheme = () => {
    const indexOfColors = Math.floor(Math.random() * colorThemes.length);
    const theme = colorThemes[indexOfColors];
    const indexOfPattern = Math.floor(Math.random() * patterns.length);
    const pattern = patterns[indexOfPattern];
    onThemeChange(theme, pattern);
  };
  return (
    <div className="randombtn" onClick={() => changeTheme()}>
      <RandomThemeSvg />
    </div>
  );
}
