import {Col, Figure, FigureCaption, Image, Row} from "react-bootstrap";
import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";
import {asset} from "src/helpers/assetPath.ts";

const DiscoveryFiguresScales = () => {
    return (
        <Figure>
            <Row xs={1} md={2} className={"gy-4"}>
                <Col>
                    <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}
                                      borderColor={"aqua-dark"} borderWidth={1}>
                        <Image src={asset("colorScales/sketches_notability/scalesSketchPage5.png")}
                               className={"img-fluid"}
                               alt={"Screen grab of a list of user stories written by hand"} />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}
                                      borderColor={"aqua-dark"} borderWidth={1}>
                        <Image src={asset("colorScales/sketches_notability/scalesSketchPage6.png")}
                               className={"img-fluid"}
                               alt={"Screen grab of a list of user stories written by hand with an initial sketch"} />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}
                                      borderColor={"aqua-dark"} borderWidth={1}>
                        <Image src={asset("colorScales/sketches_notability/scalesSketchPage2.png")}
                               className={"img-fluid"}
                               alt={"Hand-drawn sketches showcasing screen explorations"} />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}
                                      borderColor={"aqua-dark"} borderWidth={1}>
                        <Image src={asset("colorScales/sketches_notability/scalesSketchPage7.png")}
                               className={"img-fluid"}
                               alt={"Hand-drawn sketches showcasing component explorations"} />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}
                                      borderColor={"aqua-dark"} borderWidth={1}>
                        <Image src={asset("colorScales/scales_figma_sketch_v1.png")}
                               className={"img-fluid"}
                               alt={"Early Figma sketch showing layouts and components"} />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}
                                      borderColor={"aqua-dark"} borderWidth={1}>
                        <Image src={asset("colorScales/scales_figma_sketch_v2.png")}
                               className={"img-fluid"} alt={"A more advanced Figma prototype"} />
                    </ProjectContainer>
                </Col>
            </Row>
            <FigureCaption>Even as a self-initiated project, I began by scketching and iterating before spinning out code.</FigureCaption>
        </Figure>
    );
};

export default DiscoveryFiguresScales
