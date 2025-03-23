import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Page } from "../common/Page";
import { Pathnames } from "./NavigationBar";
import "./AnimatedRoutes.scss"

export const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <div id="animated-routes">
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path={Pathnames.LANDING}
                        element={
                            <Page
                                name={"Application"}
                            />
                        }
                    />
                    <Route
                        path={Pathnames.SKILLS}
                        element={
                            <Page
                                name={"Test"}
                            />
                        }
                    />
                    <Route
                        path={Pathnames.EXAMPLES}
                        element={
                            <Page
                                name={"second test"}
                            />
                        }
                    />
                    <Route
                        path={Pathnames.CONTACT}
                        element={
                            <Page
                                name={"third test"}
                            />
                        }
                    />
                </Routes>
            </AnimatePresence>
        </div>
    )
}