//* Dependencies
import Link from 'next/link';
import { formatDate } from '../utils/helpers';

//* Bootstrap and icon imports
import { Card, Container, Row, Col } from 'react-bootstrap';

//* Custom components
import Layout from '../components/Layout';

export default function Blog({ posts }) {
  console.log(posts);

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
            {posts.nodes.map((post) => {
              const { slug, title, date, author, content } = post;

              return (
                <Card key={slug} className='m-2'>
                  <Card.Body>
                    <Link href={`/posts/${slug}`}>
                      <a>
                        <Card.Title>{title}</Card.Title>
                      </a>
                    </Link>
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
                  </Card.Body>
                </Card>
              );
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
        posts {
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
