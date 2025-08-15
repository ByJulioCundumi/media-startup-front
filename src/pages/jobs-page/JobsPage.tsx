import { Outlet } from "react-router-dom"
import "./jobspage.scss"
import ChallengesNavbar from "../../components/sub-navbar/SubNavbar"
import Cta from "../../components/cta/Cta"

function JobsPage() {
  return (
    <section className="jobs-page">
        <Cta/>
        <ChallengesNavbar/>
        <Outlet/>
    </section>
  )
}

export default JobsPage