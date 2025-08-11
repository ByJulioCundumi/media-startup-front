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
import { MdOutlineReceiptLong } from 'react-icons/md'

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
        <p className="navbar__sidebar-user">VC</p>
        <div className="navbar__brand">
            <MdOutlineReceiptLong className="navbar__brand--icon"/>
            <h1 className="navbar__brand--title"><span className="navbar__brand--title-blue">Content</span>Creators</h1>
        </div>
        
        <div className="navbar__right">
          <SearchBar textHolder="Search"/>
          <BsInfoCircle className={sidebarOption !== "about" ? "navbar__info-icon" : "navbar__info-icon-active"} onClick={aboutPage} />
          <NotificationDropdown/>
          <span className="create-post-options__trigger">
            <IoCreateOutline className="create-post-options__icon" />
            Create
          </span>
          <LanguageSelect/>
        </div>
    </div>
  )
}

export default Navbar