import ChallengeRequestCard from "../../../components/challenge-request-card/ChallengeRequestCard"
import { mockChallengeRequests } from "../../../util/requestsMock"
import "./memberschallenges.scss"

function MembersChallenges() {
  return (
    <section className="members-challenges">
            {mockChallengeRequests.map((challenge) => (
            <ChallengeRequestCard key={challenge.id} {...challenge} />
          ))}
        </section>
  )
}

export default MembersChallenges