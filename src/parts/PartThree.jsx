import React, { useState } from "react";
import { TextBox } from "../components/TextBox";
import { useStory } from "../contexts/useStory";
import { Choice } from "../components/Choice";
import { Choices } from "../components/Choices";

export default function PartThree() {
  const [textCount, setTextCount] = useState(0);
  const text = [
    "The footprints led you to a mound of dirt!",
    "Jiji says she thinks something is beneath it.",
    "Jiji hands you a shovel!",
    "Dig the dirt?",
  ];
  // @ts-ignore
  const { setStoryState } = useStory();
  return (
    <div className="h-dvh flex flex-col justify-end items-center">
      <div className="flex-grow flex items-center">
        {textCount < 2 && (
          <img src="/jiji-adventure/dirt.png" className="h-72"></img>
        )}
        {1 < textCount && (
          <img
            src="/jiji-adventure/shovel.gif"
            className="h-64 animate-bounce"
          ></img>
        )}
      </div>
      <div className="w-[95dvw] flex justify-center">
        {textCount < 3 ? (
          <Choice onClick={() => setTextCount((prev) => prev + 1)}>
            Continue
          </Choice>
        ) : (
          <div className="flex-grow">
            <Choices
              left="Nah!"
              leftClick={() => {
                window.location.reload();
              }}
              right="Yea!"
              rightClick={() => {
                setStoryState((prev) => prev + 1);
              }}
            ></Choices>
          </div>
        )}
      </div>
      <div className="flex justify-center items-end text-xl/8">
        <TextBox>{text[textCount]}</TextBox>
      </div>
    </div>
  );
}
