import React from "react";
import { Choice } from "./Choice";

export const Choices = ({
  left,
  right,
  leftClick = () => {},
  rightClick = () => {},
}) => {
  return (
    <div className="flex justify-center gap-2">
      <Choice onClick={leftClick}>{left}</Choice>
      <Choice onClick={rightClick}>{right}</Choice>
    </div>
  );
};
