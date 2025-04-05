import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import { Pathnames } from "./navigation/NavigationBar"
import { Landing } from "./landing/Landing"
import { Skills } from "./Skills/Skills"
import { Examples } from "./examples/Examples"
import { Contact } from "./contact/Contact"

export const AppContent = () => {
    const location = useLocation()

    return (
        <div id="app-content">
            <AnimatePresence initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path={Pathnames.LANDING}
                        element={<Landing />}
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