import {Col, Image, Row} from "react-bootstrap";
import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";
import {asset} from "src/helpers/assetPath.ts";

const ImagesScreenAW = () => {
    return (
        <Row className="mb-4 row-gap-4">
            <Col md={6}>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_social_flat.png")} className={"img-fluid badge3"}
                           alt={"Branded social media story"} />
                </ProjectContainer>
            </Col>
            <Col md={6}>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <video className={"w-100"} autoPlay={true} loop={true} controls={false}
                           poster={asset("aw/aw_social_anim.png")}>
                        <source src={asset("aw/aw_social_anim.mp4")} type="video/mp4" />
                        <img src={asset("aw/aw_social_anim.gif")}
                             alt={"Animated branded social media post"} />
                    </video>
                </ProjectContainer>
            </Col>
            <Col md={12}>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <video className={"w-100"} autoPlay={true} loop={true} controls={false}
                           poster={asset("aw/aw_email.png")}>
                        <source src={asset("aw/aw_email.mp4")} type="video/mp4" />
                        <img src={asset("aw/aw_email.gif")} alt={"Animated branded email"} />
                    </video>
                </ProjectContainer>
            </Col>
            <Col>
                <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                    <Image src={asset("aw/aw_web.png")} className={"img-fluid badge3"}
                           alt={"Branded web banner"} />
                </ProjectContainer>
            </Col>
        </Row>

    );
};

export default ImagesScreenAW
