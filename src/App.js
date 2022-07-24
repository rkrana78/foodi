
import './App.css';
import About from './components/About/About';
import Chef from './components/Chef/Chef';
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
      <Chef/>
    </div>
  );
}

export default App;
