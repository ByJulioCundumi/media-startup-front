import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import GlobalChallenges from './pages/challenges-pages/global-challenges/GlobalChallenges'
import ChallengesPage from './pages/challenges-pages/ChallengesPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <section className="app">
        {/* Navegacion */}
        <Navbar />
        <Sidebar />

        {/* Rutas */}
        <Routes>

          <Route path="/" element={<ChallengesPage />}>
            <Route path="" element={<GlobalChallenges />}>
            
            </Route>
          </Route>
          
        </Routes>
      </section>
    </BrowserRouter>
    </>
  )
}

export default App
