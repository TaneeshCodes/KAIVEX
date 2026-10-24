import { Suspense, lazy } from "react";
import type { SelectedButtonStudyVariant } from "./SelectedButtonStudies";

const SelectedButtonStudies = lazy(() =>
  import("./SelectedButtonStudies").then((module) => ({ default: module.SelectedButtonStudies }))
);

export type ShaderButtonsProps = {
  variant?: string;
  mode?: "light" | "dark" | "auto";
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function ShaderButtons({ variant = "chrome-upload", ...props }: ShaderButtonsProps) {
  return (
    <Suspense fallback={null}>
      <SelectedButtonStudies variant={variant as SelectedButtonStudyVariant} {...props} />
    </Suspense>
  );
}
