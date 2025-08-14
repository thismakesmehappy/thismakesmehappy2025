import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import FrequencyGroupApis from './pages/projects/FrequencyGroupApis';
import DrexelAlumniWeekend from './pages/projects/DrexelAlumniWeekend';
import ProjectLayout from './layouts/ProjectLayout';
import Footer from "./components/Footer.tsx";


function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        {/* Project routes with nested layout */}
                        <Route path="/projects" element={<ProjectLayout />}>
                            <Route path="frequency-group-apis" element={<FrequencyGroupApis />} />
                            <Route path="drexel-alumni-weekend" element={<DrexelAlumniWeekend />} />
                        </Route>

                        {/* Legacy dynamic route (can be removed later) */}
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