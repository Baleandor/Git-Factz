import React, { useEffect, useRef } from "react"
import { getThemeClassName } from "../utility/classUtilities";
import OrkImage from "./OrkImage";

export default function Main({ isDarkMode }) {
    
    const audioRef = useRef(null);
    const playTrack = () => { audioRef.current?.play() }; //disables clicking before rendering
    useEffect(() => {
        audioRef.current = new Audio()
        audioRef.current.src = "/audio/waaaaaaargh.mp3"
    }, [])
    const mainClassName = getThemeClassName(isDarkMode)

    return (
        <main className={mainClassName}>
            <h1 className="main--title">Why Orks is never defeated in battle:</h1>
            <div className="content">
                < OrkImage />
                <div>
                    <ul className="main--facts">
                        <li>If we win, then we win!</li>
                        <li>If we die, we die FIGHTING! So it don't count!</li>
                        <li>If we runs for it then we don't lose neither because then we can come back for another go, see.</li>
                    </ul>
                    <button className={mainClassName} onClick={playTrack}>WAAAAAAAGH!!!</button>
                </div>
                < OrkImage />
            </div>

        </main>
    )
}