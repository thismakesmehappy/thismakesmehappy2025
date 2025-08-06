import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">
                Welcome to My <span>Portfolio</span>
              </h1>
              <p className="lead mb-4 text-muted">
                I'm a passionate developer creating amazing digital experiences. 
                Explore my work and discover what I can bring to your next project.
              </p>
              <div className="d-flex gap-3">
                <Link to="/portfolio">
                  <Button variant="primary" size="lg" className="shadow-soft">
                    View My Work
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline-primary" size="lg">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Work */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="h1 fw-bold">Featured Projects</h2>
              <p className="text-muted">A showcase of my best work</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Project One</Card.Title>
                  <Card.Text className="flex-grow-1">
                    A brief description of your first featured project. 
                    This could be your most impressive work.
                  </Card.Text>
                  <Link to="/portfolio/project-1">
                    <Button variant="primary" className="mt-auto">
                      Learn More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Project Two</Card.Title>
                  <Card.Text className="flex-grow-1">
                    A brief description of your second featured project. 
                    Highlight the key technologies or achievements.
                  </Card.Text>
                  <Link to="/portfolio/project-2">
                    <Button variant="primary" className="mt-auto">
                      Learn More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Project Three</Card.Title>
                  <Card.Text className="flex-grow-1">
                    A brief description of your third featured project. 
                    Showcase the impact and results achieved.
                  </Card.Text>
                  <Link to="/portfolio/project-3">
                    <Button variant="primary" className="mt-auto">
                      Learn More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;