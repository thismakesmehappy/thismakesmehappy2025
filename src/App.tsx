
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/projects/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>
        <footer className="bg-dark text-light py-4 mt-5">
          <div className="container text-center">
            <p className="mb-0">&copy; 2025 Bernardo Margulis.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;