import {Col} from 'react-bootstrap';
import {type PortfolioGridItemsColsProps, spacingBottom} from './interfaces.ts';
import PortfolioGridImageInner from './PortfolioGridImageInner';
import PortfolioGridTitleInner from './PortfolioGridTitleInner';
import {Link} from 'react-router-dom';
import {asset} from 'src/helpers/assetPath.ts';


const PortfolioItemFeatured = ({
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
                               }: PortfolioGridItemsColsProps) => {
    return (
        <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} className={spacingBottom}>
            <div className="portfolio-grid-container">
                <Link to={`${link}`}>
                    <PortfolioGridImageInner image={asset(image)} rotateRight={rotateRight} />
                    <PortfolioGridTitleInner name={name} pre={pre} color={color} />
                </Link>
            </div>
        </Col>
    );
};

export default PortfolioItemFeatured;