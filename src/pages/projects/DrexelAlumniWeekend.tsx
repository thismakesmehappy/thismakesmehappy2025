import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import ProjectHeader from '../../components/ProjectHeader';

const DrexelAlumniWeekend = () => {
  // Project metadata
  const projectData = {
    title: "Drexel Alumni Weekend",
    subtitle: "Event management platform connecting thousands of Drexel alumni worldwide",
    tags: [
      'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 
      'Event Management', 'Payment Processing', 'Email Automation'
    ],
    liveUrl: "https://alumni.drexel.edu/weekend",
    githubUrl: "https://github.com/yourusername/drexel-alumni-weekend",
    headerImage: "https://via.placeholder.com/1200x600/E1186F/ffffff?text=Drexel+Alumni+Weekend",
    headerImageAlt: "Drexel Alumni Weekend Platform"
  };

  return (
    <div className="drexel-alumni-weekend-page">
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
                  The Drexel Alumni Weekend platform is a comprehensive event management system 
                  designed to connect thousands of Drexel University alumni for their annual 
                  reunion weekend. The platform handles event registration, payment processing, 
                  accommodation booking, and social networking features.
                </p>
                <p className="mb-4">
                  Built with a focus on user experience and scalability, the system accommodates 
                  peak traffic during registration periods while providing alumni with an intuitive 
                  interface to reconnect with classmates and university community.
                </p>
                <Alert variant="success" className="mb-0">
                  <strong>Impact:</strong> Successfully managed 5,000+ alumni registrations and 
                  processed $2.3M in event revenue with 99.8% payment success rate.
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
                <h3 className="h4 mb-3">Technical Architecture</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Frontend:</strong> React with TypeScript
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Backend:</strong> Node.js with Express
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Database:</strong> PostgreSQL with Redis caching
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Payments:</strong> Stripe integration
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Email:</strong> SendGrid for automated communications
                  </li>
                  <li className="mb-0">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Hosting:</strong> AWS with CloudFront CDN
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6} className="mb-4">
            <Card className="shadow-soft h-100">
              <Card.Body className="p-4">
                <h3 className="h4 mb-3">Platform Features</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-calendar-event text-primary me-2"></i>
                    Multi-event registration system
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-credit-card text-success me-2"></i>
                    Secure payment processing
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-people text-info me-2"></i>
                    Alumni directory and networking
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-building text-warning me-2"></i>
                    Hotel booking integration
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-envelope text-secondary me-2"></i>
                    Automated email campaigns
                  </li>
                  <li className="mb-0">
                    <i className="bi bi-phone text-dark me-2"></i>
                    Mobile-responsive design
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Event Statistics */}
        <Row className="mb-5">
          <Col lg={12}>
            <Card className="shadow-soft">
              <Card.Body className="p-4">
                <h3 className="h4 mb-4 text-center">2024 Event Statistics</h3>
                <Row>
                  <Col md={3} className="text-center mb-3">
                    <div className="metric-box">
                      <h4 className="display-6 fw-bold text-primary mb-0">5,247</h4>
                      <p className="text-muted mb-0">Alumni Registered</p>
                    </div>
                  </Col>
                  <Col md={3} className="text-center mb-3">
                    <div className="metric-box">
                      <h4 className="display-6 fw-bold text-success mb-0">$2.3M</h4>
                      <p className="text-muted mb-0">Revenue Processed</p>
                    </div>
                  </Col>
                  <Col md={3} className="text-center mb-3">
                    <div className="metric-box">
                      <h4 className="display-6 fw-bold text-info mb-0">99.8%</h4>
                      <p className="text-muted mb-0">Payment Success Rate</p>
                    </div>
                  </Col>
                  <Col md={3} className="text-center mb-3">
                    <div className="metric-box">
                      <h4 className="display-6 fw-bold text-warning mb-0">47</h4>
                      <p className="text-muted mb-0">Class Years Represented</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* User Journey */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <Card className="shadow-soft">
              <Card.Body className="p-4">
                <h3 className="h4 mb-4">User Experience Journey</h3>
                <Row>
                  <Col md={4} className="text-center mb-4">
                    <div className="journey-step">
                      <div className="step-icon mb-3">
                        <i className="bi bi-person-plus display-6 text-primary"></i>
                      </div>
                      <h5>Registration</h5>
                      <p className="text-muted">
                        Alumni register with their graduation year and connect 
                        with their alumni network
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="text-center mb-4">
                    <div className="journey-step">
                      <div className="step-icon mb-3">
                        <i className="bi bi-calendar-check display-6 text-success"></i>
                      </div>
                      <h5>Event Selection</h5>
                      <p className="text-muted">
                        Browse and select from multiple events, dinners, 
                        and activities throughout the weekend
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="text-center mb-4">
                    <div className="journey-step">
                      <div className="step-icon mb-3">
                        <i className="bi bi-credit-card display-6 text-info"></i>
                      </div>
                      <h5>Secure Checkout</h5>
                      <p className="text-muted">
                        Complete payment securely with multiple payment 
                        options and receive instant confirmation
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Challenges & Solutions */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4">
            <Card className="shadow-soft h-100">
              <Card.Body className="p-4">
                <h3 className="h4 mb-3">Key Challenges</h3>
                <div className="mb-3">
                  <h5>High-Traffic Registration</h5>
                  <p className="text-muted mb-3">
                    Managing thousands of simultaneous registrations during the 
                    early-bird period without system overload.
                  </p>
                </div>
                <div className="mb-3">
                  <h5>Complex Event Logic</h5>
                  <p className="text-muted mb-3">
                    Handling various ticket types, discounts, group registrations, 
                    and capacity limits across multiple events.
                  </p>
                </div>
                <div className="mb-0">
                  <h5>Payment Processing</h5>
                  <p className="text-muted mb-0">
                    Ensuring secure, reliable payment processing with support 
                    for multiple payment methods and refund handling.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6} className="mb-4">
            <Card className="shadow-soft h-100">
              <Card.Body className="p-4">
                <h3 className="h4 mb-3">Solutions Delivered</h3>
                <div className="mb-3">
                  <h5>Load Balancing & Caching</h5>
                  <p className="text-muted mb-3">
                    Implemented Redis caching and AWS load balancing to handle 
                    traffic spikes during peak registration periods.
                  </p>
                </div>
                <div className="mb-3">
                  <h5>Event Management System</h5>
                  <p className="text-muted mb-3">
                    Built flexible event configuration system allowing easy 
                    updates to pricing, capacity, and availability rules.
                  </p>
                </div>
                <div className="mb-0">
                  <h5>Stripe Integration</h5>
                  <p className="text-muted mb-0">
                    Integrated Stripe for secure payment processing with 
                    comprehensive error handling and fraud protection.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DrexelAlumniWeekend;