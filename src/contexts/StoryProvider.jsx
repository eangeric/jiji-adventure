import React, { useState } from "react";
import { StoryContext } from "./StoryContext";

// Story Provider
export const StoryProvider = ({ children }) => {
  const [storyState, setStoryState] = useState(0); // Global state

  return (
    <StoryContext.Provider value={{ storyState, setStoryState }}>
      {children}
    </StoryContext.Provider>
  );
};
