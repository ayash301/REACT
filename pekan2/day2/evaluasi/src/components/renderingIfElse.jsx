import React from "react";

function IfElseExample() {
  const isLoggedIn = true;
  let message;

  if (isLoggedIn) {
    message = <p>Pagi boss!!!</p>;
  } else {
    message = <p>Monggo-monggo</p>;
  }

  return (
    <div>
      <h2>Tugas 1</h2>
      {message}
    </div>
  );
}

export default IfElseExample;
