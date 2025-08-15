import { Outlet } from 'react-router-dom'
import "./challengespage.scss"
import ChallengesNavbar from '../../components/sub-navbar/SubNavbar'
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