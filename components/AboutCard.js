import { Card, ListGroup } from 'react-bootstrap';

export default function AboutCard() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          Jon is a full-stack web developer specializing in the MERN stack. He
          enjoys building applications, riding motorcycles, and{' '}
          <a
            href='https://fourthrailband.com/'
            target='_blank'
            rel='noreferrer'
          >
            playing music with the band
          </a>
          .
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
