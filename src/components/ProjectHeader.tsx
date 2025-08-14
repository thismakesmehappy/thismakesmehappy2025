import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ProjectHeaderProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  headerImage?: string;
  headerImageAlt?: string;
}

const ProjectHeader = ({ 
  title, 
  subtitle, 
  tags = [], 
  liveUrl, 
  githubUrl,
  headerImage,
  headerImageAlt
}: ProjectHeaderProps) => {
  return (
    <section className="project-header py-5" style={{ background: 'linear-gradient(135deg, rgba(1, 135, 93, 0.1) 0%, rgba(225, 24, 111, 0.1) 100%)' }}>
      <Container>
        <Row className="mb-4">
          <Col>
            <Link to="/portfolio">
              <Button variant="outline-primary" className="mb-3">
                ← Back to Portfolio
              </Button>
            </Link>
          </Col>
        </Row>
        
        <Row className="text-center">
          <Col lg={10} className="mx-auto">
            <h1 className="display-4 fw-bold mb-3">{title}</h1>
            {subtitle && (
              <p className="lead text-muted mb-4">{subtitle}</p>
            )}
            
            {tags.length > 0 && (
              <div className="mb-4">
                {tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="badge me-2 mb-2"
                    style={{ 
                      backgroundColor: 'var(--bs-primary)', 
                      color: 'white',
                      fontSize: '0.875rem',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {(liveUrl || githubUrl) && (
              <div className="d-flex justify-content-center gap-3 mb-4">
                {liveUrl && (
                  <Button 
                    href={liveUrl} 
                    target="_blank" 
                    variant="primary" 
                    size="lg"
                    className="shadow-soft"
                  >
                    View Live Project
                  </Button>
                )}
                {githubUrl && (
                  <Button 
                    href={githubUrl} 
                    target="_blank" 
                    variant="outline-primary" 
                    size="lg"
                  >
                    <i className="bi bi-github me-2"></i>
                    View Code
                  </Button>
                )}
              </div>
            )}
          </Col>
        </Row>

        {/* Header Image */}
        {headerImage && (
          <Row className="mt-5">
            <Col lg={10} className="mx-auto">
              <div className="project-hero-image">
                <img 
                  src={headerImage} 
                  alt={headerImageAlt || `${title} preview`}
                  className="img-fluid rounded shadow-soft"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default ProjectHeader;