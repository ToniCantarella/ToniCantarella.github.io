import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import { Pathnames } from "./navigation/NavigationBar"
import { AboutMe } from "./about-me/AboutMe"
import { Skills } from "./skills/Skills"
import { Examples } from "./examples/Examples"
import { Contact } from "./contact/Contact"

export const AppContent = () => {
    const location = useLocation()

    return (
        <div id="app-content">
            <AnimatePresence initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path={Pathnames.ABOUT_ME}
                        element={<AboutMe />}
                    />
                    <Route
                        path={Pathnames.SKILLS}
                        element={<Skills />}
                    />
                    <Route
                        path={Pathnames.EXAMPLES}
                        element={<Examples />}
                    />
                    <Route
                        path={Pathnames.CONTACT}
                        element={<Contact />}
                    />
                </Routes>
            </AnimatePresence>
        </div>
    )
}