import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Pathnames } from "./NavigationBar"
import "./AnimatedRoutes.scss"
import { Landing } from "../landing/Landing"
import { Skills } from "../Skills/Skills"
import { Examples } from "../examples/Examples"
import { Contact } from "../contact/Contact"

export const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <div id="animated-routes">
            <AnimatePresence initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path={Pathnames.LANDING}
                        element={
                            <Landing/>
                        }
                    />
                    <Route
                        path={Pathnames.SKILLS}
                        element={
                            <Skills />
                        }
                    />
                    <Route
                        path={Pathnames.EXAMPLES}
                        element={
                            <Examples />
                        }
                    />
                    <Route
                        path={Pathnames.CONTACT}
                        element={
                            <Contact />
                        }
                    />
                </Routes>
            </AnimatePresence>
        </div>
    )
}