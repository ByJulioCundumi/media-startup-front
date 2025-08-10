import { Outlet } from "react-router-dom"
import "./homepage.scss"
import { setSidebar } from "../../reducers/sidebarSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

function HomePage() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(setSidebar("home"))
  },[])
  
  return (
    <section className="home-page">
      Home page
      <Outlet/>
    </section>
  )
}

export default HomePage