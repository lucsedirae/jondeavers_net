//* Dependencies
import { useState, useEffect } from 'react';
import { pageBox, pageContainer, arrow } from '../styles/Blog.module.scss';

//* Bootstrap and icon imports
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

//* Custom components
import Layout from '../components/Layout';
import PostSummary from '../components/PostSummary';

export default function Blog({ posts }) {
  console.log("All posts", posts.nodes)
  const [currentIndex, setCurrentIndex] = useState(0);
  const postsPerPage = 5;
  //* Create an array of post batches
  const postBatch = posts.nodes.slice(
    currentIndex,
    currentIndex + postsPerPage
  );
  console.log(postBatch);

  const prevPosts = () => {
    setCurrentIndex(currentIndex - postsPerPage);
    console.log(currentIndex);
  };
  const nextPosts = () => {
    //If currentIndex + postsPerPage > posts.nodes.length
    setCurrentIndex(currentIndex + postsPerPage);
    console.log('Current index', currentIndex);
  };
  
  console.log('Total posts', posts.nodes.length);
  console.log('Current index', currentIndex);

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center'>Blog</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={pageContainer}>
              {currentIndex !== 0 ? (
                <div className={pageBox}>
                  {' '}
                  <ArrowLeft onClick={prevPosts} className={arrow} />
                </div>
              ) : (
                ''
              )}
              {postBatch.length === 0 ? (
                <h3 className='text-center'>End of list</h3>
              ) : (
                <div className={pageBox}>
                  <ArrowRight onClick={nextPosts} className={arrow} />
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {postBatch.map((post, i) => {
              return <PostSummary post={post} key={i} />;
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://wp.jondeavers.net/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query MyQuery {
        posts(first: 100) {
          nodes {
            slug
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
    }),
  });

  const json = await res.json();

  return {
    props: {
      posts: json.data.posts,
    },
  };
}
