import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
export default function End() {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti width={width} height={height} />
      <div className="flex flex-col text-center justify-center items-center text-slate-950 h-dvh">
        <img src="/jiji-adventure/jiji.png" className="h-72 animate-sway"></img>
        <p className="text-3xl/16 font-bold">The End!</p>
        <img
          src="/jiji-adventure/bailey.png"
          className="h-72 animate-sway"
        ></img>
      </div>
    </>
  );
}
