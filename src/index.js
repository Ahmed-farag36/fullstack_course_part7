import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import notesReducer from "./reducers/notesReducer";
import personsReducer from "./reducers/personsReducer";
import notificationReducer from "./reducers/notificationReducer";

import App from "./App";

const reducers = combineReducers({
  notes: notesReducer,
  persons: personsReducer,
  notification: notificationReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
