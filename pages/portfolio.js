import { useState } from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';

export default function Portfolio() {
  const [state, setState] = useState([
    {
      title: 'Sample item',
      description: 'This is a sample item for my portfolio page',
      background: 'This is a sample background info for my portfolio page',
    },
  ]);

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center'>Portfolio</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>{state[0].title}</h2>
            <p>{state[0].description}</p>
            <p>{state[0].background}</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
