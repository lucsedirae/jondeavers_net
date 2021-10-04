import Link from 'next/link';
import { Card, ListGroup } from 'react-bootstrap';
import { Github, Twitter, Linkedin, Google } from 'react-bootstrap-icons';
export default function ContactCard() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>Contact Me</Card.Title>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            Email:{' '}
            <a href='mailto:jondeavers@gmail.com'>jondeavers@gmail.com</a>
          </ListGroup.Item>

          <ListGroup.Item>
            Social:{' '}
            <Link href='https://twitter.com/jondeavers'>
              <a target='_blank' rel='noreferrer'>
                <Twitter size={32} className='m-1' />
              </a>
            </Link>
            <Link href='https://github.com/lucsedirae'>
              <a target='_blank' rel='noreferrer'>
                <Github size={32} className='m-1' />
              </a>
            </Link>
            <Link href='https://www.linkedin.com/in/jondeavers/'>
              <a target='_blank' rel='noreferrer'>
                <Linkedin size={32} className='m-1' />
              </a>
            </Link>
          </ListGroup.Item>

          <ListGroup.Item>
            Résumé:{' '}
            <Link href='https://docs.google.com/document/d/10RZ6hOaAEO0nRfVOnx9snA7-AxzmbmZpJW4YY9MdFEI/edit?usp=sharing'>
              <a target='_blank' rel='noreferrer'>
                <Google size={32} className='m-1' />
              </a>
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
