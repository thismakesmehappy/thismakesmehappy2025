import HomeHero from  'src/components/home/HomeHero';
import PortfolioGrid from  'src/components/portfolioGrid/PortfolioGrid';
import Highlights from  'src/components/home/Highlights';
import WhereAndWho from  'src/components/home/WhereAndWho';
import LookingFor from  'src/components/home/LookingFor';
import WallOfTerms from  'src/components/home/WallOfTerms';
import homeListOfTerms from 'src/data/homeListOfTerms.ts';


const Home = () => {

    return (
        <div>
            <HomeHero />
            <PortfolioGrid />
            <LookingFor />
            <WhereAndWho />
            <Highlights />
            <WallOfTerms className={"hero-section"} terms={homeListOfTerms} />
        </div>

    );
}

export default Home;