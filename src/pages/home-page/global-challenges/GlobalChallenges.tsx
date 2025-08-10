import { Outlet } from "react-router-dom";

import "./globalchallenges.scss";

function GlobalChallenges() {

  return (
    <section className="global-challenges">
        global challenges
      <Outlet />
    </section>
  );
}

export default GlobalChallenges;