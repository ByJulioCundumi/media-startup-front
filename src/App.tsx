import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import HomePage from './pages/home-page/HomePage'
import GlobalChallenges from './pages/home-page/global-challenges/GlobalChallenges'

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

          <Route path="/" element={<HomePage />}>
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
