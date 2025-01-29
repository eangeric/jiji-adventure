import React from "react";
import { TextBox } from "../components/TextBox";
import { Choices } from "../components/Choices";
import { useStory } from "../contexts/useStory";

export default function PartOne() {
  // @ts-ignore
  const { setStoryState } = useStory();
  return (
    <div className="min-h-dvh flex flex-col justify-end items-center">
      <div className="flex-grow flex items-center">
        <img src="/jiji-adventure/jiji.png" className="h-72 animate-sway"></img>
      </div>
      <div className="w-[95dvw]">
        <Choices
          left="Nah!"
          leftClick={() => {
            window.location.reload();
          }}
          right="Help!"
          rightClick={() => {
            setStoryState((prev) => prev + 1);
          }}
        ></Choices>
      </div>
      <div className="flex justify-center items-end text-xl/8">
        <TextBox>
          Jiji needs your help! Someone has stolen her favorite toy fish.
        </TextBox>
      </div>
    </div>
  );
}
