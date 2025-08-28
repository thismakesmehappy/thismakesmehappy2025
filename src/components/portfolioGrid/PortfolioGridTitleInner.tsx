import type {PortfolioGridTitleProps} from './interfaces.ts';

const PortfolioGridTitleInner = ({color, pre, name}: PortfolioGridTitleProps) => {
    return (
        <div className={`grid-caption ${color}`}>
            <div className="title">
                <p className="pre mt-2">{pre}</p>
                <p className="name">{name}</p>
                <div className="rule-bottom"></div>
            </div>
        </div>
    );
};

export default PortfolioGridTitleInner;