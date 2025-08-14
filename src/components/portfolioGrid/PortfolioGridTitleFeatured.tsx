import {Col} from "react-bootstrap";
import type {PortfolioGridTitleProps} from "./interfaces.ts";
import PortfolioGridTitleInner from "./PortfolioGridTitleInner.tsx";

export const PortfolioGridTitleFeatured = ({color, pre, name, className}: PortfolioGridTitleProps) => {
    return (
        <Col xs={12} md={4} lg={5} className={`d-flex align-items-center ${className}`}>
            <PortfolioGridTitleInner name={name} pre={pre} color={color} />
        </Col>
    );
};
