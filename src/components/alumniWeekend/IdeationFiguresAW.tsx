import {Col, Figure, FigureCaption, Image, Row} from 'react-bootstrap';
import ProjectContainer from 'src/components/helpers/ProjectContainer';
import {asset} from "src/helpers/assetPath.ts";

const IdeationFiguresAW = () => {
    return (
        <Figure>
            <FigureCaption>Artifacts from the digital ideation session</FigureCaption>
            <Row className={"row-gap-4"}>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                        <Image
                            src={asset("aw/aw_ideation_1.png")}
                            fluid={true}
                            alt={"Ideation board with post-its and the prompt: Alumni Weekend 2022 Will Be Awesome Because..."}
                        />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                        <Image
                            src={asset("aw/aw_ideation_2.png")}
                            fluid={true}
                            alt={"Ideation board with post-its and the prompt: Alumni Journey"}
                        />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                        <Image
                            src={asset("aw/aw_ideation_3.png")}
                            fluid={true}
                            alt={"Ideation board with post-its and the prompt: Big Idea Time!"}
                        />
                    </ProjectContainer>
                </Col>
            </Row>
        </Figure>
    );
};

export default IdeationFiguresAW;
