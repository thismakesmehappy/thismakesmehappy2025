import {Col, Image, Row} from "react-bootstrap";
import HandleAssets from "../../helpers/HandleAssets.ts";
import type {PortfolioGridImageProps} from "./interfaces.ts";

export const PortfolioGridImageInner = ({image, rotateRight}: PortfolioGridImageProps) => {
    return (
        <Row className="justify-content-center">
            <Col xs={8} md={12}>
                <Image
                    src={HandleAssets.getAsset(image)}
                    className={`grid-image img-fluid ${rotateRight ? "rotate-right" : "rotate-left"}`} />
            </Col>
        </Row>
    );
};