import {Col, Image, Row} from "react-bootstrap";
import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";
import {asset} from "src/helpers/assetPath.ts";

const ImagesSwagAW = () => {
    return (
        <Row xs={1} md={2} className="mb-4 row-gap-4">
            <Col>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_swag_bag.png")} className={"img-fluid badge3"}
                           alt={"Alumni Weekend branded tote back on a neutral background"} />
                </ProjectContainer>
            </Col>
            <Col>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_swag_cup.png")} className={"img-fluid badge3"}
                           alt={"Alumni Weekend branded beer cup on a neutral background"} />
                </ProjectContainer>
            </Col>
            <Col>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_photo_napkins.jpg")} className={"img-fluid badge3"}
                           alt={"Alumni Weekend branded cocktail napkin on a table"} />
                </ProjectContainer>
            </Col>
            <Col>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_photo_cups.jpg")} className={"img-fluid badge3"}
                           alt={"Two men wearing hats, each holding an Alumni Weekend branded cup filled with beer"} />
                </ProjectContainer>
            </Col>
            <Col>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_photo_sign.jpg")} className={"img-fluid badge3"}
                           alt={"Signage for the Drexel Makers Market Festival registration"} />
                </ProjectContainer>
            </Col>
            <Col>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_photo_tee.jpg")} className={"img-fluid badge3"}
                           alt={"A group of young men, two with their back to the camera, the third between them wearing an Alumni Weekend branded t-shirt"} />
                </ProjectContainer>
            </Col>
            <Col>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_photo_tee_shoulder.png")} className={"img-fluid badge3"}
                           alt={"Two women at an evening party, one of them wearing the Alumni Weekend branded t-shirt with the neck cut off and off her shoulder"} />
                </ProjectContainer>
            </Col>
            <Col>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_photo_projection.png")} className={"img-fluid badge3"}
                           alt={"Light projection of Mario the Dragon holding a sign that says 'Thanks for Joining Us' and next to it 'See you next year!' with the Drexel Alumni logo"} />
                </ProjectContainer>
            </Col>
        </Row>
    );
};

export default ImagesSwagAW
