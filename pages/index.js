//* Dependencies
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import { formatDate } from '../utils/helpers';

//* Bootstrap component imports
import { Container, Row, Col, Card } from 'react-bootstrap';

//* Custom components
import CardArray from '../components/CardArray';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
export default function Home({ posts }) {
  const { title, slug, content, date, author } = posts.edges[0].node;

  return (
    <Layout>
      <Hero />
      <Container style={{ paddingTop: '1rem' }}>
        <CardArray />
        <Row>
          <Col>
            <Card className='mt-3'>
              <Card.Title className='p-1'>
                Most recent blog post:
                <Link href={`/posts/${slug}`}>
                  <a style={{ marginLeft: '.5rem' }}>{title}</a>
                </Link>
              </Card.Title>
              <Card.Subtitle className='text-muted p-1'>
                Published on: {formatDate(date)}
              </Card.Subtitle>
              <Card.Subtitle className='text-muted p-1'>
                Author: {author.node.name}
              </Card.Subtitle>
              <div
                className='p-2'
                dangerouslySetInnerHTML={{
                  __html: content.substring(0, 200).concat('...'),
                }}
              />
              <Link href={`/posts/${slug}`}>
                <a>
                  <Card.Text className='text-muted p-1'>
                    Continue reading...
                  </Card.Text>
                </a>
              </Link>
            </Card>
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
        posts(first: 1) {
          edges {
            node {
              id
              title
              slug
              content
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
