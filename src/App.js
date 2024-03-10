import './App.css';
import Home from './components/Home';
import Services from  './components/Services';
import WhyUs from './components/WhyUs';
import WhyUstwo from './components/Whyustwo';
import Feedback from './components/Feedback';
import BackgroundImage from './components/backgroundimage';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BackgroundImage/>
      <Home />
      <Services/>
      <WhyUs/>
      <WhyUstwo/>
      <Feedback/>
      <Footer />
    </div>
  );
}

export default App;
