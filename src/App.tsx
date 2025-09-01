import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {lazy, Suspense, useState, useEffect} from 'react';
import Navigation from 'src/components/navigation/Navigation';
import Home from 'src/pages/Home';
import ProjectLayout from 'src/layouts/ProjectLayout';
import Footer from 'src/components/layout/Footer';
import ProjectProvider from 'src/context/ProjectContext';
import ScrollToTop from 'src/components/helpers/ScrollToTop';
import LoadingSkeleton from 'src/components/helpers/LoadingSkeleton';
import ProjectIndex from "src/pages/projects/ProjectIndex.tsx";


// Lazy load project pages for better performance
const FrequencyGroupApis = lazy(() => import('src/pages/projects/FrequencyGroupApis'));
const ColorScales = lazy(() => import('src/pages/projects/ColorScales'));
const DrexelAlumniWeekend = lazy(() => import('src/pages/projects/DrexelAlumniWeekend'));

// Get the base path from Vite's base configuration
const basename = import.meta.env.BASE_URL;

function App() {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Router basename={basename}>
            <ScrollToTop />
            <div className="App">
                <a href="#main-content" 
                   className="skip-link" 
                   tabIndex={isAtTop ? 0 : -1}>
                   Skip to main content
                </a>
                <Navigation />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />

                        {/* Project routes with nested layout */}
                        <Route path="/projects" element={<ProjectProvider><ProjectLayout /></ProjectProvider>}>
                            <Route index={true} element={<ProjectIndex />} />
                            <Route path="frequency-group-apis" element={
                                <Suspense fallback={<LoadingSkeleton type="project" />}>
                                    <FrequencyGroupApis />
                                </Suspense>
                            } />
                            <Route path="color-scales" element={
                                <Suspense fallback={<LoadingSkeleton type="project" />}>
                                    <ColorScales />
                                </Suspense>
                            } />
                            <Route path="drexel-alumni-weekend" element={
                                <Suspense fallback={<LoadingSkeleton type="project" />}>
                                    <DrexelAlumniWeekend />
                                </Suspense>
                            } />
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
