import React from "react";
import { StoryProvider } from "./contexts/StoryProvider";
import Home from "./parts/Home";

export default function App() {
  return (
    <StoryProvider>
      <Home />
    </StoryProvider>
  );
}
