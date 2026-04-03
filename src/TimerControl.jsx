import React from "react";

function TimerControl() {
  return (
    <div className="timer-wrapper">
      <svg viewBox="0 0 100 100" className="timer-svg">
        <circle cx="50" cy="50" r="45" className="circle-bg" />
        <circle cx="50" cy="50" r="45" className="circle-progress" />
      </svg>

      <div className="timer-content">
        <h2 id="timer-label">Session</h2>
        <span id="time-left">25:00</span>
        <div className="controls">{/* Botones de Play/Reset */}</div>
      </div>
    </div>
  );
}

export default TimerControl;
