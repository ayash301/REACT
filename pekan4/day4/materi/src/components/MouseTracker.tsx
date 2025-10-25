import React, { useState, type FC } from "react";

interface Position {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  render: (position: Position) => React.ReactNode;
}

export const MouseTracker: FC<MouseTrackerProps> = ({ render }) => {
  const [positions, setPositions] = useState<Position[]>([]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const newPos = { x: event.clientX, y: event.clientY };
    setPositions(prev => [...prev, newPos]);
  };

  const handleReset = () => {
    setPositions([]);
  };

  const latestPosition = positions[positions.length - 1] || { x: 0, y: 0 };

  return (
    <>
      <button className="reset-btn" onClick={handleReset}>Reset</button>

      <div className="mouse-area" onMouseMove={handleMouseMove}>
        <svg className="draw-layer">
          {positions.map((pos, index) => {
            if (index === 0) return null;
            const prev = positions[index - 1];
            return (
              <line
                key={index}
                x1={prev.x}
                y1={prev.y}
                x2={pos.x}
                y2={pos.y}
                stroke="#e11d48"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {render(latestPosition)}
      </div>
    </>
  );
};
