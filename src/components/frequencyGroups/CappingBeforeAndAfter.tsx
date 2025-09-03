import {Col, Row} from 'react-bootstrap';
import ProjectContainer from 'src/components/helpers/ProjectContainer';

const CappingBeforeAndAfter = () => {
    function withFrequencyGroupCapping() {
        return <>
            <p>With Frequency Groups capping</p>
            <ul>
                <li>
                    The user sees the ads:{" "}
                    <span className={"impression c1"}>A</span>
                    <span className={"impression c1"}>A</span>
                    <span className={"impression c1"}>B</span>
                    <span className={"impression c1"}>B</span>
                    <span className={"impression c1"}>C</span>
                    <span className={"impression c2"}>D</span>
                    <span className={"impression c2"}>D</span>
                    <span className={"impression c2"}>D</span>
                    <span className={"impression c2"}>E</span>
                    <span className={"impression c2"}>E</span> (10 impressions total)
                </li>
                <li>
                    <strong>Frequency Group A</strong> blocks all ads even if they have impressions left
                </li>
                <li>
                    User won't see any ad until the next day
                </li>
            </ul>
        </>;
    }

    function withCampaignCapping() {
        return <>
            <p>With Campaign capping</p>
            <ul>
                <li>
                    The user sees the ads:{" "}
                    <span className={"impression c1"}>A</span>
                    <span className={"impression c1"}>A</span>
                    <span className={"impression c1"}>B</span>
                    <span className={"impression c1"}>B</span>
                    <span className={"impression c1"}>C</span>
                    <span className={"impression c1"}>C</span> (6 impressions total)
                </li>
                <li>
                    <strong>Campaign A</strong> blocks all ads under it, even if they have impressions left
                </li>
                <li>
                    User still sees ads under Campaign B
                </li>
            </ul>
        </>;
    }

    function withAdCapping() {
        return <>
            <p>With Ad capping only</p>
            <ul>
                <li>
                    The user sees the ads:{" "}
                    <span className={"impression c1"}>A</span>
                    <span className={"impression c1"}>A</span>
                    <span className={"impression c1"}>A</span>
                    <span className={"impression c1"}>A</span>
                    (4 impressions total)
                </li>
                <li>
                    <strong>Ad A</strong> is blocked for the day
                </li>
                <li>
                    All other ads are still visible
                </li>
            </ul>
        </>;
    }

    return (
        <ProjectContainer id="frequency-group-capping" borderColor={"purple-dark"} borderWidth={1}
                          className="mb-4 text-purple-dark">
            <div>
                <Row className={"dashed-below pb-3"}>
                    <Col xs={12}>
                        <p>
                            Each capping level aggregates impressions from the ads beneath it. For example, <em>Campaign A</em> has a daily cap of six exposures. Once ads <em>A</em>, <em>B</em>, or <em>C</em> (all under <em>Campaign A</em>) reach that total, the system blocks all ads in <em>Campaign A</em>.
                        </p>
                        <p>
                            At the next level, <em>Frequency Group A</em> has a daily cap of ten exposures. Any combination of impressions from <em>Campaign A</em> or <em>Campaign B</em> counts toward this cap. Once the total hits ten, all ads in both campaigns are blocked until the next day.
                        </p>
                    </Col>
                </Row>
                <Row className="dashed-below">
                    <Col
                        className="text-center cap-level fg "
                        md={5}>
                        <div
                            className="w-100 h-100 hide-small align-items-center justify-content-center d-flex flex-column">
                            <p>Frequency Group A</p>
                            <div className="fcap fg bg-purple-dark">
                                10x/day
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className="py-1 d-none d-md-block">
                        {withFrequencyGroupCapping()}
                    </Col>
                </Row>
                <Row className="dashed-below">
                    <Col
                        className="text-center cap-level fg align-items-center justify-content-center"
                        md={5}>
                        <div
                            className="w-100 h-100 hide-small align-items-center justify-content-center d-flex flex-column">
                            <Row className="cap-level  text-center w-100">
                                <Col className="text-center">
                                    <p>Campaign A</p>
                                    <div className="fcap camp c1">
                                        6x/day
                                    </div>
                                </Col>
                                <Col className="text-center">
                                    <p>Campaign B</p>
                                    <div className="fcap camp c2">
                                        6x/day
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={7} className="py-1 d-none d-md-block">
                        {withCampaignCapping()}
                    </Col>
                </Row>
                <Row>
                    <Col className="cap-level align-items-center justify-content-center d-flex" md={5}>
                        <Row className={"w-100"}>
                            <Col className="text-center">
                                <p>Ads A, B, C</p>
                                <div className="fcap ad c1">4x/day</div>
                                <div className="fcap ad c1">5x/day</div>
                                <div className="fcap ad c1">3x/day</div>
                            </Col>
                            <Col className="text-center">
                                <p>Ads D, E, F</p>
                                <div className="fcap ad c2">4x/day</div>
                                <div className="fcap ad c2">5x/day</div>
                                <div className="fcap ad c2">2x/day</div>
                            </Col>
                        </Row></Col>
                    <Col md={7} className="py-1 d-none d-md-block">
                        {withAdCapping()}
                    </Col>
                </Row>
                <Row className="d-md-none dashed-above">
                    <Col>
                        <div>{withFrequencyGroupCapping()}</div>
                        <div>{withCampaignCapping()}</div>
                        <div>{withAdCapping()}</div>

                    </Col>
                </Row>
            </div>


        </ProjectContainer>
    );
};

export default CappingBeforeAndAfter;