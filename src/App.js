
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import SpecialMenu from './components/SpecialMenu/SpecialMenu';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <SpecialMenu/>
    </div>
  );
}

export default App;
