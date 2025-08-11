import { Outlet } from "react-router-dom"
import "./jobspage.scss"
import ChallengesNavbar from "../../components/challenges-navbar/ChallengesNavbar"

function JobsPage() {
  return (
    <section className="jobs-page">
        <ChallengesNavbar/>
        <Outlet/>
    </section>
  )
}

export default JobsPage