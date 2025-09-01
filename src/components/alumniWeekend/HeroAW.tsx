import {Image} from 'react-bootstrap';
import ProjectContainer from  'src/components/helpers/ProjectContainer';
import {asset} from "src/helpers/assetPath.ts";

const HeroAW = () => {
    return (
        <ProjectContainer backgroundColor="yellow-faded" className={"mb-4"} padding={false}>
            <Image 
                src={asset("aw/aw_photo_step.jpg")} 
                className={"img-fluid"}
                alt={"Photo of a woman in front of a step and repeat featuring Alumni Weekend branding"} 
            />
        </ProjectContainer>
    );
};

export default HeroAW;
