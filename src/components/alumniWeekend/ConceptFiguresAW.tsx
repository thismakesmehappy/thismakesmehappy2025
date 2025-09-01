import {Col, Figure, FigureCaption, Image, Row} from 'react-bootstrap';
import ProjectContainer from 'src/components/helpers/ProjectContainer.tsx';
import {asset} from "src/helpers/assetPath.ts";

const ConceptFiguresAW = () => {
    return (
        <Figure>
            <FigureCaption>Mood boards, initial explorations, and pages from the concept presentation</FigureCaption>
            <Row md={2} className={"row-gap-4"}>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                        <Image 
                            src={asset("aw/aw_moodboard_glitch.png")} 
                            className={"img-fluid"}
                            alt={"Mood board for the Glitch concept"} 
                        />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                      borderColor={"yellow"} borderWidth={1}>
                        <Image 
                            src={asset("aw/aw_exploration_glitch.png")} 
                            className={"img-fluid"}
                            alt={"Visual explorations for the Glitch concept"} 
                        />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                      borderColor={"yellow"} borderWidth={1}>
                        <Image 
                            src={asset("aw/aw_moodboard_bbbb.png")} 
                            className={"img-fluid"}
                            alt={"Mood board for the Live and in Person concept"} 
                        />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                      borderColor={"yellow"} borderWidth={1}>
                        <Image 
                            src={asset("aw/aw_exploration_bbbb.png")} 
                            className={"img-fluid"}
                            alt={"Visual explorations for the Live and in Person concept"} 
                        />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                      borderColor={"yellow"} borderWidth={1}>
                        <Image 
                            src={asset("aw/aw_deck_04.png")} 
                            className={"img-fluid"}
                            alt={"Page from a presentation deck highlighting marketing goals"} 
                        />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                      borderColor={"yellow"} borderWidth={1}>
                        <Image 
                            src={asset("aw/aw_deck_09.png")} 
                            className={"img-fluid"}
                            alt={"Page from a presentation deck highlighting key art for Glitch"} 
                        />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                      borderColor={"yellow"} borderWidth={1}>
                        <Image 
                            src={asset("aw/aw_deck_25.png")} 
                            className={"img-fluid"}
                            alt={"Page from a presentation deck highlighting key art for Live and in Person"} 
                        />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                      borderColor={"yellow"} borderWidth={1}>
                        <Image 
                            src={asset("aw/aw_deck_35.png")} 
                            className={"img-fluid"}
                            alt={"Page from a presentation deck highlighting a closing slide"} 
                        />
                    </ProjectContainer>
                </Col>
            </Row>
        </Figure>
    );
};

export default ConceptFiguresAW;
