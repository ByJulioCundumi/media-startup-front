import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import GlobalChallenges from './pages/challenges-pages/global-challenges/GlobalChallenges'
import ChallengesPage from './pages/challenges-pages/ChallengesPage'
import JobsPage from './pages/jobs-page/JobsPage'
import GlobalJobs from './pages/jobs-page/global-jobs/GlobalJobs'
import PromotersPage from './pages/promoters-page/PromotersPage'
import GlobalPromoterPosts from './pages/promoters-page/global-promoter-posts/GlobalPromoterPosts'

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

          <Route path="/jobs" element={<JobsPage />}>
            <Route path="" element={<GlobalJobs />}>
            
            </Route>
          </Route>

          <Route path="/promoters" element={<PromotersPage />}>
            <Route path="" element={<GlobalPromoterPosts />}>
            
            </Route>
          </Route>
          
        </Routes>
      </section>
    </BrowserRouter>
    </>
  )
}

export default App
