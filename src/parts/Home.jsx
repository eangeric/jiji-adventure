import React from "react";
import { useStory } from "../contexts/useStory";
import Menu from "./Menu";
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";
import PartFour from "./PartFour";
import PartFive from "./PartFive";
import End from "./End";

export default function Home() {
  // @ts-ignore
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
    case 4:
      return <PartFour />;
    case 5:
      return <PartFive />;
    case 6:
      return <End />;
  }

  return <div>Error!</div>;
}
