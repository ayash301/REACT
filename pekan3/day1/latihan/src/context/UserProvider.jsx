import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Guest");

  const login = (name) => {
    if (name.trim() === "") return;
    setUser(name);
  };

  const logout = () => setUser("Guest");

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
