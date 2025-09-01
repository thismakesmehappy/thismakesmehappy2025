import {Col, Image, Row} from "react-bootstrap";
import {asset} from "src/helpers/assetPath.ts";
import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";

const BadgesAnimAW = () => {
    return (
        <ProjectContainer id={"badges"} className={"mb-4"}>
            <Row xs={4} className="text-center align-items-center row-gap-0">
                <Col className={"p-1 p-md-3 p-lg-4"}>
                    <Image src={asset("aw/badges/more_fun.gif")} className={"badge1"} fluid={true}
                           alt={"Animated badge: More Fun"} loading="lazy" />
                </Col>
                <Col className={"p-1 p-md-3 p-lg-4"}>
                    <Image src={asset("aw/badges/guaranteed.gif")} className={"badge2"} fluid={true}
                           alt={"Animated badge: Fun Times Guaranteed"} loading="lazy" />
                </Col>


                <Col className={"p-1 p-md-3 p-lg-4"}>
                    <Image src={asset("aw/badges/a_feast.gif")} className={"badge3"} fluid={true}
                           alt={"Animated badge: A Feast for your Eyes"} />
                </Col>
                <Col className={"p-1 p-md-3 p-lg-4"}>
                    <Image src={asset("aw/badges/curated.gif")} className={"badge4"} fluid={true}
                           alt={"Animated badge: Finely Curated Events"} />
                </Col>
                <Col className={"p-1 p-md-3 p-lg-4"} xs={{offset: 1}}>
                    <Image src={asset("aw/badges/and_more.gif")} className={"badge5"} fluid={true}
                           alt={"Animated badge: All You've Missed and More"} />
                </Col>

                <Col className={"p-1 p-md-3 p-lg-4"}>
                    <Image src={asset("aw/badges/no_fomo.gif")} className={"badge6"} fluid={true}
                           alt={"Animated badge: No FOMO"} />
                </Col>
                <Col className={"p-1 p-md-3 p-lg-4"}>
                    <Image src={asset("aw/badges/live_from.gif")} className={"badge7"} fluid={true}
                           alt={"Animated badge: Live from Drexel University"} />
                </Col>

            </Row>
        </ProjectContainer>
    );
};

export default BadgesAnimAW
