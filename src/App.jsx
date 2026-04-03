//import { useState } from "react";
import "./App.css";
import LengthControl from "./LengthControl";

function App() {
  return (
    <>
      <LengthControl controlType="Break"></LengthControl>
      <LengthControl controlType="Session"></LengthControl>
    </>
  );
}

export default App;
