import {Route, Routes} from 'react-router'
import NavBar from './ui/navigation/NavBar'
import Home from "./ui/home/Home.tsx";
import Page from "./ui/common/Page.tsx";
import useRouteDirection from "./ui/navigation/Navigation.tsx";

function App() {
    const navigationDirection = useRouteDirection()

    return (
        <div className='flex flex-col h-full'>
            <NavBar
                onLogoClick={() => {
                }}
            />
            <main className="page-content flex flex-1">
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/experience" element={<Page>experience</Page>}/>
                    <Route path="/examples" element={<Page>examples</Page>}/>
                    <Route path="/art" element={<Page>art</Page>}/>
                    <Route path="/contact" element={<Page>contact</Page>}/>
                </Routes>
            </main>
        </div>
    )
}

export default App
