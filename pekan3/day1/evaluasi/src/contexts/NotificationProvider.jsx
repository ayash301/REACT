import React, { useState } from "react";
import NotificationContext from "./NotificationContext";

export default function NotificationProvider({ children }) {
  const [count, setCount] = useState(2);
  const addNotification = () => setCount((c) => c + 1);
  const clearNotifications = () => setCount(0);

  return (
    <NotificationContext.Provider value={{ count, addNotification, clearNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
}
