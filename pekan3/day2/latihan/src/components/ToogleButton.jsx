import React from "react";
import { useToggle } from "../hooks/useToggle";

export default function ToogleButton() {
  const {state,toggle} = useToggle(false)

  return(
    <div style={{textAlign:"center",marginTop:"50px"}}>
        <h2>Status: {state ? "ON" : "OFF"}</h2>
        <button onClick={toggle}>
            {state ? "Turn OFF" : "Turn ON"}
        </button>
    </div>
  )
}