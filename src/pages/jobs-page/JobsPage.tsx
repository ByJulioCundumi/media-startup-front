import { Outlet } from "react-router-dom"
import "./jobspage.scss"
import Cta from "../../components/cta/Cta"
import SubNavbar from "../../components/sub-navbar/SubNavbar"

function JobsPage() {
  return (
    <section className="jobs-page">
        <Cta/>
        <SubNavbar/>
        <Outlet/>
    </section>
  )
}

export default JobsPage