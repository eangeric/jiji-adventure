import React from "react";
import { useStory } from "../contexts/useStory";

export default function Menu() {
  // @ts-ignore
  const { setStoryState } = useStory();
  return (
    <div className="flex flex-col text-center justify-center items-center text-slate-950 h-dvh">
      <p className="text-3xl/16 font-bold">Jiji's Adventure</p>
      <button
        onClick={() => setStoryState((prev) => (prev += 1))}
        className="bg-slate-400 p-4 m-4 rounded-2xl border-4 text-xl"
      >
        Click to start!
      </button>
    </div>
  );
}
