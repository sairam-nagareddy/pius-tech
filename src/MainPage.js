import './App.css';
import Banner from './components/Banner/Banner';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// import Services from './components/Services/Services';
import Strengths from './components/Strengths/Strengths';
import Brands from './components/Brands/Brands';
import Numbers from './components/Numbers/Numbers';
import ServicesGrid from './components/Services/ServicesGrid';
// import Banner2 from './components/Banner/Banner2';

function MainPage() {
    return (
        <div className="App">
            <Navbar />
            {/* <Banner2 /> */}
            <Banner />
            <Numbers />
            <Clients />
            {/* <Services /> */}
            <ServicesGrid />
            <Strengths />
            <Brands />
            <Footer />
        </div>
    );
}

export default MainPage;
