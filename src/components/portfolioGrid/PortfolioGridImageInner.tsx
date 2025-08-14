import {Col, Image, Row} from "react-bootstrap";
import type {PortfolioGridImageProps} from "./interfaces.ts";

const PortfolioGridImageInner = ({image, rotateRight, reducedThumbnail = true}: PortfolioGridImageProps) => {
    return (
        <Row className="justify-content-center">
            <Col xs={reducedThumbnail ? 8 : 12} md={12}>
                <Image
                    src={image}
                    className={`grid-image img-fluid ${rotateRight ? "rotate-right" : "rotate-left"}`} />
            </Col>
        </Row>
    );
};

export default PortfolioGridImageInner;