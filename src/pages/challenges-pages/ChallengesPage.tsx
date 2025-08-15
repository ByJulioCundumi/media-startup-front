import { Outlet } from 'react-router-dom'
import "./challengespage.scss"
import Cta from '../../components/cta/Cta'
import SubNavbar from '../../components/sub-navbar/SubNavbar'

function ChallengesPage() {
  return (
    <section className="challenges-page">
      <Cta/>
      <SubNavbar/>
      <Outlet/>
    </section>
  )
}

export default ChallengesPage