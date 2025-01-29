import React from "react";
import { useStory } from "../contexts/useStory";
import Menu from "./Menu";
import PartOne from "./PartOne";

export default function Home() {
  const { storyState } = useStory();

  switch (storyState) {
    case 0:
      return <Menu />;
    case 1:
      return <PartOne />;
  }

  return <div>Error!</div>;
}
