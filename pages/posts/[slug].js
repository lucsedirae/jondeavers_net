//* Dependencies
import Link from 'next/link';
import { formatDate } from '../../utils/helpers';
import {blogPost} from "../../styles/Blog.module.scss"

//* Custom components
import Layout from '../../components/Layout';

//* Icon imports
import { BiArrowBack } from '@react-icons/all-files/bi/BiArrowBack';
export default function Post(data) {
  const post = data.post;
  const { title, date, author, content, featuredImage } = post;

  return (
    <Layout>
      <h1 className='p-1'>{title}</h1>
      <div className='text-muted p-1'>Published on: {formatDate(date)}</div>
      <div className='text-muted p-1'>Author: {author.node.name}</div>
      <div className={blogPost} >
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <Link href='/blog'>
        <a className='text-muted p-1'>
          {' '}
          <BiArrowBack className='m-1' />
          Back to all posts...
        </a>
      </Link>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://wp.jondeavers.net/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query SinglePost($id: ID!, $idType: PostIdType!) {
          post(id: $id, idType: $idType) {
            title
            slug
            content
            featuredImage { 
              node {
                sourceUrl
              }
            }
            date
            author {
              node {
                id
                name
              }
            }
          }
        }
      `,
      variables: {
        id: context.params.slug,
        idType: 'SLUG',
      },
    }),
  });

  const json = await res.json();

  return {
    props: {
      post: json.data.post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://wp.jondeavers.net/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query AllPostsQuery {
          posts {
            nodes {
              slug
              content
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
              date
              author {
                node {
                  id
                  name
                }
              }  
            }
          }
        }
      `,
    }),
  });

  const json = await res.json();
  const posts = json.data.posts.nodes;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
