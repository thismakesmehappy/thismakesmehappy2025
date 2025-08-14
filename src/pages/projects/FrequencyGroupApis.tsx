import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import ProjectHeader from '../../components/ProjectHeader';

const FrequencyGroupApis = () => {
  // Project metadata
  const projectData = {
    title: "Frequency Group APIs",
    subtitle: "Scalable API infrastructure for real-time frequency analysis and data processing",
    tags: [
      'Node.js', 'Express', 'MongoDB', 'Redis', 'WebSockets', 
      'API Design', 'Real-time Processing', 'Data Analytics'
    ],
    liveUrl: "https://api.frequencygroup.com",
    githubUrl: "https://github.com/yourusername/frequency-group-apis",
    headerImage: "https://via.placeholder.com/1200x600/01875D/ffffff?text=Frequency+Group+APIs",
    headerImageAlt: "Frequency Group APIs Dashboard"
  };

  return (
    <div className="frequency-group-apis-page">
      {/* Project Header */}
      <ProjectHeader {...projectData} />

      {/* Project Content */}
      <Container className="py-5">
        {/* Project Overview */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="shadow-soft">
              <Card.Body className="p-4">
                <h2 className="h3 mb-4">Project Overview</h2>
                <p className="mb-4">
                  The Frequency Group APIs project provides a comprehensive suite of RESTful APIs 
                  designed for real-time frequency analysis and data processing. Built to handle 
                  high-volume data streams with sub-second response times, the system serves as 
                  the backbone for multiple client applications requiring real-time insights.
                </p>
                <p className="mb-4">
                  The architecture emphasizes scalability, reliability, and performance, featuring 
                  Redis caching, MongoDB for persistent storage, and WebSocket connections for 
                  real-time data streaming to connected clients.
                </p>
                <Alert variant="info" className="mb-0">
                  <strong>Key Achievement:</strong> Reduced API response times by 75% and improved 
                  system throughput to handle 10,000+ concurrent requests.
                </Alert>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Technical Details */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4">
            <Card className="shadow-soft h-100">
              <Card.Body className="p-4">
                <h3 className="h4 mb-3">Technical Stack</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Backend:</strong> Node.js with Express framework
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Database:</strong> MongoDB with optimized indexing
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Caching:</strong> Redis for high-speed data retrieval
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Real-time:</strong> WebSocket connections via Socket.io
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Authentication:</strong> JWT with refresh token rotation
                  </li>
                  <li className="mb-0">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Deployment:</strong> Docker containers on AWS ECS
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6} className="mb-4">
            <Card className="shadow-soft h-100">
              <Card.Body className="p-4">
                <h3 className="h4 mb-3">Key Features</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-lightning text-warning me-2"></i>
                    Real-time frequency analysis processing
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-shield-check text-primary me-2"></i>
                    Secure API authentication & authorization
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-graph-up text-info me-2"></i>
                    Advanced data aggregation & analytics
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-speedometer2 text-success me-2"></i>
                    Sub-second response times with caching
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-arrows-fullscreen text-secondary me-2"></i>
                    Horizontal scaling capabilities
                  </li>
                  <li className="mb-0">
                    <i className="bi bi-file-earmark-text text-dark me-2"></i>
                    Comprehensive API documentation
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Performance Metrics */}
        <Row className="mb-5">
          <Col lg={12}>
            <Card className="shadow-soft">
              <Card.Body className="p-4">
                <h3 className="h4 mb-4 text-center">Performance Metrics</h3>
                <Row>
                  <Col md={3} className="text-center mb-3">
                    <div className="metric-box">
                      <h4 className="display-6 fw-bold text-primary mb-0">10K+</h4>
                      <p className="text-muted mb-0">Concurrent Requests</p>
                    </div>
                  </Col>
                  <Col md={3} className="text-center mb-3">
                    <div className="metric-box">
                      <h4 className="display-6 fw-bold text-success mb-0">&lt;200ms</h4>
                      <p className="text-muted mb-0">Average Response Time</p>
                    </div>
                  </Col>
                  <Col md={3} className="text-center mb-3">
                    <div className="metric-box">
                      <h4 className="display-6 fw-bold text-info mb-0">99.9%</h4>
                      <p className="text-muted mb-0">Uptime</p>
                    </div>
                  </Col>
                  <Col md={3} className="text-center mb-3">
                    <div className="metric-box">
                      <h4 className="display-6 fw-bold text-warning mb-0">50TB+</h4>
                      <p className="text-muted mb-0">Data Processed Monthly</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Add more sections as needed */}
      </Container>
    </div>
  );
};

export default FrequencyGroupApis;