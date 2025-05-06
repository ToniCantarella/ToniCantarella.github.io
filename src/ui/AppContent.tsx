import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import { Paths } from "./navigation/NavigationBar"
import { AboutMe } from "./pages/about-me/AboutMe"
import { Contact } from "./pages/contact/Contact"
import { Examples } from "./pages/examples/Examples"
import { Skills } from "./pages/skills/Skills"

export const AppContent = () => {
    const location = useLocation()

    return (
        <div id="app-content">
            <AnimatePresence initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path={Paths.ABOUT_ME}
                        element={<AboutMe />}
                    />
                    <Route
                        path={Paths.SKILLS}
                        element={<Skills />}
                    />
                    <Route
                        path={Paths.EXAMPLES}
                        element={<Examples />}
                    />
                    <Route
                        path={Paths.CONTACT}
                        element={<Contact />}
                    />
                </Routes>
            </AnimatePresence>
        </div>
    )
}