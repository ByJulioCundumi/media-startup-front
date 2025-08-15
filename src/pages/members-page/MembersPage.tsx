import { Outlet } from 'react-router-dom'
import SubNavbar from '../../components/sub-navbar/SubNavbar'

function MembersPage() {
  return (
    <section>
        <SubNavbar />
        <Outlet />
    </section>
  )
}

export default MembersPage