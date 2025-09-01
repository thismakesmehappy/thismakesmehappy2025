import {Col, Figure, FigureCaption, Image, Row} from "react-bootstrap";
import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";
import {asset} from "src/helpers/assetPath.ts";

const FeaturesFiguresScales = () => {
    return (
        <Figure>
            <Row xs={1} md={2} className={"gy-4"}>
                <Col>
                    <ProjectContainer backgroundColor="aqua-faded" padding={false}>
                        <Image src={asset("colorScales/scales_features_variables.png")} fluid={true}
                               alt={"Screen grab showing variables in Figma created by the plugin"} />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="aqua-faded" padding={false}>
                        <Image src={asset("colorScales/scales_features_swatches.png")} fluid={true}
                               alt={"Screen grab showing color swatches in Figma created by the plugin"} />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}>
                        <Image src={asset("colorScales/scales_features_styles.png")} fluid={true}
                               alt={"Screen grab showing color styles in Figma created by the plugin"} />
                    </ProjectContainer>
                </Col>
                <Col>
                    <ProjectContainer backgroundColor="aqua-faded" className={"w-100 overflow-hidden"}>
                        <Image src={asset("colorScales/scales_features_css.png")} fluid={true}
                               alt={"CSS variables created by the plugin"} />
                    </ProjectContainer>
                </Col>
            </Row>
            <FigureCaption>The plugin produces several production-ready assets: Figma variables, color swatches, color styles, and CSS and SCSS variables for all the primitive colors and the scales.</FigureCaption>
        </Figure>
    );
};

export default FeaturesFiguresScales
