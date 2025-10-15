import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ThemeButton from "./Themebutton";

function Navbar() {
  const { user } = useContext(UserContext);

  const navbarStyle = {
    position: "fixed",           
    top: 0,
    left: 0,
    width: "100%",           
    background: "linear-gradient(90deg, #4a4ff2, #7a5cf4)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px ",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  };

  const profileStyle = {
    display: "flex",
    alignItems: "center",
  };

  const imgStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "white",
    marginRight: "10px",
  };

  const nameStyle = {
    fontSize: "1.4rem",
    color: "#ff6347",
    fontWeight: "600",
  };

  return (
    <nav style={navbarStyle}>
      <div style={profileStyle}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyClX8gt_RaOPG3lSOOu8N7pq94GaltnLsPHFOxh9HyumhKIHRnvBQBCp1vCkUX1VuIQ&usqp=CAU"
          alt="profile"
          style={imgStyle}
        />
        <h2 style={nameStyle}>{user}</h2>
      </div>
      <ThemeButton />
    </nav>
  );
}

export default Navbar;
