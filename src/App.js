import React from "react";

import Notification from "./components/Notification";
import Notes from "./components/Notes";
import Persons from "./components/Persons";

const App = () => {
  return (
    <div>
      <Notification />
      <Notes />
      <Persons />
    </div>
  );
};

export default App;
