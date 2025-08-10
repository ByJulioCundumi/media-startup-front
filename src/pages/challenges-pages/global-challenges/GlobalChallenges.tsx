import "./globalchallenges.scss";
import ChallengePost from "../../../components/challenge-post/ChallengePost";
import { mockProposals } from "../../../components/util/challengesMock";

function GlobalChallenges() {

  return (
    <section className="global-challenges">
        {mockProposals.map((challenge) => (
        <ChallengePost key={challenge.id} {...challenge} />
      ))}
    </section>
  );
}

export default GlobalChallenges;