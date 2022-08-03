import React from 'react';
import { Line, Circle } from "rc-progress";
import { useState } from "react";

const Progressbar = () => {
    const [conut, setcount] = useState(0);
  const handleSave = (e) => {
    // if (conut === 100) {
    //   setcount({
    //     conut: 0
    //   });
    // }
    e.preventDefault();
    setcount((current) => current + 1);
  };
  return (
    <div className="App">
    <Line percent={conut} strokeWidth={4} strokeColor="blue" />
    <button onClick={(e) => handleSave(e)}>Save</button>
    <h1>{conut}</h1>
    {/* <Circle percent={conut} strokeWidth={4} strokeColor="#D3D3D3" /> */}
  </div>
  )
}

export default Progressbar;

