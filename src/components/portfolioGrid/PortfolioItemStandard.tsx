import {Col} from "react-bootstrap";
import {type PortfolioGridItemsColsProps, spacingBottom} from "./interfaces.ts";
import {PortfolioGridImageInner} from "./PortfolioGridImageInner.tsx";
import {PortfolioGridTitleInner} from "./PortfolioGridTitleInner.tsx";
import {Link} from "react-router-dom";

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
                                          xxl,
                                          link,
                                          short = false
                                      }: PortfolioGridItemsColsProps) => {
    return (
        <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} className={spacingBottom}>
            <Link to={`${link}`}>
                <PortfolioGridImageInner image={image} rotateRight={rotateRight} />
                <PortfolioGridTitleInner name={name} pre={pre} color={color} short={short} />
            </Link>
        </Col>
    );
};