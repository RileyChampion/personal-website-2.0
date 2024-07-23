
import LandingPage from './views/LandingPage.tsx';
import {Container, Navbar} from 'react-bootstrap'
import AboutMe from './views/AboutMe.tsx';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <AboutMe />
    </div>
  );
}

export default App;
