import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/projects/ProjectDetail';
import FrequencyGroupApis from './pages/projects/FrequencyGroupApis';
import DrexelAlumniWeekend from './pages/projects/DrexelAlumniWeekend';
import ProjectLayout from './layouts/ProjectLayout';
import Footer from "./components/Footer.tsx";
import SPA from "./pages/SPA.tsx";


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
                        <Route path="/spa" element={<SPA />} />

                        {/* Project routes with nested layout */}
                        <Route path="/projects" element={<ProjectLayout />}>
                            <Route path="frequency-group-apis" element={<FrequencyGroupApis />} />
                            <Route path="drexel-alumni-weekend" element={<DrexelAlumniWeekend />} />
                        </Route>

                        {/* Legacy dynamic route (can be removed later) */}
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