import React from "react"
import { getThemeClassName } from "../utility/classUtilities"

export default function Navbar({ toggleDarkMode, isDarkMode }) {
    const navClassName = getThemeClassName(isDarkMode)



    return (
        <nav className={navClassName}>
            <img
                className="nav--logo_icon"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.wikia.nocookie.net%2F__cb20120423083446%2F40k%2Fimages%2Fd%2Fd0%2FOrk_icon.png&f=1&nofb=1"
            />
            <h3 className="nav--logo_text">Ork Factz</h3>

            <div className="toggler">
                <p className="toggler--dark">DARK</p>
                <div className="toggler--slider" onClick={toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--light">LIGHT</p>
            </div>
        </nav>
    )
}