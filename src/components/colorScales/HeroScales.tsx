import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";
import {Image} from "react-bootstrap";
import {asset} from "src/helpers/assetPath.ts";

const HeroScales = () => {
    return (
        <div className="w-100 mb-4 d-flex align-items-center">
            <ProjectContainer id="color-scales-hero" backgroundColor={"aqua-faded"}
                              padding={false}>
                <Image src={asset("colorScales/color_scales_ui_static_mock.png")} fluid={true}
                       alt={"Screen grab of Figma with the Color Scales plugin open"} />
            </ProjectContainer>
        </div>
    );
};

export default HeroScales
