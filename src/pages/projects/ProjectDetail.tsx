import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  challenges: string[];
  learnings: string[];
}

const projects: Record<string, Project> = {
  'project-1': {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB.',
    longDescription: 'This comprehensive e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The platform includes user authentication, product catalog management, shopping cart functionality, secure payment processing, and an admin dashboard for inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Bootstrap', 'JWT', 'Bcrypt'],
    image: 'https://via.placeholder.com/800x400/6366f1/ffffff?text=E-Commerce+Platform',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    challenges: [
      'Implementing secure payment processing with Stripe integration',
      'Designing a scalable database schema for products and orders',
      'Creating a responsive design that works across all devices',
      'Optimizing performance for large product catalogs'
    ],
    learnings: [
      'Advanced React patterns including context API and custom hooks',
      'MongoDB aggregation pipelines for complex queries',
      'RESTful API design and authentication strategies',
      'Payment processing and security best practices'
    ]
  },
  'project-2': {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    longDescription: 'A comprehensive task management solution designed for teams to collaborate effectively. Features include real-time updates using WebSockets, drag-and-drop task organization, project timelines, and team member assignment capabilities.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'PostgreSQL', 'Redux Toolkit'],
    image: 'https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Task+Management+App',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/taskapp',
    challenges: [
      'Implementing real-time synchronization across multiple clients',
      'Creating an intuitive drag-and-drop interface',
      'Managing complex state with TypeScript',
      'Designing efficient database relationships'
    ],
    learnings: [
      'WebSocket implementation and real-time data synchronization',
      'Advanced TypeScript patterns and type safety',
      'PostgreSQL optimization and query performance',
      'State management with Redux Toolkit'
    ]
  },
  'project-3': {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with interactive charts and maps.',
    longDescription: 'An interactive weather dashboard that provides comprehensive weather information for multiple locations. Features include current conditions, 7-day forecasts, interactive weather maps, and detailed charts for temperature, humidity, and precipitation data.',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'SCSS', 'Leaflet'],
    image: 'https://via.placeholder.com/800x400/10b981/ffffff?text=Weather+Dashboard',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/weather',
    challenges: [
      'Integrating multiple weather APIs for comprehensive data',
      'Creating responsive and interactive data visualizations',
      'Implementing geolocation and map functionality',
      'Optimizing API calls and caching strategies'
    ],
    learnings: [
      'Data visualization with Chart.js and D3.js',
      'Working with geolocation and mapping libraries',
      'API integration and error handling strategies',
      'Performance optimization for data-heavy applications'
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projects[projectId] : null;

  if (!project) {
    return (
      <Container className="py-5">
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h1>Project Not Found</h1>
            <p className="text-muted">The project you're looking for doesn't exist.</p>
            <Link to="/portfolio">
              <Button variant="primary">
                Back to Portfolio
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div className="py-5">
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
        
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 fw-bold mb-3">{project.title}</h1>
            <p className="lead text-muted mb-4">{project.description}</p>
            <div className="d-flex justify-content-center gap-3 mb-4">
              {project.liveUrl && (
                <Button href={project.liveUrl} target="_blank" variant="primary" size="lg">
                  View Live Site
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} target="_blank" variant="outline-primary" size="lg">
                  View Code
                </Button>
              )}
            </div>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <Card>
              <Card.Img 
                variant="top" 
                src={project.image} 
                alt={project.title}
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </Card>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card>
              <Card.Body className="p-4">
                <h3 className="h4 mb-3">About This Project</h3>
                <p className="mb-4">{project.longDescription}</p>
                
                <div className="mb-4">
                  <h5>Technologies Used</h5>
                  <div>
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        bg="primary" 
                        className="me-2 mb-2"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row>
          <Col lg={6} className="mb-4">
            <Card className="h-100">
              <Card.Body className="p-4">
                <h4 className="h5 mb-3">Challenges</h4>
                <ul className="list-unstyled">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-check-circle text-primary me-2"></i>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card className="h-100">
              <Card.Body className="p-4">
                <h4 className="h5 mb-3">Key Learnings</h4>
                <ul className="list-unstyled">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-lightbulb text-primary me-2"></i>
                      {learning}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDetail;