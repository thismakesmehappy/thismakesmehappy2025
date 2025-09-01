import type {AccentColors} from 'src/helpers/constants.ts';

export const spacingBottom = "mb-xl-6 mb-5";

export interface PortfolioGridTitleProps {
    name?: string;
    pre: string;
    color?: AccentColors;
    className?: string;
}

export interface PortfolioGridImageProps {
    image: string;
    className?: string;
    rotateRight?: boolean;
    reducedThumbnail?: boolean;
    alt?: string;
}

export interface PortfolioGridItemProps extends PortfolioGridTitleProps, PortfolioGridImageProps {
}

export interface PortfolioGridItemsColsProps extends PortfolioGridTitleProps, PortfolioGridImageProps {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
    link?: string;
    tags?: string[];
    alt?: string;
}

export interface PortfolioGridItemFeaturedProps extends PortfolioGridItemProps {
    reverse?: boolean;
    link?: string;
}