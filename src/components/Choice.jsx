import React from "react";

export const Choice = ({ children, onClick = () => {} }) => {
  return (
    <p
      onClick={onClick}
      className="flex mx-2 justify-center items-center bg-slate-400 p-2 rounded-2xl border-4 w-[50vh] h-[10vh]"
    >
      {children}
    </p>
  );
};
