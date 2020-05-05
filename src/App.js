import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import "./App.css";

function App() {
  const [binary, setBinary] = useState("");

  return (
    <div className="App">
      <TextField
        id="textfield"
        label="Binary"
        value={binary}
        onChange={(e) => setBinary(e.target.value)}
      />
    </div>
  );
}

export default App;
