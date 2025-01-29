import { useContext } from "react";
import { StoryContext } from "./StoryContext";

// Custom hook to use the StoryContext
export function useStory() {
  return useContext(StoryContext);
}
