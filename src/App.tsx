import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import FrequencyGroupApis from './pages/projects/FrequencyGroupApis';
import DrexelAlumniWeekend from './pages/projects/DrexelAlumniWeekend';
import ProjectLayout from './layouts/ProjectLayout';
import Footer from "./components/layout/Footer.tsx";
import {ProjectProvider} from "./context/ProjectContext.tsx";
import ProjectIndex from "./pages/projects/ProjectIndex.tsx";


function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        {/* Project routes with nested layout */}
                        <Route path="/projects" element={<ProjectProvider><ProjectLayout /></ProjectProvider>}>
                            <Route index={true} element={<ProjectIndex />} />
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
