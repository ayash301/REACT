import type { FC } from "react";
import { MouseTracker } from "./MouseTracker";
import "./MouseTracker.css";

const HandleMouse: FC = () => {
  return (
    <div>
      <h2>Render Props Pattern</h2>
      <p>Gerakkan mouse Anda di dalam kotak di bawah ini:</p>
      <MouseTracker
        render={(mousePosition) => (
          <p
            className="mouse-position"
            style={{
              top: mousePosition.y - 10,
              left: mousePosition.x - 10,
            }}
          >
            ({mousePosition.x}, {mousePosition.y})
          </p>
        )}
      />
      <p>
        *Pola ini penting dipahami meskipun sering digantikan oleh Custom Hooks.
      </p>
    </div>
  );
};

export default HandleMouse;
