import React, { useState } from "react";
import moment from "moment";

const Context = () => {
  const [start, setStart] = useState();
  console.log("gg",start?.moment().format("ddd Do MMMM") )

  return (
    <div>
      <h3>Time Diff</h3>
      <input
        name="date"
        type="date"
        value={start}
        onChange={(e)=>setStart(e.target.value)}
      />
    </div>
  );
};
export default Context;