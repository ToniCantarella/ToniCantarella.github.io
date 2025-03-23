import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Page } from "../common/Page";
import { Pathnames } from "./NavigationBar";
import "./AnimatedRoutes.scss"
import { Landing } from "../Landing/Landing";
import { Skills } from "../Skills/Skills";
import { Examples } from "../Examples/Examples";
import { Contact } from "../Contact/Contact";

export const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <div id="animated-routes">
            <AnimatePresence>
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