import React from "react";
import { TextAnimationCollection, type TextAnimationCollectionProps } from "./neuform-isolated/TextAnimationCollection";

export { AnimatedTopDock } from "./animated-top-dock/AnimatedTopDock";
export { PredictiveArcCanvas } from "./predictive-arc/PredictiveArcCanvas";
export { GetStartedButton } from "./get-started-button/GetStartedButton";
export { TextAnimationCollection } from "./neuform-isolated/TextAnimationCollection";

export function ThreeUIIntro(props: TextAnimationCollectionProps) {
  return React.createElement(TextAnimationCollection, {
    variant: "threeui-intro",
    text: "ThreeUI",
    ...props,
  });
}
