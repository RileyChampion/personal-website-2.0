
import LandingPage from './views/LandingPage.tsx';
import {Container, Navbar} from 'react-bootstrap'
import logo from './resources/riley.svg'

function App() {
  return (
    <div className="App">
      <Navbar variant='dark'>
        <Container>
          <Navbar.Brand href="#landing">
            <img width="30" height="30" src={logo} alt="Riley Champion Logo"/>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <LandingPage/>
    </div>
  );
}

export default App;
