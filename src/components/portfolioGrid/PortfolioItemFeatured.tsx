import {type PortfolioGridItemFeaturedProps, spacingBottom} from "./interfaces.ts";
import {PortfolioGridImageFeatured} from "./PortfolioGridImageFeatured.tsx";
import {PortfolioGridTitleFeatured} from "./PortfolioGridTitleFeatured.tsx";
import {gridBreakpoints} from "../../helpers/constants.ts";
import {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";


export const PortfolioItemFeatured = ({name, pre, image, color, reverse, link}: PortfolioGridItemFeaturedProps) => {
    const [isWindowMediumOrLarger, setIsWindowMediumOrLarger] = useState(true);
    const updateWindowSize = () => {
        const currentWindowSize = window.innerWidth;
        setIsWindowMediumOrLarger(currentWindowSize >= gridBreakpoints.md);
    }
    const rotate = "rotate-right";

    useEffect(() => {
        updateWindowSize();

        window.addEventListener("resize", updateWindowSize);
        return () => {
            window.removeEventListener("resize", updateWindowSize);
        }
    })

    if (reverse && isWindowMediumOrLarger) {
        return (
            <Link to={`${link}`} className={"m-0 p0"}>
                <Row className={`${spacingBottom} gx-5`}>
                    <PortfolioGridTitleFeatured name={name} pre={pre} color={color} className={"offset-lg-1"} />
                    <PortfolioGridImageFeatured image={image} className={rotate} rotateRight={reverse} />
                </Row>
            </Link>
        )
    }

    return (
        <Link to={`${link}`} className={"m-0 p0"}>
            <Row className={`${spacingBottom} gx-5`}>
                <PortfolioGridImageFeatured image={image} className={`offset-lg-1`} rotateRight={reverse} />
                <PortfolioGridTitleFeatured name={name} pre={pre} color={color} />
            </Row>
        </Link>
    );
};