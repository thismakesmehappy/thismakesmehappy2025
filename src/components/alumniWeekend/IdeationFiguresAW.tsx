import {Col, Figure, FigureCaption, Image, Row} from 'react-bootstrap';
import ProjectContainer from 'src/components/helpers/ProjectContainer.tsx';
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
                            className={"img-fluid"}
                            alt={"Ideation board with post-its and the prompt: Alumni Weekend 2022 Will Be Awesome Because..."} 
                        />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                        <Image 
                            src={asset("aw/aw_ideation_2.png")} 
                            className={"img-fluid"}
                            alt={"Ideation board with post-its and the prompt: Alumni Journey"} 
                        />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                        <Image 
                            src={asset("aw/aw_ideation_3.png")} 
                            className={"img-fluid"}
                            alt={"Ideation board with post-its and the prompt: Big Idea Time!"} 
                        />
                    </ProjectContainer>
                </Col>
            </Row>
        </Figure>
    );
};

export default IdeationFiguresAW;
