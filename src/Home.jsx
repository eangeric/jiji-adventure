import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("CLICKED");
    navigate("/jiji-adventure/1");
  };

  return (
    <>
      <div className="flex flex-col text-center gap-4 justify-center items-center h-dvh text-slate-950">
        <p className="text-3xl/16 font-bold">Jiji's Adventure</p>
        <button
          onClick={handleClick}
          className="bg-slate-400 p-4 rounded-2xl border-4 text-xl"
        >
          Click to start!
        </button>
      </div>
    </>
  );
}
