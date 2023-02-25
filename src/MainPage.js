import './App.css';
import Banner from './components/Banner/Banner';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Strengths from './components/Strengths/Strengths';
import Brands from './components/Brands/Brands';
import Numbers from './components/Numbers/Numbers';

function MainPage() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Numbers />
            <Clients />
            <Services />
            <Strengths />
            <Brands />
            <Footer />
        </div>
    );
}

export default MainPage;
