import ContactCard from './ContactCard';
import GitCard from './GitCard';
import AboutCard from './AboutCard';
import { Container, Row, Col } from 'react-bootstrap';
export default function CardArray() {
  return (
    <Container style={{ paddingTop: '1rem' }}>
      <Row>
        <Col style={{marginTop: "2rem"}}>
          <ContactCard />
        </Col>
        <Col style={{marginTop: "2rem"}}>
          <GitCard />
        </Col>
        <Col style={{marginTop: "2rem"}}>
          <AboutCard />
        </Col>
      </Row>
    </Container>
  );
}
