import React, { useState } from "react";
import { TextBox } from "../components/TextBox";
import { Choices } from "../components/Choices";
import { useStory } from "../contexts/useStory";
import { Choice } from "../components/Choice";

export default function PartTwo() {
  const [textCount, setTextCount] = useState(0);
  const text = [
    "Jiji says she might know some clues that can help.",
    "She saw some footprints of the potential thief.",
    "Follow them?",
  ];
  // @ts-ignore
  const { setStoryState } = useStory();
  return (
    <div className="h-dvh flex flex-col justify-end items-center">
      <div className="flex-grow flex items-center">
        <img src="/jiji-adventure/jiji.png" className="h-72 animate-sway"></img>
      </div>
      <div className="w-[95dvw] flex justify-center">
        {textCount < 2 ? (
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
              right="Let's go!"
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
