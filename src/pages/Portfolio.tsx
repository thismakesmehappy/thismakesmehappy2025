import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      id: 'project-1',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Bootstrap'],
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=E-Commerce+Platform',
      featured: true
    },
    {
      id: 'project-2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'PostgreSQL'],
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Task+Management+App',
      featured: true
    },
    {
      id: 'project-3',
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current conditions and forecasts for multiple locations with interactive charts and maps.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'SCSS'],
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Weather+Dashboard',
      featured: true
    },
    {
      id: 'project-4',
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media metrics with data visualization and reporting capabilities.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Social+Analytics',
      featured: false
    },
    {
      id: 'project-5',
      title: 'Recipe Finder',
      description: 'A recipe discovery application with ingredient-based search, meal planning, and nutritional information.',
      technologies: ['React', 'Firebase', 'Spoonacular API', 'Material-UI'],
      image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=Recipe+Finder',
      featured: false
    },
    {
      id: 'project-6',
      title: 'Fitness Tracker',
      description: 'A mobile-responsive fitness tracking application with workout logging, progress visualization, and goal setting.',
      technologies: ['React Native', 'Expo', 'SQLite', 'Chart.js'],
      image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Fitness+Tracker',
      featured: false
    }
  ];

  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-4">My Portfolio</h1>
              <p className="lead text-muted">
                A collection of projects that showcase my skills and experience in web development. 
                Each project represents a unique challenge and learning opportunity.
              </p>
            </div>
          </Col>
        </Row>
        
        <div className="portfolio-grid">
          <Row>
            {projects.map((project) => (
              <Col lg={4} md={6} className="mb-4" key={project.id}>
                <Card className="h-100 portfolio-item">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-2">
                      {project.featured && (
                        <Badge bg="primary" className="mb-2">Featured</Badge>
                      )}
                    </div>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <div className="mb-3">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          bg="light" 
                          text="dark" 
                          className="me-1 mb-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Link to={`/portfolio/${project.id}`}>
                      <Button variant="primary" className="mt-auto">
                        View Details
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;