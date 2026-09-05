import { Outlet } from 'react-router'
import NavBar from './ui/navigation/NavBar'

function App() {

  return (
    <div className='flex flex-col h-full'>
      <NavBar
        onLogoClick={() => { }}
      />
      <main className="page-content flex flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default App
