import { Outlet } from "react-router-dom"
import ChallengesNavbar from "../../components/sub-navbar/SubNavbar"
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