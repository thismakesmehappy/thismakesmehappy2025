import {Col, Row} from "react-bootstrap";
import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";

export const BusinessImpactHighlights = () => {
    return (
        <ProjectContainer backgroundColor="purple-faded" expand={true} className={"mb-4 callout-section"}>
            <h4>Business Impact Highlights</h4>
            <p>The API extended access to Frequency Groups, availing the following Frequency Groups benefits to advertisers:</p>
            <Row md={3} xs={1} className="text-center">
                <Col><i className="bi bi-graph-up-arrow"></i>6% lift in unique reach</Col>
                <Col><i
                    className="bi bi-intersect"></i>34% reduction in overlap for one CPG advertiser
                </Col>
                <Col><i
                    className="bi bi-diagram-3"></i>300+ campaigns successfully managed through frequency groups
                </Col>
            </Row>
        </ProjectContainer>
    );
};