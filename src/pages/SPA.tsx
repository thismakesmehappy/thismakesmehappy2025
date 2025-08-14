import HomeHero from "../components/home/HomeHero.tsx";
import {PortfolioGrid} from "../components/portfolioGrid/PortfolioGrid.tsx";
import Highlights from "../components/home/Highlights.tsx";
import WhereAndWho from "../components/home/WhereAndWho.tsx";
import LookingFor from "../components/home/LookingFor.tsx";
import WallOfTerms from "../components/home/WallOfTerms.tsx";

const SPA = () => {
    const listOfTerms = [
        "Creative Leadership & Strategy",
        "Team Building & Mentorship",
        "Brand Development",
        "Art Direction",
        "Design Thinking",
        "Cross-functional Collaboration",
        "Project Management",
        "UX/UI Design",
        "Business Development",
        "Bilingual in Spanish and English",
        "Adobe Photoshop",
        " Adobe Illustrator",
        "InDesign",
        "Figma",
        "HTML",
        "CSS",
        "TypeScript",
        "JavaScript",
        "React",
        "Java",
        "Python",
        "API design and development",
    ];
    return (
        <div>
            <HomeHero />
            <PortfolioGrid />
            <LookingFor />
            <WhereAndWho />
            <Highlights />
            <WallOfTerms terms={listOfTerms} />
        </div>

    );
}

export default SPA;