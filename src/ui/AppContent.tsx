import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import { Paths } from "./navigation/NavigationBar"
import { AboutMe } from "./pages/about-me/AboutMe"
import { Skills } from "./pages/skills/Skills"
import { Examples } from "./pages/examples/Examples"
import { Contact } from "./pages/contact/Contact"
import { Carousel } from "./common/Carousel"

export const AppContent = () => {
    const location = useLocation()

    return (
        <div id="app-content">
            <AnimatePresence initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path={Paths.ABOUT_ME}
                        element={
                        <Carousel
                        stayDuration={7000}
                        >
                            <div>a</div>
                            <div>b</div>
                            <div>c</div>
                        </Carousel>
                        }
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