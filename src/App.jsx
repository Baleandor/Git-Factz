import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [isDarkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div className="container">
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            <Main isDarkMode={isDarkMode}/>
        </div>
    )
}