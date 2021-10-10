import Link from 'next/link';
import {
  pageActive,
  pageBox,
  pageContainer,
  pageSpacer,
} from '../styles/Blog.module.scss';
import { AiOutlineArrowLeft } from '@react-icons/all-files/ai/AiOutlineArrowLeft';
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight';
export default function Pagination(props) {
  const posts = props.posts.nodes;
  const currentId = props.id;

  let currentPost = {};
  posts.map((post) => (post.id === currentId ? (currentPost = post) : {}));

  const nextIndex =
    posts.indexOf(currentPost) === posts.length - 1
      ? 0
      : posts.indexOf(currentPost) + 1;

  const lastIndex =
    posts.indexOf(currentPost) === 0
      ? posts.length - 1
      : posts.indexOf(currentPost) - 1;

  return (
    <div className={pageContainer}>
      <div className={pageBox}>
        <Link href={posts[lastIndex].slug}>
          <a>
            <AiOutlineArrowLeft />
          </a>
        </Link>
      </div>
      <div className={pageBox}>
        <Link href={posts[nextIndex].slug}>
          <a>
            <AiOutlineArrowRight />
          </a>
        </Link>
      </div>
    </div>
  );
}
