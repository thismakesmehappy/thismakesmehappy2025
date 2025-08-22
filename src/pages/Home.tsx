import HomeHero from "../components/home/HomeHero.tsx";
import {PortfolioGrid} from "../components/portfolioGrid/PortfolioGrid.tsx";
import Highlights from "../components/home/Highlights.tsx";
import WhereAndWho from "../components/home/WhereAndWho.tsx";
import LookingFor from "../components/home/LookingFor.tsx";
import WallOfTerms from "../components/home/WallOfTerms.tsx";
import {homeListOfTerms} from "../data/homeListOfTerms.ts";


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