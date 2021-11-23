import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from "react-particles-js";
import About from './components/About';
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import Footer from './components/Footer';
import Contacts from './components/Contacts'

function App() {
  return (
    <>
    <Particles
    params={{
      particles: {
        number: {
          value:40,
          density: {
            enable: true, 
            value_area: 900,
          }
        },
        shape: {
          type:"circle",
          stroke: {
            width: 7,
            color: "#f7ab04"
          }
        }
      }
    }}

    />
    <Navbar/>
    <Header/>
    <About/>
    <Experience/>
    <Education/>
    <Contacts/>
    <Footer/>
    </>
  );
}

export default App;
