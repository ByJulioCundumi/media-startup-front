import "./globalpromoterposts.scss"
import { mockProposals } from '../../../util/challengesMock'
import PromoterPost from '../../../components/promoter-post/PromoterPost'

function GlobalPromoterPosts() {
  return (
    <section className="global-promoter-posts">
        {mockProposals.map((challenge) => (
            <PromoterPost key={challenge.id} {...challenge} />
        ))}
    </section>
  )
}

export default GlobalPromoterPosts