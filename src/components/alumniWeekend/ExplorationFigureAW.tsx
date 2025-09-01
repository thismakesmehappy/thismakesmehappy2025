import {Figure, FigureCaption, Image} from 'react-bootstrap';
import ProjectContainer from 'src/components/helpers/ProjectContainer.tsx';
import {asset} from "src/helpers/assetPath.ts";

const ExplorationFigureAW = () => {
    return (
        <Figure>
            <FigureCaption>When the team resisted the idea of treating events as a branding problem, I focused on showcasing the impact of a consistent visual style</FigureCaption>
            <ProjectContainer backgroundColor="yellow-faded" padding={false} className={"mb-4"}>
                <Image 
                    src={asset("aw/aw18_exploration.png")} 
                    className={"img-fluid"}
                    alt={"Visual exploration showing consistent Alumni Weekend branding approach"} 
                />
            </ProjectContainer>
        </Figure>
    );
};

export default ExplorationFigureAW;
