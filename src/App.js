import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./App.css";

function App() {
  const [binary, setBinary] = useState("");
  const [decimalText, setDecimalText] = useState(" ");
  const [errorMessage, setErrorMessage] = useState("");

  function convertFunc() {
    // Make sure we accept only either 0 or 1
    if (binary.match(/^[0-1]+$/g) === null) {
      setErrorMessage("Enter either 0 or 1");
      return;
    }

    setErrorMessage(""); // Reset the error message

    // Formulae:
    // input = 1 => output = 1 * (2^0) = 1
    // input = 10 => output = (0 * (2^0)) + (1 * (2^1)) = 2
    // So we reverse and iterate from the back
    const reversedBinaryText = binary
      .split("")
      .map(Number) // Convert to a number from string
      .reverse();

    // Calculate the result by accumulating previous value
    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    );
    setDecimalText(result);
  }

  return (
    <div className="App">
      <TextField
        variant="outlined"
        className="field"
        label="Binary"
        value={binary}
        error={errorMessage.length}
        helperText={errorMessage}
        onChange={(e) => setBinary(e.target.value)}
      />
      <Button
        style={{ marginRight: "48px", height: 40 }}
        variant="contained"
        color="primary"
        onClick={convertFunc}
      >
        Convert
      </Button>
      <br />
      <TextField
        disabled
        variant="outlined"
        className="decimal"
        label="Decimal Output"
        value={decimalText}
      />
    </div>
  );
}

export default App;
