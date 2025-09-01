import {Col, Row} from 'react-bootstrap';
import ProjectContainer from 'src/components/helpers/ProjectContainer.tsx';

const ReflectionAW = () => {
    return (
        <ProjectContainer backgroundColor={"yellow-faded"} className={"callout-section alumni"}>
            <h2>Reflection: Creative Leadership Meets Business Goals</h2>
            <p>
                This project demonstrates how I combine <strong>creative direction, systems thinking, and visual craft</strong> to deliver institutional and team impact:
            </p>
            <Row lg={4} sm={2} xs={1} className="text-center mb-4 row-gap-4">
                <Col>
                    <i className="bi bi-bullseye"></i>
                    Align creative systems with institutional goals
                </Col>
                <Col>
                    <i className="bi bi-person-heart"></i>
                    Empower individuals, partners and teams through collaboration
                </Col>
                <Col>
                    <i className="bi bi-gear"></i>
                    Apply systematic thinking to improve quality and build organizational capacity
                </Col>
                <Col>
                    <i className="bi bi-tree"></i>
                    Foster continuous growth for individuals, teams, and the institution
                </Col>
            </Row>
            <p>
                Alumni Weekend reflects my leadership approach: shaping strategy and creative, elevating people and teams, 
                and building scalable systems that deliver impact with clarity and efficiency.
            </p>
        </ProjectContainer>
    );
};

export default ReflectionAW;
