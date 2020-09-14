import { getPersons as getPersonsService } from "../services/person";
import { addPerson as addPersonService } from "../services/person";

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case "GET_PERSONS":
      return action.payload;
    case "ADD_PERSON":
      return [...state, action.payload];
    default:
      return state;
  }
};

// Action Creators
export const getPersons = async (dispatch) => {
  const response = await getPersonsService();
  dispatch({
    type: "GET_PERSONS",
    payload: response.data
  });
};

export const addPerson = (person) => async (dispatch) => {
  const response = await addPersonService(person);
  dispatch({
    type: "ADD_PERSON",
    payload: response.data
  });
};
