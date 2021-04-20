import React, { useRef } from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
  exportComponentAsPDF
} from "react-component-export-image";
import "./ImageCover/ImageCover.css";

const ComponentToImg = (props) => {
  const componentRef = useRef();
  let downloadBtn;
  switch (props.options.downloadAs) {
    case "PNG":
      downloadBtn = (
        <button onClick={() => exportComponentAsPNG(componentRef)}>
          Download
        </button>
      );
      break;
    case "JPEG":
      downloadBtn = (
        <button onClick={() => exportComponentAsJPEG(componentRef)}>
          Download
        </button>
      );
      break;
    case "PDF":
      downloadBtn = (
        <button onClick={() => exportComponentAsPDF(componentRef)}>
          Download
        </button>
      );
      break;
    default:
      break;
  }
  return (
    <>
      <div ref={componentRef}>{props.children}</div>
      {downloadBtn}
    </>
  );
};

export default ComponentToImg;
