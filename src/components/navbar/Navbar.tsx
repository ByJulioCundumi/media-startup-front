import { SiMarketo } from 'react-icons/si'
import './navbar.scss'
import SearchBar from '../search-bar/SearchBar'
import { BsInfoCircle } from 'react-icons/bs'
import LanguageSelect from '../language-select/LanguageSelect'
import NotificationDropdown from '../notification-dropdown/NotificationDropdown'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { IState } from '../../interfaces/IState'
import { setSidebar } from '../../reducers/sidebarSlice'
import { IoCreateOutline } from 'react-icons/io5'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {sidebarOption} = useSelector((state:IState)=> state.sidebar)

  const aboutPage = ()=>{
    dispatch(setSidebar("about"))
    navigate("/about")
  }
    
  return (
    <div className="navbar">
        <p className="navbar__sidebar-user">DC</p>
        <div className="navbar__brand">
            <SiMarketo className="navbar__brand--icon"/>
            <h1 className="navbar__brand--title"><span className="navbar__brand--title-blue">Daily</span>Challenge</h1>
        </div>
        
        <div className="navbar__right">
          <SearchBar textHolder="Search"/>

          <BsInfoCircle className={sidebarOption !== "about" ? "navbar__info-icon" : "navbar__info-icon-active"} onClick={aboutPage} />

          <NotificationDropdown/>

          <span className="create-post-options__trigger">
            <IoCreateOutline className="create-post-options__icon" />
            Crear
          </span>

          <LanguageSelect/>
        </div>
    </div>
  )
}

export default Navbar