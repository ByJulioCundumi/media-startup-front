import DinamicPost from "../../../components/dinamic-post/DinamicPost"
import { postsMock } from "../../../util/postsMock"
import "./membersposts.scss"

function MembersPosts() {
  return (
    <section className="members-posts">
      {postsMock.map((post) => (
          <DinamicPost key={post.id} {...post} />
      ))}
    </section>
  )
}

export default MembersPosts