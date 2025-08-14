import PortfolioGridImageInner from "./PortfolioGridImageInner.tsx";
import {Col} from "react-bootstrap";
import type {PortfolioGridImageProps} from "./interfaces.ts";

const PortfolioGridImageFeatured = ({image, className, rotateRight}: PortfolioGridImageProps) => {
    return (
        <Col xs={12} md={8} lg={5} className={`text-center ${className}`}>
            <PortfolioGridImageInner image={image} rotateRight={rotateRight} />
        </Col>
    );
};

export default PortfolioGridImageFeatured;