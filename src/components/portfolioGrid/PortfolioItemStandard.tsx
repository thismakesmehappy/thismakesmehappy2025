import {Col} from "react-bootstrap";
import {type PortfolioGridItemProps, spacingBottom} from "./interfaces.ts";
import {PortfolioGridImageInner} from "./PortfolioGridImageInner.tsx";
import {PortfolioGridTitleInner} from "./PortfolioGridTitleInner.tsx";

export const PortfolioItemStandard = ({image, name, pre, color, rotateRight}: PortfolioGridItemProps) => {
    return (
        <Col xs={12} md={6} className={spacingBottom}>
            <PortfolioGridImageInner image={image} rotateRight={rotateRight} />
            <PortfolioGridTitleInner name={name} pre={pre} color={color} />
        </Col>
    );
};