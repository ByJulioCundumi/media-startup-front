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
import ContentPage from './pages/content-page/ContentPage'
import GlobalContent from './pages/content-page/global-content/GlobalContent'
import AboutPage from './pages/about-page/AboutPage'
import AboutHowItWorks from './pages/about-page/about-how-it-works/AboutHowItWorks'
import AboutMission from './pages/about-page/about-mission/AboutMission'
import AboutVision from './pages/about-page/about-vision/AboutVision'
import AboutTeam from './pages/about-page/about-team/AboutTeam'
import AboutTerms from './pages/about-page/about-terms/AboutTerms'
import AboutContact from './pages/about-page/about-contact/AboutContact'
import AuthPopup from './components/auth-popup/AuthPopup'
import { useSelector } from 'react-redux'
import type { IState } from './interfaces/IState'

function App() {
  const {authPopupStatus} = useSelector((state:IState)=>state.popupStatus)

  return (
    <>
    <BrowserRouter>
      <section className="app">
        {/* Navegacion */}
        <Navbar />
        <Sidebar />

        {/* pop-ups globales */}
        {authPopupStatus === "opened" && <AuthPopup />}

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

          <Route path="/content" element={<ContentPage />}>
            <Route path="" element={<GlobalContent />}>
            
            </Route>
          </Route>

          <Route path="about" element={<AboutPage />}>
            <Route index element={<AboutHowItWorks />} />
            <Route path="mission" element={<AboutMission />} />
            <Route path="vision" element={<AboutVision />} />
            <Route path="team" element={<AboutTeam />} />
            <Route path="terms" element={<AboutTerms />} />
            <Route path="contact" element={<AboutContact />} />
          </Route>
          
        </Routes>
      </section>
    </BrowserRouter>
    </>
  )
}

export default App
