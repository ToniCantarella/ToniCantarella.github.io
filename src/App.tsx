import {Route, Routes, useLocation} from 'react-router'
import Home from "./ui/home/Home.tsx";
import Page from "./ui/common/Page.tsx";
import useRouteDirection from "./ui/navigation/Navigation.tsx";
import {AnimatePresence} from "motion/react";
import TopBar from "./ui/topbar/TopBar.tsx";
import IntroAnimation from "./ui/intro-animation/IntroAnimation.tsx";
import {useState} from "react";

function App() {
    const location = useLocation()
    const navigationDirection = useRouteDirection()
    const [introPlaying, setIntroPlaying] = useState<boolean>(false)

    return (
        <>
            <IntroAnimation
                playing={introPlaying}
                onExit={() => setIntroPlaying(false)}
                onExitComplete={() => console.log("end")}
            />
            <div className='flex flex-col h-full'>
                <TopBar
                    onLogoClick={() => setIntroPlaying(true)}
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
        </>
    )
}

export default App
