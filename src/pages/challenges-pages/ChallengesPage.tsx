import { Outlet } from 'react-router-dom'
import "./challengespage.scss"
import ChallengesNavbar from '../../components/challenges-navbar/ChallengesNavbar'
import Cta from '../../components/cta/Cta'

function ChallengesPage() {
  return (
    <section className="challenges-page">
      <Cta/>
      <ChallengesNavbar/>
      <Outlet/>
    </section>
  )
}

export default ChallengesPage