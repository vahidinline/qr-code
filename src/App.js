import { Container, Button, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import Image from './background.JPG';
import './App.css';
function App() {
  return (
    <Container className="bg">
      <div className="fs-5 text-justify ">
        <h1 className="text-center text">We now have common ENEMIES! </h1>
        <h2 className="text-center text">Join us</h2>
        <p className="text">
          In solidarity with the people of Ukraine and Iran, we are going to
          have a human chain from Vabaduse valjak to the Embassy of Russia in
          Tallinn. Permission for this event has been granted by Police.
        </p>
      </div>
      <div className="d-grid gap-2 mb-3">
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

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            📃 Association’s Statement on October 29 #FreedomHumanChain
          </Accordion.Header>
          <Accordion.Body>
            For decades, Iranians have been fighting a vicious, deceitful, and
            murderous regime. These past few weeks, since the horrifying murder
            of Mahsa Amini this fight has transformed and has come to be
            understood as a revolution. The message Iranians living abroad hear
            from inside Iran is one of unity, solidarity, and resistance. It is
            our duty to echo the voices we hear from inside Iran, and give that
            message to the world so they know how Ali Khamenei and the Islamic
            regime, are going beyond the boundaries of barbarism and brutality
            and holding Iran and its people hostage. On Saturday, October 29, in
            a human chain that goes from the East to the West, and all across
            the world, we will stand together to be the voices of the people in
            Iran. Our demands from Western governments remain the same on
            October 29: 1- Stop any and all negotiations with the Islamic
            Republic and acknowledge the legitimacy of the ongoing Iranian
            revolution. 2- Expel all ambassadors and other representatives of
            the Islamic regime in the international institutions in your
            countries. 3- Do with Islamic regime oligarchs, as you did with
            Putin’s oligarchs. 4- Provide free, safe, and secure access to the
            internet for all civilians in Iran. This Iranian revolution
            continues to live through hope. It is not by reliance on Western
            governments and their decisions, but by relying on their own harsh
            lived experiences in the past four decades, and by relying on the
            extraordinary courage and determination of the young generation and
            women, that Iranians hope to shape their destiny and build a future
            that brings freedom and justice to Iran.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

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
