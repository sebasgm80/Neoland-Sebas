import "./DigitalClock.css"
import { useState, useEffect } from "react"

export const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }), [];

    return (
        <div className="clock-container">
            <span className="material-symbols-outlined">&#xe7f7;</span>
            <h2 className="clock-text">{clockState}</h2>
        </div>
    )
}
