import { Outlet, useNavigationType } from 'react-router'
import NavBar from './ui/navigation/NavBar'

function App() {
  const navigationType = useNavigationType()

  const direction =
        navigationType === "PUSH"
            ? "forward"
            : navigationType === "POP"
                ? "backward"
                : "none"

  return (
    <div className='flex flex-col h-full'>
      <NavBar
        onLogoClick={() => { }}
      />
      <main className={`page-content flex flex-1 navigation-${direction}`}>
        <Outlet />
      </main>
    </div>
  )
}

export default App
