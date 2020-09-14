import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetNotification } from "../reducers/notificationReducer";

export default () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(resetNotification);
      return () => clearTimeout(id);
    }, 3000);
  }, [notification, dispatch]);

  return notification && <div id="notification">{notification}</div>;
};
