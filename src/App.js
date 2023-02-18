import './App.css';
import Banner from './components/Banner/Banner';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Strengths from './components/Strengths/Strengths';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Clients />
      {/* <Services /> */}
      {/* <Strengths /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
