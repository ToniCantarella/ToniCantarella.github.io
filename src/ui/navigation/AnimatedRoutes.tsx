import {  Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Page } from "../common/Page";

export const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path='/'
                    element={
                        <Page
                            name={"Application"}
                        />
                    }
                />
                <Route
                    path='/test'
                    element={
                        <Page
                            name={"Test"}
                        />
                    }
                />
            </Routes>
        </AnimatePresence>
    )
}