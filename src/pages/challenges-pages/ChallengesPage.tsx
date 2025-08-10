import { Outlet } from 'react-router-dom'
import "./challengespage.scss"
import ChallengesNavbar from '../../components/challenges-navbar/ChallengesNavbar'

function ChallengesPage() {
  return (
    <section className="challenges-page">
      <ChallengesNavbar/>
      <Outlet/>
    </section>
  )
}

export default ChallengesPage