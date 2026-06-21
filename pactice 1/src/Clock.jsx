import { useEffect, useState } from "react";

function Clock({ color }) {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="clock-card">
      <div className="glow"></div>

      <h2>⚡ FUTURE CLOCK</h2>

      <h1
        className="time"
        style={{
          color,
          textShadow: `0 0 10px ${color},
                       0 0 20px ${color},
                       0 0 40px ${color}`,
        }}
      >
        {time}
      </h1>

      <p>{today}</p>

      <div className="status">
        <span className="dot"></span>
        LIVE
      </div>
    </div>
  );
}

export default Clock;