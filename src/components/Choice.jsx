import React from "react";

export const Choice = ({ children, onClick = () => {} }) => {
  return (
    <p
      onClick={onClick}
      className="flex justify-center items-center bg-slate-400 p-2 rounded-2xl border-4 w-1/2 h-[10dvh] text-center"
    >
      {children}
    </p>
  );
};
