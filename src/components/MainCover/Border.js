import React from "react";

const Border = ({ borders }) => {
  return (
    <>
      {borders.map((value, index) => {
        return <option key={index}>{value}</option>;
      })}
    </>
  );
};
export default Border;
