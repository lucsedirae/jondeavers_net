//* Dependencies
import { useState } from 'react';
import Link from 'next/link';
import { formatDate } from '../../utils/helpers';
import { blogPost } from '../../styles/Blog.module.scss';

//* Custom components
import Layout from '../../components/Layout';
// import Pagination from '../../components/Pagination';

//* Icon imports
import { BiArrowBack } from '@react-icons/all-files/bi/BiArrowBack';
export default function Post(data) {
  const post = data.post;
  const posts = data.posts;
  const { title, date, author, content, featuredImage, id } = post;

  return (
    <Layout>
      {/* <Pagination posts={posts} id={post.id} /> */}
      <h1 className='p-1 text-center'>{title}</h1>
      <div className='text-muted p-1 text-center'>
        Published on: {formatDate(date)}
      </div>
      <div className='text-muted p-1 text-center'>
        Author: {author.node.name}
      </div>
      <div className={blogPost}>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div style={{textAlign: "center"}}>
        <Link href='/blog'>
          <a className='text-muted p-1'>
            {' '}
            <BiArrowBack className='m-1' />
            Back to all posts...
          </a>
        </Link>
      </div>
    </Layout>
  );
}
export async function getStaticProps(context) {
  const postRes = await fetch(`https://wp.jondeavers.net/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query SinglePost($id: ID!, $idType: PostIdType!) {
          post(id: $id, idType: $idType) {
            title
            slug
            id
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

  const postJson = await postRes.json();

  const postsRes = await fetch(`https://wp.jondeavers.net/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query MyQuery {
        posts {
          nodes {
            slug
            id
            content
            title
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
      variables: {
        id: context.params.slug,
        idType: 'SLUG',
      },
    }),
  });

  const postsJson = await postsRes.json();

  return {
    props: {
      post: postJson.data.post,
      posts: postsJson.data.posts,
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
