import JobPost from "../../../components/job-post/JobPost"
import { mockProposals } from "../../../components/util/challengesMock"
import "./globaljobs.scss"

function GlobalJobs() {
  return (
    <section className="global-jobs">
        {mockProposals.map((challenge) => (
            <JobPost key={challenge.id} {...challenge} />
        ))}
    </section>
  )
}

export default GlobalJobs