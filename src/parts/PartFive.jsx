import React, { useState } from "react";
import { useWindowSize } from "react-use";
import { TextBox } from "../components/TextBox";
import { useStory } from "../contexts/useStory";
import { Choice } from "../components/Choice";
import { Choices } from "../components/Choices";
import Confetti from "react-confetti";

export default function PartFive() {
  const { width, height } = useWindowSize();
  const [textCount, setTextCount] = useState(0);
  const text = [
    "Jiji is very happy!",
    "She offers you some cat food as a reward!",
    "Oh no! You hear the sound of footsteps.",
    "Jiji thinks its the thief!",
    "Woah! Looks like the thief was Bailey all along.",
    "Bailey says she's sorry. She didn't know it was Jijis.",
    "Bailey asks Jiji if she would accept her apology.",
    "Jiji accepts Bailey's apology.",
  ];
  // @ts-ignore
  const { setStoryState } = useStory();

  const handleNext = () => {
    if (textCount === 7) {
      setStoryState((prev) => prev + 1);
    } else {
      setTextCount((prev) => prev + 1);
    }
  };

  return (
    <div>
      {textCount < 2 && <Confetti width={width} height={height} />}
      <div className="h-dvh flex flex-col justify-end items-center">
        <div className="flex-grow flex items-center">
          {textCount < 4 && (
            <img
              src="/jiji-adventure/jiji.png"
              className="h-72 animate-sway"
            ></img>
          )}
          {3 < textCount && textCount < 7 && (
            <img src="/jiji-adventure/bailey.png" className="h-72 mr-2"></img>
          )}
          {textCount === 7 && (
            <img
              src="/jiji-adventure/jiji.png"
              className="h-72 animate-sway"
            ></img>
          )}
        </div>
        <div className="w-[95dvw] flex justify-center">
          {textCount !== 1 && <Choice onClick={handleNext}>Continue</Choice>}
          {textCount === 1 && (
            <div className="flex-grow">
              <Choices
                left="No thanks!"
                leftClick={() => {
                  setTextCount((prev) => prev + 1);
                }}
                right="Take it!"
                rightClick={() => {
                  setTextCount((prev) => prev + 1);
                }}
              ></Choices>
            </div>
          )}
        </div>
        <div className="flex justify-center items-end text-xl/8">
          <TextBox>{text[textCount]}</TextBox>
        </div>
      </div>
    </div>
  );
}
