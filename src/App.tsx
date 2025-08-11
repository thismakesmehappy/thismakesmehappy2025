import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/projects/ProjectDetail';
import {Footer} from "./components/Footer.tsx";


function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/work" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
                    </Routes>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    );
}

export default App;