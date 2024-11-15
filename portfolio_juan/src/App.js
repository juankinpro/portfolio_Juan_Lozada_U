import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Screens/Home';
import { Services } from './Screens/Services';
import Aboutme from './Screens/Aboutme';
import { Skills } from './Screens/Skills';
import { Contact } from './Screens/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <Aboutme/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
