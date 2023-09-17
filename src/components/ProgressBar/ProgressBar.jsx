/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Label } from "../Label";
import "./style.css";

export const ProgressBar = ({
  phase,
  className,
  labelHasText,
  labelProgressBarClassName,
  labelLabelClassName,
  labelProgressBarClassNameOverride,
  labelHasPadding,
  labelEllipseOffsetToClassName,
  labelHasTextWrapper,
  labelHasDiv,
}) => {
  return (
    <div className={`progress-bar ${className}`}>
      <Label
        barClassName="label-instance"
        className={labelLabelClassName}
        hasEllipseOffsetTo={["design", "handoff", "ready"].includes(phase) ? false : undefined}
        hasSpacer={["design", "handoff", "ready"].includes(phase) ? false : undefined}
        hasText={labelHasText}
        progressBarClassName={labelProgressBarClassName}
        text={["design", "handoff", "ready"].includes(phase) ? "IDEATION" : undefined}
      />
      <Label
        barClassName="label-2"
        className="instance-node"
        ellipseOffsetToClassName={labelEllipseOffsetToClassName}
        hasEllipseOffsetTo={["handoff", "ready"].includes(phase) ? false : undefined}
        hasPadding={labelHasPadding}
        hasProgressBar={phase === "ideation" ? false : undefined}
        hasSpacer={["handoff", "ready"].includes(phase) ? false : undefined}
        progressBarClassName={labelProgressBarClassNameOverride}
        text="DESIGN"
      />
      <Label
        barClassName="label-2"
        className="instance-node"
        ellipseOffsetToClassName={`${phase === "handoff" && "class"}`}
        hasEllipseOffsetTo={phase === "ready" ? false : undefined}
        hasPadding={labelHasTextWrapper}
        hasProgressBar={["design", "ideation"].includes(phase) ? false : undefined}
        hasSpacer={phase === "ready" ? false : undefined}
        progressBarClassName={`${phase === "handoff" && "class"} ${phase === "ready" && "class-2"}`}
        text="HANDOFF"
      />
      <Label
        barClassName={`${phase === "ready" ? "class-3" : "class-4"}`}
        className="instance-node"
        ellipseOffsetToClassName={`${phase === "ready" && "class-2"}`}
        hasPadding={labelHasDiv}
        hasProgressBar={["design", "handoff", "ideation"].includes(phase) ? false : undefined}
        progressBarClassName={`${phase === "ready" && "class-2"}`}
        text="READY"
      />
    </div>
  );
};

ProgressBar.propTypes = {
  phase: PropTypes.oneOf(["ideation", "design", "ready", "handoff"]),
  labelHasText: PropTypes.bool,
  labelHasPadding: PropTypes.bool,
  labelHasTextWrapper: PropTypes.bool,
  labelHasDiv: PropTypes.bool,
};
