/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Label = ({
  className,
  barClassName,
  progressBarClassName,
  hasEllipseOffsetTo = true,
  hasSpacer = true,
  hasText = true,
  ellipseOffsetToClassName,
  hasPadding = true,
  hasProgressBar = true,
  text = "IDEATION",
}) => {
  return (
    <div className={`label ${className}`}>
      <div className={`bar ${barClassName}`}>
        {hasProgressBar && (
          <div className={`ellipse-offset-to-wrapper ${progressBarClassName}`}>
            {hasEllipseOffsetTo && (
              <div className={`ellipse-offset-to ${ellipseOffsetToClassName}`}>
                <div className="ellipse" />
              </div>
            )}
          </div>
        )}

        {hasSpacer && <div className="spacer" />}
      </div>
      {hasPadding && <div className="padding">{hasText && <div className="text">{text}</div>}</div>}
    </div>
  );
};

Label.propTypes = {
  hasEllipseOffsetTo: PropTypes.bool,
  hasSpacer: PropTypes.bool,
  hasText: PropTypes.bool,
  hasPadding: PropTypes.bool,
  hasProgressBar: PropTypes.bool,
  text: PropTypes.string,
};
