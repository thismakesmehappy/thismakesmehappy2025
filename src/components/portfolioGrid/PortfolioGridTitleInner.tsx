import type {PortfolioGridTitleProps} from "./interfaces.ts";

export const PortfolioGridTitleInner = ({color, pre, name, short}: PortfolioGridTitleProps) => {
    return (
        <div className={`grid-caption ${color} mt-sm-1`}>
            <div className="title">
                <p className="pre">{pre}</p>
                {!short &&
                    <p className="name">{name}</p>
                }
                <div className="rule-bottom"></div>
            </div>
        </div>
    );
};