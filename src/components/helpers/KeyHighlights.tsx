import {Row} from "react-bootstrap";
import type {AccentColors, AccentColorsDark, AccentColorsLight} from "../../helpers/constants.ts";
import React from "react";
import ProjectContainer from "./ProjectContainer.tsx";

interface KeyHighlightsProps {
    subtitle?: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    color?: AccentColors | AccentColorsDark | AccentColorsLight | "primary" | "secondary";
    gap?: number;
    gapY?: number;
    className?: string;
    children?: React.ReactNode;
}

const KeyHighlights = ({
                           subtitle,
                           xs = 2,
                           sm,
                           md = 3,
                           lg = 6,
                           xl,
                           gap = 3,
                           gapY = 3,
                           color = "primary",
                           children,
                           className,
                       }: KeyHighlightsProps) => {
    return (
        <section className={`highlights mb-4 ${className}`}>
            {subtitle && <h2>{subtitle}</h2>}
            <ProjectContainer borderColor={color} expand={true} borderWidth={4} className={`highlights gap-${gap}`}>
                <Row xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={`gy-${gapY}`}>
                    {children}
                </Row>
            </ProjectContainer>
        </section>
    );
};

export default KeyHighlights;