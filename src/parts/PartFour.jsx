import React, { useState } from "react";
import { TextBox } from "../components/TextBox";
import { useStory } from "../contexts/useStory";
import { Choice } from "../components/Choice";
import { Choices } from "../components/Choices";

export default function PartFour() {
  // const [textCount, setTextCount] = useState(0);
  // const text = [
  //   "The footprints led you to a mound of dirt!",
  //   "Jiji says she thinks something is beneath it.",
  //   "Jiji hands you a shovel!",
  //   "Dig the dirt?",
  // ];
  // @ts-ignore
  const { setStoryState } = useStory();

  return (
    <div className="h-dvh overflow-y-scroll snap-y snap-mandatory">
      <div className="snap-start h-dvh flex flex-col justify-end items-center">
        <div className="flex-grow flex items-center">
          <img src="/jiji-adventure/shovel.gif" className="h-64"></img>
        </div>
        <div className="flex justify-center items-end text-xl/8">
          <TextBox>Scroll to dig!</TextBox>
        </div>
      </div>

      <div className="snap-start h-dvh flex flex-col justify-end items-center bg-amber-950">
        <div className="flex-grow flex items-center">
          <img src="/jiji-adventure/fish.png" className="h-54"></img>
        </div>

        <div className="w-[95dvw] flex justify-center">
          <Choice onClick={() => setStoryState((prev) => prev + 1)}>
            Continue
          </Choice>
        </div>

        <div className="flex justify-center items-end text-xl/8">
          <TextBox>You found Jiji's toy fish!</TextBox>
        </div>
      </div>
    </div>
  );
}
