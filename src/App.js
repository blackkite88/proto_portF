import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <About />
      <Projects />
      <Contact />  
      <Footer />
    </div>
  );
}

export default App;
