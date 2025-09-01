import {Col, Row} from "react-bootstrap";
import SystemWrapper from "src/components/alumniWeekend/SystemWrapper.tsx";

const CreativeSystemAW = () => {
    return (
        <>
            <h2>Creative System</h2>

            <p>We built <strong>“Live and In Person”</strong> drawing from vintage sticker graphics to evoke nostalgia and excitement. The theme acknowledged missing our alumni while building anticipation for being together again.
            </p>
            <ul className={"d-md-none"}>
                <li><strong>Messaging:</strong> bold, nostalgic language to spark excitement</li>
                <li>
                    <strong>Visuals:</strong> dynamic typography, holding shapes, and Drexel’s blue and gold palette
                </li>
                <li>
                    <strong>System:</strong> structured key art gave designers autonomy while maintaining consistency
                </li>
                <li>
                    <strong>Scope:</strong> 50+ digital, print, and environmental touchpoints
                </li>
            </ul>
            <div className="d-none d-md-block">
                <Row md={2} xs={2} className="callout-section alumni">
                    <Col>
                        <SystemWrapper>
                            <i
                                className="bi bi-megaphone"></i>
                        </SystemWrapper>
                        <p className={"mb-0"}><strong>Messaging</strong></p>
                        <p> Bold, nostalgic language to spark excitement</p>
                    </Col>
                    <Col>
                        <SystemWrapper>
                            <i
                                className="bi bi-eye"></i>
                        </SystemWrapper>
                        <p className={"mb-0"}><strong>Visuals</strong></p>
                        <p>Dynamic typography, holding shapes, and Drexel’s blue and gold palette </p>
                    </Col>
                    <Col>
                        <SystemWrapper>
                            <i
                                className="bi bi-diagram-2"></i>
                        </SystemWrapper>
                        <p className={"mb-0"}><strong>System</strong></p>
                        <p>Structured key art gave designers autonomy while maintaining consistency</p>
                    </Col>
                    <Col>
                        <SystemWrapper>
                            <i
                                className="bi bi-binoculars"></i>
                        </SystemWrapper>

                        <p className={"mb-0"}><strong>Scope</strong></p>
                        <p>50+ digital, print, and environmental touchpoints</p>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default CreativeSystemAW
