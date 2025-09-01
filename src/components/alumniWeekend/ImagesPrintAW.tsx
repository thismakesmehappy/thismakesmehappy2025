import {Col, Image, Row} from "react-bootstrap";
import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";
import {asset} from "src/helpers/assetPath.ts";

const ImagesPrintAW = () => {
    return (
        <Row className="mb-4 row-gap-4">
            <Col md={12}>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_postcard_in_hand.png")} className={"img-fluid"}
                           alt={"A branded postcard invitation hand"} />
                </ProjectContainer>
            </Col>
            <Col md={12}>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_postcard.png")} className={"img-fluid"}
                           alt={"A branded postcard invitation leaning against a wall, and we can see both the front and the back"} />
                </ProjectContainer>
            </Col>
            <Col md={12}>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_50invite_cover.png")} className={"img-fluid badge3"}
                           alt={"Cover for invitation booklets for Golden Dragon Society"} />
                </ProjectContainer>
            </Col>
            <Col md={12}>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_50invite_inside1_insitu.png")} className={"img-fluid badge3"}
                           alt={"Inside spread of invitation booklet showing a schedule of events"} />
                </ProjectContainer>
            </Col>
            <Col md={12}>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_50invite_inside1.png")} className={"img-fluid badge3"}
                           alt={"Inside spread of invitation booklet showing several information sections, including planning details"} />
                </ProjectContainer>
            </Col>

        </Row>
    );
};

export default ImagesPrintAW
