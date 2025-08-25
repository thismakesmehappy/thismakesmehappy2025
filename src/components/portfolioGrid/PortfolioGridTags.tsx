import type {AccentColors} from "src/helpers/constants.ts";

interface PortfolioGridTagsProps {
    tagsData: string[];
    color: AccentColors;
    className?: string;
}

const PortfolioGridTags = ({tagsData, color, className}: PortfolioGridTagsProps) => {
    return (
        <div className={`justify-content-center ${className}`}>
            {tagsData.map(tag => (
                <div className={`tag ${color}`} key={`tag-${tag}`}>{tag}</div>
            ))}

        </div>
    );
};

export default PortfolioGridTags;