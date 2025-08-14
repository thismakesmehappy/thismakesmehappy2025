import {Col, Row} from "react-bootstrap";
import {type PortfolioGridItemsColsProps, spacingBottom} from "./interfaces.ts";
import PortfolioGridImageInner from "./PortfolioGridImageInner.tsx";
import PortfolioGridTitleInnerShort from "./PortfolioGridTitleInnerShort.tsx";
import {Link} from "react-router-dom";

const PortfolioItemStandard = ({
                                   image,
                                   name,
                                   pre,
                                   color,
                                   rotateRight,
                                   xs,
                                   sm,
                                   md,
                                   lg,
                                   xl,
                                   xxl,
                                   link,
                                   reducedThumbnail = false,
                               }: PortfolioGridItemsColsProps) => {
    return (
        <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} className={spacingBottom}>
            <div className="portfolio-grid-container">
                <Link to={`${link}`}>
                    <Row className={"g-3 d-flex align-items-center"}>
                        <Col xs={12} sm={5} md={6}>
                            <PortfolioGridImageInner image={image} rotateRight={rotateRight}
                                                     reducedThumbnail={reducedThumbnail} />
                        </Col>
                        <Col xs={12} sm={7} md={6}>
                            <PortfolioGridTitleInnerShort name={name} pre={pre} color={color} />
                        </Col>
                    </Row>
                </Link>
            </div>
        </Col>
    );
};

export default PortfolioItemStandard;