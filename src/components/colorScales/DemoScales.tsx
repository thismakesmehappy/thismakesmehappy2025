import {Figure, FigureCaption} from "react-bootstrap";
import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";
import {asset} from "src/helpers/assetPath.ts";

const DemoScales = () => {
    return (
        <>
            <Figure className={"mb-6"}>
                <ProjectContainer backgroundColor="aqua-faded" className="p-0" padding={false}
                                  borderColor={"aqua-dark"} borderWidth={1}>
                    <video className={"w-100"} autoPlay={true} loop={true} controls={true}>
                        <source src={asset("colorScales/scales_in_action.mp4")} type="video/mp4" />
                        <source src={asset("colorScales/scales_in_action.gif")} />
                    </video>
                </ProjectContainer>
                <FigureCaption>Screen recordings showcasing basic interactions for the plugin</FigureCaption>
            </Figure>
            <Figure>
                <ProjectContainer backgroundColor="aqua-faded" className="p-0" padding={false}
                                  borderColor={"aqua-dark"} borderWidth={1}>
                    <video className={"w-100"} autoPlay={true} loop={true} controls={true}>
                        <source src={asset("colorScales/naming_options.mp4")} type="video/mp4" />
                        <source src={asset("colorScales/scales_in_action.gif")} />
                    </video>
                </ProjectContainer>
                <FigureCaption>Screen recordings showing modal for naming options</FigureCaption>
            </Figure>
        </>
    );
};

export default DemoScales
