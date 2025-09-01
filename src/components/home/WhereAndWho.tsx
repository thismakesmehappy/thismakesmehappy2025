import {Col, Container, Image, Row} from 'react-bootstrap';
import {asset} from 'src/helpers/assetPath.ts';

const WhereAndWho = () => {
    const gridSpacing = "g-lg-5 gy-lg-5 g-md-5 g-6";
    const logosWhereColumns = {xs: 12, md: 6, lg: 3};
    const logosWhoColumns = {xs: 12, md: 6, lg: 3};
    return (
        <div id="where-and-who">
            <Container>
                <Row className="py-5">
                    <Col xs={12}>
                        <h2 className={"mb-4"}>Where I've worked</h2>
                        <Row className={gridSpacing}>
                            <Col xs={logosWhereColumns.xs} md={logosWhereColumns.md} lg={logosWhereColumns.lg}
                                 className={"align-content-center"} fluid={true}>
                                <Image src={asset("about/PennMedicine_color_rgb.png")}
                                       fluid={true}
                                       alt={"Penn Medicine"} />
                            </Col>
                            <Col xs={logosWhereColumns.xs} md={logosWhereColumns.md} lg={logosWhereColumns.lg}
                                 className={"align-content-center"} fluid={true}>
                                <Image src={asset("about/amazon-logo-rgb.png")}
                                       fluid={true}
                                       alt={"Amazon"} />
                            </Col>
                            <Col xs={logosWhereColumns.xs} md={logosWhereColumns.md} lg={logosWhereColumns.lg}
                                 className={"align-content-center"} fluid={true}>
                                <Image src={asset("about/Drexel_horiz_294.png")}
                                       fluid={true}
                                       alt={"Drexel University"} />
                            </Col>
                            <Col xs={logosWhereColumns.xs} md={logosWhereColumns.md} lg={logosWhereColumns.lg}
                                 className={"align-content-center"} fluid={true}>
                                <Image src={asset("about/logo_nickelodeon.png")}
                                       fluid={true}
                                       alt={"Nickelodeon"} />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12}
                         className={"mt-5 d-flex-justify-content-center"}>

                        <h2>Who I’ve created for</h2>
                        <p>A select list of organizations I've done work for, whether as direct clients, through freelance, or by volunteering</p>
                        <Row className={gridSpacing}>
                            <Col xs={logosWhoColumns.xs} md={logosWhoColumns.md} lg={logosWhoColumns.lg}
                                 className={"align-content-center"} fluid={true}>
                                <Image
                                    src={asset("about/TempleAlumniAssociation_Formal_Red_Black.png")}
                                    fluid={true}
                                    alt={"Temple Alumni Association"} />
                            </Col>
                            <Col xs={logosWhoColumns.xs} md={logosWhoColumns.md} lg={logosWhoColumns.lg}
                                 className={"align-content-center"} fluid={true}>
                                <Image src={asset("about/LWG_Logotype.png")}
                                       fluid={true}
                                       alt={"Longwood Gardens"} />
                            </Col>
                            <Col xs={logosWhoColumns.xs} md={logosWhoColumns.md} lg={logosWhoColumns.lg}
                                 className={"align-content-center"} fluid={true}>
                                <Image src={asset("about/logo_aiga_philadelphia.png")}
                                       fluid={true}
                                       alt={"AIGA Philadelphia"} />
                            </Col>
                            <Col xs={logosWhoColumns.xs} md={logosWhoColumns.md} lg={logosWhoColumns.lg}
                                 className={"align-content-center"} fluid={true}>
                                <Image src={asset("about/glam_global_RGB_logo-1_dark_lg.png")}
                                       fluid={true}
                                       alt={"Glamazon"} />
                            </Col>
                            <Col xs={logosWhoColumns.xs} md={logosWhoColumns.md} lg={logosWhoColumns.lg}
                                 className={"text-center align-content-center"}>
                                <Image src={asset("about/designphiladelphia.png")}
                                       fluid={true}
                                       className={"w-50"} alt={"DesignPhiladelphia"} />
                            </Col>
                            <Col xs={logosWhoColumns.xs} md={logosWhoColumns.md} lg={logosWhoColumns.lg}
                                 className={"align-content-center"} fluid={true}>
                                <Image src={asset("about/logo_museo_sefardi.jpg")}
                                       fluid={true} alt={"Museo Sefardí de Caracas"} />
                            </Col>
                            {/*    TODO: Add a couple more */}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhereAndWho;