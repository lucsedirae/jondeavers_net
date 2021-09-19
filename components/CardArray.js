import ContactCard from './ContactCard';
import GitCard from './GitCard';
import { Container, Row, Col } from 'react-bootstrap';
export default function CardArray() {
  return (
    <Container style={{ paddingTop: '1rem' }}>
      <Row>
        <Col>
          <ContactCard />
        </Col>
        <Col>
          <GitCard />
        </Col>
      </Row>
    </Container>
  );
}
