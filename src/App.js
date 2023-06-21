// Import styles
import  './styles/main.css';
// Import components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/projects';
import Contacts from './components/pages/Contacts';
import ProjectPage from './components/pages/Project-page';
import ScrollToTop from './utils/scrolltoTop';

// import BrowserRouter for using routes in application
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* All application components must be placed between Router tags */}
      <Router>
        <ScrollToTop/>
        <Navbar/>
          <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/projects" element = {<Projects/>} />
            <Route path = "/project/:id" element = {<ProjectPage/>} />
            <Route path = "/contacts" element = {<Contacts/>} />
          </Routes>
        <Footer/>
    </Router>
    
    </div>
  );
}

export default App;
