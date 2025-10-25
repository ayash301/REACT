import React, { useState } from "react";

interface Posisi {
  x: number;
  y: number;
}

const MouseTracker = ({
  render,
}: {
  render: (posisi: Posisi) => React.ReactNode;
}) => {
  const [posisi, setPosisi] = useState<Posisi>({ x: 0, y: 0 });

  return (
    <div
      className="tracker"
      onMouseMove={(e) =>
        setPosisi({ x: e.clientX, y: e.clientY })
      }
    >
      {render(posisi)}
    </div>
  );
};

const MouseTrackerDemo = () => {
  return (
    <MouseTracker
      render={(pos) => (
        <span className="tracker-text">
          X: {pos.x}, Y: {pos.y}
        </span>
      )}
    />
  );
};

export default MouseTrackerDemo;
