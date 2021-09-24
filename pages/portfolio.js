//* Dependencies
import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { imgLoader } from '../utils/helpers';
import styles from '../styles/Portfolio.module.scss';

///* Next js imports
import Image from 'next/image';

//* Bootstrap and icon imports
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FiLink } from '@react-icons/all-files/fi/FiLink';

//* Custom components
import Layout from '../components/Layout';
export default function Portfolio() {
  const [state, setState] = useState([]);

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
        {state.map(
          ({
            id,
            name,
            credit,
            screenshot,
            description,
            deployedURL,
            githubURL,
          }) => (
            <Row key={id} className='p-2'>
              <Col>
                <h2>{name}</h2>
                <p className='disabled'>Developed by: {credit}</p>
                <p>{description}</p>
                <Image
                  loader={imgLoader}
                  src={screenshot}
                  width={600}
                  height={320}
                  />
                <div>
                  <FiLink className='m-1' />
                  <a
                    href={deployedURL}
                    className='m-1'
                    target='_blank'
                    rel='noreferrer'
                    >
                    Deployed project{' '}
                  </a>
                </div>
                <div>
                  <FaGithub className='m-1' />
                  <a
                    href={githubURL}
                    className='m-1'
                    target='_blank'
                    rel='noreferrer'
                    >
                    GitHub repository
                  </a>
                </div>
              </Col>
                    <hr className="mt-3"/>
            </Row>
          )
        )}
      </Container>
    </Layout>
  );
}
