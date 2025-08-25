import HomeHero from "src/components/home/HomeHero.tsx";
import {PortfolioGrid} from "src/components/portfolioGrid/PortfolioGrid.tsx";
import Highlights from "src/components/home/Highlights.tsx";
import WhereAndWho from "src/components/home/WhereAndWho.tsx";
import LookingFor from "src/components/home/LookingFor.tsx";
import WallOfTerms from "src/components/home/WallOfTerms.tsx";
import {homeListOfTerms} from "src/data/homeListOfTerms.ts";


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