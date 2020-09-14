import React from "react";

import Input from "./Input";

export default ({ handleSubmit, inputFields }) => {
  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((inputProps, i) => (
        <Input key={i} inputProps={inputProps} />
      ))}
      <button>create</button>
    </form>
  );
};
