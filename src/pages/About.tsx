import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-4">About Me</h1>
              <p className="lead text-muted">
                Get to know more about my journey, skills, and passion for creating digital experiences.
              </p>
            </div>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col lg={6}>
            <Card className="h-100">
              <Card.Body className="p-4">
                <h3 className="h4 mb-3">My Story</h3>
                <p className="mb-3">
                  I'm a passionate developer with a love for creating beautiful, functional, 
                  and user-friendly digital experiences. My journey in web development began 
                  several years ago, and I've been constantly learning and evolving ever since.
                </p>
                <p className="mb-3">
                  I believe in the power of clean code, thoughtful design, and collaborative 
                  problem-solving. Every project I work on is an opportunity to learn something 
                  new and create something meaningful.
                </p>
                <p className="mb-0">
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or enjoying a good cup of coffee while planning my next project.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="h-100">
              <Card.Body className="p-4">
                <h3 className="h4 mb-3">Skills & Technologies</h3>
                <div className="mb-4">
                  <h5>Frontend</h5>
                  <p className="text-muted">
                    React, TypeScript, JavaScript, HTML5, CSS3, SCSS, Bootstrap, Tailwind CSS
                  </p>
                </div>
                <div className="mb-4">
                  <h5>Backend</h5>
                  <p className="text-muted">
                    Node.js, Express, Python, REST APIs, GraphQL
                  </p>
                </div>
                <div className="mb-4">
                  <h5>Database & Tools</h5>
                  <p className="text-muted">
                    MongoDB, PostgreSQL, Git, Docker, AWS, Vercel
                  </p>
                </div>
                <div>
                  <h5>Design</h5>
                  <p className="text-muted mb-0">
                    Figma, Adobe Creative Suite, UI/UX Design, Responsive Design
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            <Card>
              <Card.Body className="p-4 text-center">
                <h3 className="h4 mb-3">Let's Work Together</h3>
                <p className="mb-0">
                  I'm always excited to take on new challenges and collaborate on interesting projects. 
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  I'd love to hear from you.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;