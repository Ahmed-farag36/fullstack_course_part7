import { getNotes as getNotesService } from "../services/notes";
import { createNote as createNoteService } from "../services/notes";

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case "GET_NOTES":
      return action.payload;
    case "CREATE_NOTES":
      return [...state, action.payload];
    default:
      return state;
  }
};

// Action Creators
export const getNotes = async (dispatch) => {
  const response = await getNotesService();
  dispatch({
    type: "GET_NOTES",
    payload: response.data
  });
};

export const createNote = (note) => async (dispatch) => {
  const response = await createNoteService(note);
  dispatch({
    type: "CREATE_NOTES",
    payload: response.data
  });
};
