
import LandingPage from './views/LandingPage.tsx';
import AboutMe from './views/AboutMe.tsx';
import Navbar from './components/Navbar/Navbar.tsx';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <LandingPage/>
      <AboutMe />
    </div>
  );
}

export default App;
