import {Col} from "react-bootstrap";
import {type PortfolioGridItemsColsProps, spacingBottom} from "./interfaces.ts";
import {PortfolioGridImageInner} from "./PortfolioGridImageInner.tsx";
import {PortfolioGridTitleInner} from "./PortfolioGridTitleInner.tsx";

export const PortfolioItemStandard = ({
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
                                          xxl
                                      }: PortfolioGridItemsColsProps) => {
    return (
        <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} className={spacingBottom}>
            <PortfolioGridImageInner image={image} rotateRight={rotateRight} />
            <PortfolioGridTitleInner name={name} pre={pre} color={color} />
        </Col>
    );
};