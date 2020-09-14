import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addPerson, getPersons } from "../reducers/personsReducer";
import { setNotification } from "../reducers/notificationReducer";

import useField from "../hooks/useField";

import Form from "./Form";

export default () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.persons);
  const name = useField("text");
  const number = useField("text");

  useEffect(() => {
    dispatch(getPersons);
  }, [dispatch]);

  const handlePersonSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addPerson({
        name: name.inputProps.value,
        number: number.inputProps.value
      })
    );
    dispatch(setNotification("New Person added"));
    name.reset();
    number.reset();
  };

  return (
    <>
      <h2>persons</h2>
      <Form
        handleSubmit={handlePersonSubmit}
        inputFields={[name.inputProps, number.inputProps]}
      />
      {persons.map((n) => (
        <p key={n.id}>
          {n.name} {n.number}
        </p>
      ))}
    </>
  );
};
