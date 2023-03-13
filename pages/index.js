import { Fragment } from "react";
import Link from "next/link";
function HomePage() {
  return (
    <Fragment>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJS is really great</Link>
        </li>
        <li>
          <Link href="/news/something-else">Something else</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
