import { useEffect } from "react";
import "./CountDownDate.css";
import { useState } from "react";

export const Countdown = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    let countDownDate = new Date("June 5, 2025 21:00:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime("COUNTDOWN FINISHED");
      }
    }, 1000);
  }, []);
  return (
    <div className="countdown">
      <h2>Cuenta atras</h2>
      <h2 className="countdown-text">{time}</h2>
    </div>
  );
};
