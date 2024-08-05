
import LandingPage from './views/LandingPage.tsx';
import AboutMe from './views/AboutMe.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import ContactModal from './components/ContactModal/ContactModal.tsx';
import React, {useState} from 'react';


function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (state) => {
    setShowModal(state);
  }

  return (
    <div className='App'>
      <Navbar toggleModal={toggleModal} />
      <LandingPage/>
      <AboutMe />
      {showModal ? <ContactModal toggleModal={toggleModal} /> : <></> } 
    </div>
  );
}

export default App;
