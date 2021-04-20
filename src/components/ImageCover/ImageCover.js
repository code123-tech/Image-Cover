import React from "react";
import hexRgb from "hex-rgb";
import "./ImageCover.css";
import "../assets/css/pattern.css";

export default function ImageCover({ values }) {
  const {
    title,
    bgColor,
    borderColor,
    borderSize,
    borderType,
    pattern,
    foregroundColor,
    textColor,
    opacity,
    author,
    icon
  } = values;

  let rgbaColor = hexRgb(foregroundColor);
  rgbaColor.alpha = opacity;
  const styleToApply = {
    borderTop: `${borderSize}px ${borderType} ${borderColor}`,
    backgroundColor: `rgba(${rgbaColor.red},${rgbaColor.green},${rgbaColor.blue},${rgbaColor.alpha})`,
    color: `${textColor}`
  };

  return (
    <div>
      <div className={`cover ${pattern}`} style={{ backgroundColor: bgColor }}>
        <div className={`${pattern}`}>
          <div className="title-card" style={styleToApply}>
            <p>{title}</p>
          </div>
        </div>
      </div>
      <div className="meta">
        <i className={`devicon-${icon.value}-plain dev-icon`}></i>
        <span className="autor">
          A Blog By{" "}
          <span role="img" aria-label="donut">
            ⚡
          </span>{" "}
          {author}
        </span>
      </div>
    </div>
  );
}
