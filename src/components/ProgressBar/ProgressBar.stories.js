import { ProgressBar } from ".";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    phase: {
      options: ["ideation", "design", "ready", "handoff"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    phase: "ideation",
    className: {},
    labelHasText: true,
    labelProgressBarClassName: {},
    labelLabelClassName: {},
    labelProgressBarClassNameOverride: {},
    labelHasPadding: true,
    labelEllipseOffsetToClassName: {},
    labelHasTextWrapper: true,
    labelHasDiv: true,
  },
};
