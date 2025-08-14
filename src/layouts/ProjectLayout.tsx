import { Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

// This will be passed from individual project pages via Outlet context
export interface ProjectContextData {
  title: string;
  subtitle?: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  headerImage?: string;
  headerImageAlt?: string;
}

const ProjectLayout = () => {
  return (
    <div className="project-layout">
      {/* Project content will be rendered here via Outlet */}
      <Outlet />
      
      {/* Shared Project Footer */}
      <section className="project-footer py-4 border-top mt-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="d-flex align-items-center">
                <Link to="/portfolio" className="text-decoration-none me-4">
                  <i className="bi bi-arrow-left me-2"></i>
                  Back to Portfolio
                </Link>
                <Link to="/contact" className="text-decoration-none">
                  <i className="bi bi-envelope me-2"></i>
                  Get in Touch
                </Link>
              </div>
            </Col>
            <Col md={6} className="text-md-end mt-3 mt-md-0">
              <p className="text-muted mb-0 small">
                © 2025 Your Portfolio. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProjectLayout;