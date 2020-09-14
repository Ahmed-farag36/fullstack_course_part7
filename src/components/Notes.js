import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createNote, getNotes } from "../reducers/notesReducer";
import { setNotification } from "../reducers/notificationReducer";

import useField from "../hooks/useField";

import Form from "./Form";

export default () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const content = useField("text");

  useEffect(() => {
    dispatch(getNotes);
  }, [dispatch]);

  const handleNoteSubmit = (event) => {
    event.preventDefault();
    dispatch(createNote({ content: content.inputProps.value }));
    dispatch(setNotification("New notes added"));
    content.reset();
  };

  return (
    <>
      <h2>notes</h2>
      <Form
        handleSubmit={handleNoteSubmit}
        inputFields={[content.inputProps]}
      />
      {notes.map((note) => (
        <p key={note.id}>{note.content}</p>
      ))}
    </>
  );
};
