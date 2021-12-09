import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Project';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        
        <Route path="/about-me" element= {<About/>}/>
        <Route path="project" element={<Project/>}/>
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/resume" element= {<Resume/>}/>
        <Route path="/home" element= {<Home/>}/>
        <Route path="/" element= {<Home/>}/>
       
      </Routes>
    
    </div>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
