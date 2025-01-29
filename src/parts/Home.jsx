import React from "react";
import { useStory } from "../contexts/useStory";
import Menu from "./Menu";
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";

export default function Home() {
  const { storyState } = useStory();

  switch (storyState) {
    case 0:
      return <Menu />;
    case 1:
      return <PartOne />;
    case 2:
      return <PartTwo />;
    case 3:
      return <PartThree />;
  }

  return <div>Error!</div>;
}
