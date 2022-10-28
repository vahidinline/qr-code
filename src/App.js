import {
  Col,
  Container,
  Row,
  Button,
  Stack,
  ButtonGroup,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

function App() {
  return (
    <Container>
      <Row>
        <div className="fs-5 text-justify">
          We now have common ENEMIES! While Ukrainian people are fighting
          against Putin, In Iran, people are fighting for freedom, against the
          dictators who are killing, raping and suppressing innocents meanwhile
          supporting Putin with war drones to attack Ukraine. In solidarity with
          the people of Ukraine and Iran, we are going to have a human chain
          from Vabaduse valjak to the Embassy of Russia in Tallinn. Permission
          for this event has been granted by Police. Feel free to take your
          banners, photos and flags with you.
        </div>
      </Row>
      <div className="d-grid gap-2">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => window.open('https://streamable.com/5xri27')}>
          {getUnicodeFlagIcon('EE')}
          Eesti keel
        </Button>
        <Button variant="secondary" size="lg">
          {getUnicodeFlagIcon('UA')}
          украї́нська мо́ва
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => window.open('https://streamable.com/7rubj3')}>
          >{getUnicodeFlagIcon('RU')}
          русский язык
        </Button>
      </div>
    </Container>
  );
}

export default App;
