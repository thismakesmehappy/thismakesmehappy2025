import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-4">Get In Touch</h1>
              <p className="lead text-muted">
                Ready to start your next project? I'd love to hear from you. 
                Send me a message and let's discuss how we can work together.
              </p>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col lg={8} className="mx-auto">
            <Card>
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="What's this about?" required />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      placeholder="Tell me about your project..." 
                      required 
                    />
                  </Form.Group>
                  
                  <div className="d-grid">
                    <Button type="submit" variant="primary" size="lg">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={4} className="text-center mb-4">
            <Card className="h-100">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-envelope fs-2 text-primary"></i>
                </div>
                <h5>Email</h5>
                <p className="text-muted mb-0">hello@example.com</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="text-center mb-4">
            <Card className="h-100">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-linkedin fs-2 text-primary"></i>
                </div>
                <h5>LinkedIn</h5>
                <p className="text-muted mb-0">linkedin.com/in/yourprofile</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="text-center mb-4">
            <Card className="h-100">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-github fs-2 text-primary"></i>
                </div>
                <h5>GitHub</h5>
                <p className="text-muted mb-0">github.com/yourusername</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;