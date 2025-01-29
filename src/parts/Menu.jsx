import React from "react";
import { useStory } from "../contexts/useStory";

export default function Menu() {
  const { setStoryState } = useStory();
  return (
    <div className="flex flex-col text-center gap-4 justify-center items-center h-dvh text-slate-950">
      <p className="text-3xl/16 font-bold">Jiji's Adventure</p>
      <button
        onClick={() => setStoryState((prev) => (prev += 1))}
        className="bg-slate-400 p-4 rounded-2xl border-4 text-xl"
      >
        Click to start!
      </button>
    </div>
  );
}
