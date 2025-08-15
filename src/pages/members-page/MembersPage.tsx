import { Outlet } from 'react-router-dom'
import ChallengesNavbar from '../../components/sub-navbar/SubNavbar'

function MembersPage() {
  return (
    <section>
        <ChallengesNavbar />
        <Outlet />
    </section>
  )
}

export default MembersPage