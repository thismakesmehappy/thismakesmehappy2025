import {Col, Image, Row} from 'react-bootstrap';
import type {PortfolioGridImageProps} from './interfaces.ts';

const PortfolioGridImageInner = ({image, rotateRight, alt, reducedThumbnail = true}: PortfolioGridImageProps) => {
    return (
        <Row className="justify-content-center">
            <Col xs={reducedThumbnail ? 8 : 12} md={12}>
                <Image
                    src={image}
                    fluid={true}
                    className={`grid-image ${rotateRight ? "rotate-right" : "rotate-left"}`}
                    alt={alt} />

            </Col>
        </Row>
    );
};

export default PortfolioGridImageInner;