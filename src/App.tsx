import {Route, Routes, useLocation} from 'react-router'
import NavBar from './ui/navigation/NavBar'
import Home from "./ui/home/Home.tsx";
import Page from "./ui/common/Page.tsx";
import useRouteDirection from "./ui/navigation/Navigation.tsx";
import {AnimatePresence} from "motion/react";

function App() {
    const location = useLocation()
    const navigationDirection = useRouteDirection()

    return (
        <div className='flex flex-col h-full'>
            <NavBar
                onLogoClick={() => {}}
            />
            <main className="page-content flex flex-1 relative overflow-hidden">
                <AnimatePresence initial={false} custom={navigationDirection}>
                    <Routes location={location} key={location.pathname}>
                        <Route index element={<Home/>}/>
                        <Route path="/experience" element={<Page>experience</Page>}/>
                        <Route path="/examples" element={<Page>examples</Page>}/>
                        <Route path="/art" element={<Page>art</Page>}/>
                        <Route path="/contact" element={<Page>contact</Page>}/>
                    </Routes>
                </AnimatePresence>
            </main>
        </div>
    )
}

export default App
