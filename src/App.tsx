import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import FrequencyGroupApis from './pages/projects/FrequencyGroupApis';
import DrexelAlumniWeekend from './pages/projects/DrexelAlumniWeekend';
import ProjectLayout from './layouts/ProjectLayout';
import Footer from "./components/layout/Footer.tsx";
import {ProjectProvider} from "./context/ProjectContext.tsx";
import ProjectIndex from "./pages/projects/ProjectIndex.tsx";
import ScrollToTop from './components/helpers/ScrollToTop.tsx';

// Get the base path from Vite's base configuration
const basename = import.meta.env.BASE_URL;

function App() {
    return (
        <Router basename={basename}>
            <ScrollToTop />
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
