import { Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import Image from './background.JPG';
function App() {
  return (
    <Container>
      <Row>
        <div className="fs-5 text-justify">
          <h1 className="text-center">We now have common ENEMIES! </h1>
          <h2 className="text-center">Join us</h2>
          <p>
            In solidarity with the people of Ukraine and Iran, we are going to
            have a human chain from Vabaduse valjak to the Embassy of Russia in
            Tallinn. Permission for this event has been granted by Police.
          </p>
        </div>
      </Row>
      <div className="d-grid gap-2">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => window.open('https://youtube.com/shorts/NVmNVjT334E')}>
          {getUnicodeFlagIcon('EE')}
          Eesti keel
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => window.open('https://youtube.com/shorts/3aM51RajNjs')}>
          {getUnicodeFlagIcon('UA')}
          украї́нська мо́ва
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => window.open('https://youtube.com/shorts/wvngvzLKHYY')}>
          {getUnicodeFlagIcon('RU')}
          русский язык
        </Button>
      </div>
      <hr />
      <div className="text-center">
        <p>
          <img src={Image} className="img-fluid" alt="a" />
        </p>
      </div>
    </Container>
  );
}

export default App;
