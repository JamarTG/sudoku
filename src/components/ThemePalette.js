import React from "react";

export default function ThemePalette({ primaryColor, setPrimaryColor }) {
  return (
    <div className="palette">
      <button
        className="teal"
        onClick={() => {
          setPrimaryColor("teal");
        }}
      >
        teal
      </button>
      <button
        className="black"
        onClick={() => {
          setPrimaryColor("black");
        }}
      >
        black
      </button>
      <button
        className="yellow"
        onClick={() => {
          setPrimaryColor("yellow");
        }}
      >
        yellow
      </button>
      <button
        className="navy"
        onClick={() => {
          setPrimaryColor("navy");
        }}
      >
        navy
      </button>
      <button
        className="blue"
        onClick={() => {
          setPrimaryColor("blue");
        }}
      >
        blue
      </button>
    </div>
  );
}
