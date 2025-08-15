import { Outlet } from "react-router-dom"
import "./promoterspage.scss"
import Cta from "../../components/cta/Cta"
import SubNavbar from "../../components/sub-navbar/SubNavbar"

function PromotersPage() {

  return (
    <section className="promoters-page">
        <Cta/>
        <SubNavbar/>
        <Outlet/>
    </section>
  )
}

export default PromotersPage