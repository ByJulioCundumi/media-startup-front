import { Outlet } from 'react-router-dom'
import ChallengesNavbar from '../../components/challenges-navbar/ChallengesNavbar'

function ContentPage() {
  return (
    <section>
        <ChallengesNavbar />
        <Outlet />
    </section>
  )
}

export default ContentPage