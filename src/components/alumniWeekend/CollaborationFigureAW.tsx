import {Figure, FigureCaption, Image} from 'react-bootstrap';
import ProjectContainer from 'src/components/helpers/ProjectContainer.tsx';
import {asset} from "src/helpers/assetPath.ts";

const CollaborationFigureAW = () => {
    return (
        <Figure>
            <FigureCaption>Once the team saw the benefits of collaborating, this became the default</FigureCaption>
            <ProjectContainer backgroundColor="yellow-faded" padding={false} className={"mb-4"}>
                <Image 
                    src={asset("aw/drexel_dt_group.jpg")} 
                    className={"img-fluid"}
                    alt={"Team collaboration session showing group working together"} 
                />
            </ProjectContainer>
        </Figure>
    );
};

export default CollaborationFigureAW;
