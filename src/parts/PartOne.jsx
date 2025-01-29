import React from "react";
import { TextBox } from "../components/TextBox";

export default function PartOne() {
  return (
    <div className="h-dvh flex flex-col justify-end items-center">
      <div className="flex-grow flex items-center">
        <img src="/jiji-adventure/jiji.png" className="h-72 animate-sway"></img>
      </div>
      <div className="flex items-end text-2xl/8">
        <TextBox>
          Jiji needs your help! Someone has stolen her favorite toy fish.
        </TextBox>
      </div>
    </div>
  );
}
