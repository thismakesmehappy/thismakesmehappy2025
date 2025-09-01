import {Container} from 'react-bootstrap';
import portfolioGrid from 'src/data/portfolioGrid.json';
import "src/styles/_alumni-weekend.scss"
import {useEffect} from 'react';
import useProjectHeader from 'src/hooks/useProjectHeader.ts';
import type {AccentColors} from 'src/helpers/constants.ts';
import Section from "src/components/layout/Section.tsx";
import SectionContent from "src/components/layout/SectionContent.tsx";
import Article from "src/components/layout/Article.tsx";
import KeyHighlightsAW from "src/components/alumniWeekend/KeyHighlightsAW.tsx";
import BadgesAnimAW from "src/components/alumniWeekend/BadgesAnimAW.tsx";
import ChallengeAW from "src/components/alumniWeekend/ChallengeAW.tsx";
import ImagesScreenAW from "src/components/alumniWeekend/ImagesScreenAW.tsx";
import ImagesPrintAW from "src/components/alumniWeekend/ImagesPrintAW.tsx";
import CreativeSystemAW from "src/components/alumniWeekend/CreativeSystemAW.tsx";
import ImagesSwagAW from "src/components/alumniWeekend/ImagesSwagAW.tsx";
import CrossFunctionalAW from "src/components/alumniWeekend/CrossFunctionalAW.tsx";
import TeamDevelopmentAW from "src/components/alumniWeekend/TeamDevelopmentAW.tsx";
import HeroAW from "src/components/alumniWeekend/HeroAW.tsx";
import ProcessAW from "src/components/alumniWeekend/ProcessAW.tsx";
import IdeationFiguresAW from "src/components/alumniWeekend/IdeationFiguresAW.tsx";
import ConceptFiguresAW from "src/components/alumniWeekend/ConceptFiguresAW.tsx";
import ProcessImprovementAW from "src/components/alumniWeekend/ProcessImprovementAW.tsx";
import ContinuousImprovementAW from "src/components/alumniWeekend/ContinuousImprovementAW.tsx";
import AuditFigureAW from "src/components/alumniWeekend/AuditFigureAW.tsx";
import ExplorationFigureAW from "src/components/alumniWeekend/ExplorationFigureAW.tsx";
import ImpactResultsAW from "src/components/alumniWeekend/ImpactResultsAW.tsx";
import CollaborationFigureAW from "src/components/alumniWeekend/CollaborationFigureAW.tsx";
import ReflectionAW from "src/components/alumniWeekend/ReflectionAW.tsx";

const DrexelAlumniWeekend = () => {
    const projectData = portfolioGrid.projects.featured.drexelAlumniWeekend;
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
            timeline: projectData.timeline,
            role: projectData.role,
            challenge: projectData.challenge,
            impact: projectData.impact
        });

        // Cleanup when component unmounts
        return () => setHeaderData(null);
    }, []);

    return (
        <Article id="alumni-weekend-page">
            <Container className="py-5">
                <HeroAW />
                <Section>
                    <KeyHighlightsAW />
                </Section>
                <Section>
                    <BadgesAnimAW />
                </Section>
                <Section>
                    <SectionContent className="mb-4">
                        <ChallengeAW />
                    </SectionContent>
                    <ImagesScreenAW />
                </Section>
                <Section>
                    <SectionContent>
                        <CreativeSystemAW />
                    </SectionContent>
                </Section>
                <Section>
                    <ImagesPrintAW />
                </Section>
                <Section>
                    <SectionContent>
                        <CrossFunctionalAW />
                    </SectionContent>
                </Section>
                <Section>
                    <ImagesSwagAW />
                </Section>
                <Section>
                    <SectionContent>
                        <TeamDevelopmentAW />
                    </SectionContent>
                </Section>
                <Section>
                    <SectionContent>
                        <ProcessAW />
                    </SectionContent>
                    <IdeationFiguresAW />

                    <ConceptFiguresAW />
                    <SectionContent>
                        <ProcessImprovementAW />
                    </SectionContent>
                </Section>
                <Section>
                    <SectionContent>
                        <ContinuousImprovementAW />
                    </SectionContent>
                    <AuditFigureAW />
                    <ExplorationFigureAW />
                    <SectionContent>
                        <ImpactResultsAW />
                    </SectionContent>
                    <CollaborationFigureAW />
                </Section>
                <Section>
                    <ReflectionAW />
                </Section>
            </Container>
        </Article>
    );
};

export default DrexelAlumniWeekend;