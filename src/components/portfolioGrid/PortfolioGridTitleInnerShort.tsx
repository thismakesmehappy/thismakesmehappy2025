import type {PortfolioGridTitleProps} from "./interfaces.ts";

const PortfolioGridTitleInnerShort = ({color, pre}: PortfolioGridTitleProps) => {
    return (
        <div className={`grid-caption ${color}`}>
            <div className="title">
                <p className="pre">{pre}</p>
                <div className="rule-bottom"></div>
            </div>
        </div>
    );
};

export default PortfolioGridTitleInnerShort;