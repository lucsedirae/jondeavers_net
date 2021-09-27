//* Dependencies
import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import styles from '../styles/Portfolio.module.scss';

//* Bootstrap imports
import { Container, Row, Col } from 'react-bootstrap';

//* Custom components
import Layout from '../components/Layout';
import PortfolioItem from '../components/PortfolioItem';
export default function Portfolio() {
  //* Local state
  const [state, setState] = useState([]);

  //* Fetches portfolio data on render
  useEffect(() => {
    setState(portfolioData);
    console.log(state);
  }, []);

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center'>Portfolio</h1>
          </Col>
        </Row>
        {state.map((item) => (
          <PortfolioItem item={item} key={item.id} />
        ))}
      </Container>
    </Layout>
  );
}
