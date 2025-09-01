import {Figure, FigureCaption, Image} from 'react-bootstrap';
import ProjectContainer from 'src/components/helpers/ProjectContainer.tsx';
import {asset} from "src/helpers/assetPath.ts";

const AuditFigureAW = () => {
    return (
        <Figure>
            <FigureCaption>An audit of the 2016 and 2017 creative showed there was no consistency and visuals relied heavily on clipart</FigureCaption>
            <ProjectContainer backgroundColor="yellow-faded" padding={false} borderColor={"yellow"}
                              borderWidth={1} className={"mb-4"}>
                <Image 
                    src={asset("aw/aw18_audit.png")} 
                    className={"img-fluid"}
                    alt={"Audit showing inconsistent Alumni Weekend designs from 2016-2017"} 
                />
            </ProjectContainer>
        </Figure>
    );
};

export default AuditFigureAW;
