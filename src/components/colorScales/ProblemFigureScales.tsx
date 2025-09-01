import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";
import {Figure, FigureCaption, Image} from "react-bootstrap";
import {asset} from "src/helpers/assetPath.ts";

const ProblemFigureScales = () => {
    return (
        <Figure>
            <ProjectContainer id="color-scales-manual-scales" backgroundColor={"aqua-faded"}
                              padding={false}>
                <Image src={asset("colorScales/scales_inspiration.png")} fluid={true}
                       alt={"Screen grab of a Figma file with a color study containing a number of inspiration images and color swatches, showcasing a group of color scales"} />
            </ProjectContainer>
            <FigureCaption>The idea for the plugin came from calculating scales for a design study</FigureCaption>
        </Figure>
    );
};

export default ProblemFigureScales
