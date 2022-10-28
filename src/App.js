import {
  Col,
  Container,
  Row,
  Button,
  Stack,
  ButtonGroup,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <div className="fs-3 text-justify">
          We have formed this human chain to support human rights against
          dictatorships in Iran and Russia. If you believe in human rights,
          stand by us.
        </div>
      </Row>
      <div className="d-grid gap-2">
        <Button variant="success" size="lg">
          Eesti keel
        </Button>
        <Button variant="light" size="lg">
          украї́нська мо́ва
        </Button>
        <Button variant="danger" size="lg">
          русский язык
        </Button>
      </div>
    </Container>
  );
}

export default App;
