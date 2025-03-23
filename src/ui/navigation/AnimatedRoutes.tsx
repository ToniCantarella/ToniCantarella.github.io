import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Page } from "../common/Page";
import { Pathnames } from "./NavigationBar";

export const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <div id="animated-routes">
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path={Pathnames.APP}
                        element={
                            <Page
                                name={"Application"}
                            />
                        }
                    />
                    <Route
                        path={Pathnames.TEST}
                        element={
                            <Page
                                name={"Test"}
                            />
                        }
                    />
                    <Route
                        path={Pathnames.TEST_SECOND}
                        element={
                            <Page
                                name={"second test"}
                            />
                        }
                    />
                    <Route
                        path={Pathnames.TEST_THIRD}
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