import {Col, Row} from "react-bootstrap";
import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";

const ReflectionScales = () => {
    return (
        <ProjectContainer backgroundColor={"aqua-faded"} className={"callout-section scales"}>
            <h2>Reflection: Cross-functional Product Design</h2>


            <p>This project synthesizes my hybrid strengths:</p>

            <Row lg={4} sm={2} xs={1} className="text-center mb-4 row-gap-4">
                <Col><i
                    className="bi bi-arrow-left-right"></i>Creative Problem-solving by reframing repetitive work into workflow automation
                </Col>
                <Col><i
                    className="bi bi-hand-thumbs-up"></i> Designed and engineered a complete tool independently
                </Col>
                <Col><i
                    className="bi bi-lightbulb"></i>390+ tests, CI/CD practices, modern React + TypeScript
                </Col>
                <Col><i
                    className="bi bi-file-earmark-text"></i>Smart AI collaboration, Figma integration, design systems expertise
                </Col>
            </Row>

            <strong>Color Scales</strong> transformed a manual bottleneck into a streamlined workflow enhancer. More importantly, it
                                          demonstrates how I bridge design and engineering to deliver <strong>products that scale both technically and experientially</strong>.
        </ProjectContainer>
    );
};

export default ReflectionScales
