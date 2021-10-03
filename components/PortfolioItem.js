//* Dependencies
import { imgLoader } from '../utils/helpers';
import styles from '../styles/Portfolio.module.scss';

///* Next js imports
import Image from 'next/image';

//* Bootstrap and icon imports
import { Row, Col } from 'react-bootstrap';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FiLink } from '@react-icons/all-files/fi/FiLink';

export default function PortfolioItem(item) {
  const { name, credit, screenshot, description, deployedURL, githubURL } =
    item.item;
  return (
    <Row>
      <Col>
        <h2>{name}</h2>
        <p className='text-muted'>Developed by: {credit}</p>
        <p>{description}</p>
        <Image
          loader={imgLoader}
          src={screenshot}
          width={600}
          height={320}
          alt={`Screenshot of ${name} application`}
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
          <a href={githubURL} className='m-1' target='_blank' rel='noreferrer'>
            GitHub repository
          </a>
        </div>
      </Col>
      <hr className='mt-3' />
    </Row>
  );
}
