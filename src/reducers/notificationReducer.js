// Reducer
export default (state = "", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.payload;
    case "RESET_NOTIFICATION":
      return action.payload;
    default:
      return state;
  }
};

// Action creators
export const setNotification = (payload) => async (dispatch) => {
  dispatch({
    type: "SET_NOTIFICATION",
    payload
  });
};

export const resetNotification = async (dispatch) => {
  dispatch({
    type: "RESET_NOTIFICATION",
    payload: ""
  });
};
