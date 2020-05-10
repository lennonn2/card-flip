import React, { useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";

import { SelectionType, CardDataType } from "./types/types";

function App(): JSX.Element {
  return (
    <div className="App">
      <CardGrid />
    </div>
  );
}

export default App;
