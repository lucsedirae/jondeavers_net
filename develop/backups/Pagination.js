import Link from 'next/link';
import { pageActive, pageBox, pageContainer } from '../styles/Blog.module.scss';
export default function Pagination(props) {
  const posts = props.posts.nodes;
  const active = props.id;

  return (
    <>
      <div className={pageContainer}>
        {posts.map(({ slug, id }, i) =>
          active === id ? (
            <div className={`${pageActive} ${pageBox}`} key={i}>
              <Link href={`/posts/${slug}`}>
                <a>{i + 1}</a>
              </Link>
            </div>
          ) : (
            <div className={pageBox} key={i}>
              <Link href={`/posts/${slug}`}>
                <a>{i + 1}</a>
              </Link>
            </div>
          )
        )}
      </div>
    </>
  );
}
