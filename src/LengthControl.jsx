import React from "react";

function LengthControl({ controlType }) {
  return (
    <div className="length-container">
      <div className="length-texts">
        <p>
          <span>{controlType}</span> length
        </p>
        <span></span>
      </div>
    </div>
  );
}

export default LengthControl;
