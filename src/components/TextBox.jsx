import React from "react";

export const TextBox = ({ children }) => {
  return (
    <p className="bg-slate-400 p-2 m-2 rounded-2xl border-4 w-full min-h-[25vh]">
      {children}
    </p>
  );
};
