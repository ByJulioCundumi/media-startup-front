import { Outlet } from "react-router-dom"
import ChallengesNavbar from "../../components/challenges-navbar/ChallengesNavbar"
import "./promoterspage.scss"
import Cta from "../../components/cta/Cta"

function PromotersPage() {

  return (
    <section className="promoters-page">
        <Cta/>
        <ChallengesNavbar/>
        <Outlet/>
    </section>
  )
}

export default PromotersPage