import portfolioGrid from 'src/data/portfolioGrid.json';
import useProjectHeader from 'src/hooks/useProjectHeader.ts';
import {useEffect} from 'react';
import type {AccentColors} from 'src/helpers/constants.ts';
import {Container} from 'react-bootstrap';
import "src/styles/_color_scales.scss";
import KeyHighlightsScales from 'src/components/colorScales/KeyHighlightsScales.tsx';
import FeaturesScales from 'src/components/colorScales/FeaturesScales.tsx';
import Article from "src/components/layout/Article.tsx";
import HeroScales from "src/components/colorScales/HeroScales.tsx";
import DemoScales from "src/components/colorScales/DemoScales.tsx";
import Section from "src/components/layout/Section.tsx";
import FeaturesFiguresScales from "src/components/colorScales/FeaturesFiguresScales.tsx";
import TechnicalArchitectureScales from "src/components/colorScales/TechnicalArchitectureScales.tsx";
import ProblemScales from "src/components/colorScales/ProblemScales.tsx";
import SectionContent from "src/components/layout/SectionContent.tsx";
import DiscoveryFiguresScales from "src/components/colorScales/DiscoveryFiguresScales.tsx";
import DiscoveryScales from "src/components/colorScales/DiscoveryScales.tsx";
import AIScales from "src/components/colorScales/AIScales.tsx";
import ReflectionScales from "src/components/colorScales/ReflectionScales.tsx";
import ProblemFigureScales from "src/components/colorScales/ProblemFigureScales.tsx";

const ColorScales = () => {
    const projectData = portfolioGrid.projects.featured.figmaPlugin;


    const {setHeaderData} = useProjectHeader();
    useEffect(() => {
        setHeaderData({
            title: projectData.title,
            subtitle: projectData.subtitle,
            summary: projectData.summary,
            wordCount: projectData.wordCount,
            readingTime: projectData.readingTime,
            color: projectData.accentColor as AccentColors,
            wordCloud: projectData.wordCloud,
            project: projectData.project,
            role: projectData.role,
            challenge: projectData.challenge,
            impact: projectData.impact,
        });

        // Cleanup when component unmounts
        return () => setHeaderData(null);
    }, []);

    return (
        <Article id="color-scales-page">
            <Container className="py-5">
                <HeroScales />
                <Section>
                    <KeyHighlightsScales />
                </Section>
                <Section>
                    <DemoScales />
                </Section>
                <Section>
                    <SectionContent>
                        <FeaturesScales />
                    </SectionContent>
                    <FeaturesFiguresScales />
                </Section>
                <Section>
                    <SectionContent>
                        <TechnicalArchitectureScales />
                    </SectionContent>
                </Section>
                <Section>
                    <SectionContent className={"mb-4"}>
                        <ProblemScales />
                    </SectionContent>
                    <ProblemFigureScales />
                </Section>

                <Section>
                    <SectionContent className={"mb-4"}>
                        <DiscoveryScales />
                    </SectionContent>
                    <DiscoveryFiguresScales />
                </Section>
                <Section>
                    <SectionContent>
                        <AIScales />
                    </SectionContent>
                </Section>
                {/*<h2>Early Validation & Impact</h2>*/}

                {/*<strong>Placeholder: User Adoption Metrics</strong> *(to be added post-launch: downloads, workflow savings, feature usage patterns,*/}
                {/*community feedback)**/}

                {/*Early peer feedback confirmed the value: generating <strong>production-ready assets</strong> elevated the plugin beyond color math*/}
                {/*into a <strong>workflow integration tool</strong>.*/}

                {/*\[Visual: Designer quotes confirming value] */}
                <Section>
                    <ReflectionScales />
                </Section>

            </Container>
        </Article>
    );
};

/*


---

📖 <strong>Word Count:</strong> \~582 (excluding placeholders)


* */

export default ColorScales;