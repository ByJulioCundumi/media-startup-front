import { BrowserRouter, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'

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
          
        </Routes>
      </section>
    </BrowserRouter>
    </>
  )
}

export default App
