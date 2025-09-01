import {Col, Image, Row} from "react-bootstrap";
import {asset} from "src/helpers/assetPath.ts";
import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";

const BadgesAnimAW = () => {
    return (
        <ProjectContainer id={"badges"} className={"mb-4"}>
            <Row xs={4} className="text-center align-items-center row-gap-0">
                <Col className={"p-1 p-md-3 p-lg-4"}>
                    <Image src={asset("aw/badges/more_fun.gif")} className={"img-fluid badge1"}
                           alt={"Animated badge: More Fun"} />
                </Col>
                <Col className={"p-1 p-md-3 p-lg-4"}>
                    <Image src={asset("aw/badges/guaranteed.gif")} className={"img-fluid badge2"}
                           alt={"Animated badge: Fun Times Guaranteed"} />
                </Col>


                <Col className={"p-1 p-md-3 p-lg-4"}>
                    <Image src={asset("aw/badges/a_feast.gif")} className={"img-fluid badge3"}
                           alt={"Animated badge: A Feast for your Eyes"} />
                </Col>
                <Col className={"p-1 p-md-3 p-lg-4"}>
                    <Image src={asset("aw/badges/curated.gif")} className={"img-fluid badge4"}
                           alt={"Animated badge: Finely Curated Events"} />
                </Col>
                <Col className={"p-1 p-md-3 p-lg-4"} xs={{offset: 1}}>
                    <Image src={asset("aw/badges/and_more.gif")} className={"img-fluid badge5"}
                           alt={"Animated badge: All You've Missed and More"} />
                </Col>

                <Col className={"p-1 p-md-3 p-lg-4"}>
                    <Image src={asset("aw/badges/no_fomo.gif")} className={"img-fluid badge6"}
                           alt={"Animated badge: No FOMO"} />
                </Col>
                <Col className={"p-1 p-md-3 p-lg-4"}>
                    <Image src={asset("aw/badges/live_from.gif")} className={"img-fluid badge7"}
                           alt={"Animated badge: Live from Drexel University"} />
                </Col>

                {/*<Col>*/}
                {/*    <Image src={asset("aw/badges/dubac.gif")} className={"img-fluid"}*/}
                {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*    <Image src={asset("aw/badges/live_and_in_person.gif")} className={"img-fluid"}*/}
                {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                {/*</Col>*/}

                {/*<Col>*/}
                {/*    <Image src={asset("aw/badges/dragon_special.gif")} className={"img-fluid"}*/}
                {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                {/*</Col>*/}

                {/*<Col>*/}
                {/*    <Image src={asset("aw/badges/enjoy.gif")} className={"img-fluid"}*/}
                {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*    <Image src={asset("aw/badges/fan_fave.gif")} className={"img-fluid"}*/}
                {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*    <Image src={asset("aw/badges/fun_for_all.gif")} className={"img-fluid"}*/}
                {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*    <Image src={asset("aw/badges/old_friends.gif")} className={"img-fluid"}*/}
                {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                {/*</Col>*/}


            </Row>
        </ProjectContainer>
    );
};

export default BadgesAnimAW
