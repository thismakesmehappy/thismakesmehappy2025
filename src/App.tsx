import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from 'src/components/navigation/Navigation';
import Home from 'src/pages/Home';
import FrequencyGroupApis from 'src/pages/projects/FrequencyGroupApis';
import ProjectLayout from 'src/layouts/ProjectLayout';
import Footer from 'src/components/layout/Footer.tsx';
import ProjectProvider from 'src/context/ProjectContext.tsx';
import ProjectIndex from 'src/pages/projects/ProjectIndex.tsx';
import ScrollToTop from 'src/components/helpers/ScrollToTop.tsx';
import ColorScales from 'src/pages/projects/ColorScales.tsx';
import DrexelAlumniWeekend from "src/pages/projects/DrexelAlumniWeekend.tsx";

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
                            <Route path="color-scales" element={<ColorScales />} />
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
