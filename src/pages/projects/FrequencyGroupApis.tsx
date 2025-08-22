import {Col, Container, Figure, FigureCaption, Row} from 'react-bootstrap';
import portfolioGrid from "../../data/portfolioGrid.json";
import KeyHighlights from "../../components/helpers/KeyHighlights.tsx";
import KeyHighlightCallout from "../../components/helpers/KeyHighlightCallout.tsx";
import KeyHighlight from "../../components/helpers/KeyHighlight.tsx";
import "../../styles/_frequency-groups.scss"
import {useEffect} from "react";
import {useProjectHeader} from "../../hooks/useProjectHeader.ts";
import {SimulatedFrequencyGroupScreen} from "./frequencyGroups/SimulatedFrequencyGroupScreen.tsx";
import {CappingBeforeAndAfter} from "./frequencyGroups/CappingBeforeAndAfter.tsx";
import ProjectContainer from "../../components/helpers/ProjectContainer.tsx";
import {BusinessImpactHighlights} from "./frequencyGroups/BusinessImpactHighlights.tsx";
import UpdateAssociations from "./frequencyGroups/UpdateAssociations.tsx";
import type {AccentColors} from "../../helpers/constants.ts";
import DuplicateAssociations from "./frequencyGroups/DuplicateAssociations.tsx";
import EngineeringFirst from "./frequencyGroups/EngineeringFirst.tsx";
import UserFirst from "./frequencyGroups/UserFirst.tsx";

const FrequencyGroupApis = () => {
    const projectData = portfolioGrid.projects.featured.frequencyGroups;
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
        });

        // Cleanup when component unmounts
        return () => setHeaderData(null);
    }, []);

    return (
        <div id="frequency-group-page">
            {/* Project Header */}
            {/*<ProjectHeader {...oldProjectData} />*/}

            {/* Project Content */}

            <Container className="py-5">
                <div className="w-100 d-flex align-items-center">
                    <Figure className="mx-auto">
                        <SimulatedFrequencyGroupScreen />
                        <FigureCaption>Frequency Groups UI that calls the create endpoint (simulated screen)</FigureCaption>
                    </Figure>
                </div>

                <KeyHighlights subtitle={"Key Facts"} xs={1} lg={5} color={"purple"}>
                    <KeyHighlight>
                        <KeyHighlightCallout small={true}>
                            Dedicated API Engineer
                        </KeyHighlightCallout>
                        for 18 months on a program serving millions of requests
                    </KeyHighlight>
                    <KeyHighlight>
                        <KeyHighlightCallout small={true}>
                            Beyond Scope
                        </KeyHighlightCallout>
                        conducted bar raiser and samurai reviews (senior-level product reviews)
                    </KeyHighlight>
                    <KeyHighlight>
                        <KeyHighlightCallout small={true}>
                            Applied Design Process
                        </KeyHighlightCallout>
                        reframed backend problems through user-centered design
                    </KeyHighlight>
                    <KeyHighlight>
                        <KeyHighlightCallout small={true}>
                            Onboarded 4 Engineers
                        </KeyHighlightCallout>
                        while maintaining user-focused development as an entry-level contributor
                    </KeyHighlight>
                    <KeyHighlight>
                        <KeyHighlightCallout small={true}>
                            6% unique reach increase
                        </KeyHighlightCallout>
                        APIs enabled advertiser use of frequency groups
                    </KeyHighlight>
                </KeyHighlights>

                <div className="text-stack">
                    <h2>Tech Stack & Scale</h2>
                    <ul>
                        <li><strong>Java + Smithy Models</strong> – Designed and implemented production APIs</li>
                        <li><strong>Coral Services</strong> – Deployed APIs serving millions of advertiser requests</li>
                        <li>
                            <strong>IDM and CMaaS</strong> – Amazon Advertising data layer (Identity Management service, IDM, and Campaign Management as a Service, CMaaS) for data management
                        </li>
                        <li>
                            <strong>REST Design Principles</strong> – Framed backend tradeoffs around user-centric contracts
                        </li>
                    </ul>
                </div>

                {/* <!--
STRUCTURE: Keep concise; pair with a simple “Before API → After API” explainer.
VISUAL OPTIONS:
- Two-column explainer: left = “Backend had FGs, no access”; right = “APIs expose FGs at scale”
- Small KPI strip for the three metrics.
-->*/}

                <BusinessImpactHighlights />
                <h2>Problem and Context</h2>

                <p>Frequency management limits how many times a user sees an ad, reducing fatigue and optimizing spend.</p>

                <p>Amazon DSP (Demand-Side Platform, Amazon's programmatic advertising platform) already had frequency groups at the backend layer, but advertisers could not access them. My team’s goal was to build <strong>production APIs</strong> to expose this functionality at scale, making frequency groups available to advertisers.
                </p>


                {/*
                <!-- 
                STRUCTURE: Core narrative. Consider collapsible subsections (accordion) for each story to keep page scannable.
                VISUAL OPTION (section header): Horizontal timeline bar with anchors linking to each story.
                -->
                */}
                <CappingBeforeAndAfter />
                <h2>Strategic Journey</h2>

                <div className={"timeline py-4"}>
                    <div className={"timeline-item"}>Onboarding & Beta</div>
                    <div className={"timeline-separator"}>→</div>
                    <div className={"timeline-item"}>General Availability</div>
                    <div className={"timeline-separator"}>→</div>
                    <div className={"timeline-item"}>Launch Support</div>
                    <div className={"timeline-separator"}>→</div>
                    <div className={"timeline-item"}>P1s & Enhancements</div>
                    <div className={"timeline-separator"}>→</div>
                    <div className={"timeline-item"}>Advertiser-Level</div>
                    <div className={"timeline-separator"}>→</div>
                    <div className={"timeline-item"}>Public Access & UAT</div>
                    <div className={"timeline-separator"}>→</div>
                    <div className={"timeline-item"}>Cross-Advertiser-Level</div>
                    <div className={"timeline-separator"}>→</div>
                    <div className={"timeline-item"}>Documentation & Handoff</div>
                    <div className={"timeline-separator"}>→</div>
                    <div className={"timeline-item"}>Duplicate Associations</div>
                </div>


                <p className={"hero-body"}>I incorporated a design-engineering mixed approach for all phases of my involvement with the API project. The following examples illustrate my approach.</p>

                {/*
                <!-- 
                VISUAL OPTIONS for Story 1:
                - Sequence diagram: “Delete → Create (brittle)” vs “Reassociate (atomic)”
                - Mini animation of batch reassociation
                -->
                */}


                <Row className={"d-flex"}>
                    <Col md={4} lg={3} className="d-flex me-0 ms-0">
                        <UpdateAssociations />
                    </Col>
                    <Col><h3>1. Designing Reliable API Architecture</h3>

                        <p>
                            <strong>Problem:</strong> Campaigns could only belong to one frequency group at a time. In the beta system, reassociating a campaign from one frequency group to another required two separate calls (one to delete the existing association, one to create a new one). Latency made these calls brittle, often producing failures. For example, a user couldn't reassociate a campaign via the campaign settings UI because the two calls conflicted; they would have to navigate to the associations settings to delete the existing association first, breaking user flows.
                        </p>

                        <p>
                            <strong>Solution:<strong> I designed and implemented a </strong>single reassociation endpoint</strong> that combined delete, write, and reassociate into one reliable request. To support bulk updates, I extended it with <strong>batch reassociation</strong>, allowing multiple campaigns to move between groups in a single call. I also created a <strong>bulk list endpoint</strong> so advertisers could fetch all campaign associations at once.
                        </p></Col>
                </Row>


                {/*}<!--
                VISUAL OPTIONS for Story 2:
                - “Failure → Stabilized” flow: show how duplicates are cleaned on update and suppressed on list
                - Toggle/slider: before (duplicates cause failure) / after (single valid association)
                NOTE: Minor copy cleanup to consider later: “Rather on focusing” → “Rather than focusing”.
                -->
                */}

                <Row className={"d-flex"}>
                    <Col md={4} lg={3} className="d-flex me-0 ms-0 d-md-none">
                        <DuplicateAssociations />
                    </Col>
                    <Col><h3>2. Large-Scale Problem Investigation</h3>

                        <p>After launch, production systems began creating <strong>duplicate associations</strong>, which broke the assumed state and caused <strong>system failures</strong> for advertisers.
                        </p>

                        <p>To solve them, I:</p>
                        <ul>
                            <li>Coordinated research with a team of engineers</li>
                            <li>Built tools to reproduce and analyze the issue</li>
                            <li>Traced the root cause to database consistency problems handled by external teams</li>
                        </ul>
                    </Col>
                    <Col md={4} lg={3} className="d-flex me-0 ms-0 d-none d-md-inline-flex">
                        <DuplicateAssociations />
                    </Col>
                </Row>
                <p>While the upstream fix was pending, I focused on the user experience. I wrote a <strong>trade-off document</strong> to explore interim options to <strong>mitigate breaks in the user experience</strong>:
                </p>


                <ul>
                    <li><strong>On update:</strong> detect duplicates and automatically clean them before persisting.
                    </li>
                    <li><strong>On list:</strong> return only the valid association, suppressing duplicates.</li>
                </ul>

                <p>Rather on focusing on what was out of scope, this approach favored the user experience by prevented user-facing failures, stabilized the service, and maintained advertiser trust without waiting for a full infrastructure overhaul.</p>


                {/*}<!--
                VISUAL OPTIONS for Story 3:
                - Split compare: Engineering-first vs User-first (inputs, contracts, exposure)
                - Interactive toggle to switch between proposed vs final approach
                NOTE: Small grammar tweaks to consider later:
                  - “Keep the API contracts and finding…” → “…and find…”
                  - “ensured the user experience consistent…” → “…remained consistent…”
                -->
                */}

                <h3>3. Advocating for User-First Engineering</h3>

                <p>When the product expanded to <strong>advertiser-level frequency groups</strong>, engineering tradeoffs intensified. While I focused on low-level API design and implementation, a senior engineer designed the end-to-end integration with our back-end systems. Some of the earlier explorations favored engineering needs, but I advocated a user-first approach.
                </p>

                <Row className={"d-flex"}>
                    <Col md={4} lg={3} className="d-flex me-0 ms-0">
                        <EngineeringFirst />
                    </Col>
                    <Col>
                        <strong>Engineering-first proposals included:</strong>
                        <ul>
                            <li>Preprocessing advertiser-level associations into campaign-level associations, with extraneous data exposed to users</li>
                            <li>Changing the API contract, requiring advertisers to submit additional inputs with every request</li>
                            <li>Developing new endpoints to aggregate data needed for our user interface, instead of focusing on RESTful endpoints focused on user needs</li>
                        </ul>
                        <p>While technically efficient, these approaches would have increased complexity for the user, forced contract changes, and degrade the experience.</p>
                    </Col></Row>

                <Row className={"d-flex"}>
                    <Col md={4} lg={3} className="d-flex me-0 ms-0 d-md-none">
                        <UserFirst />
                    </Col>
                    <Col>
                        <strong>User-first approach I advocated for:</strong>
                        <ul>
                            <li>Tag the pre-processed associations and engineer the API to ignore them so the user only received the data they needed</li>
                            <li>Protect the API contracts to reduce impact on the end human users and finding other ways to communicate intent</li>
                            <li>Push aggregation to the frontend, reducing the cognitive load on the API users</li>
                        </ul>

                        <p>This path required more engineering effort but ensured the user experience remained consistent and usable.</p>

                        <p>By reframing the problem around user experience, I influenced senior engineers and protected product clarity at scale.</p>
                    </Col>
                    <Col md={4} lg={3} className="d-flex me-0 ms-0 d-none d-md-inline-flex">
                        <UserFirst />
                    </Col>
                </Row>


                {/*}
                <!-- 
                STRUCTURE: Supportive impact section; present as compact cards or list with subtle icons.
                VISUAL OPTION: Three compact “contribution” chips with hover tooltips.
                -->
                */}

                <h2>Additional Contributions</h2>

                <p>Beyond these moments, I also:</p>

                <ul>
                    <li>
                        <strong>Versioned APIs</strong> to support breaking changes (new error model, advertiser-level associations)
                    </li>
                    <li>
                        <strong>Enabled third-party access</strong> and <strong>designed a user accessibility testing (UAT) framework</strong> for third party calls
                    </li>
                    <li>
                        <strong>Onboarded 4 engineers</strong> and produced thorough documentation for long-term sustainability
                    </li>
                </ul>

                {/*}
                <!-- 
                STRUCTURE: Closing takeaway. Style as a highlighted callout (quote or shaded box).
                VISUAL OPTION: Pull-quote emphasizing “technical rigor × design-driven thinking”.
                -->
*/}
                <ProjectContainer backgroundColor={"purple-faded"} className={"callout-section"}>
                    <h2>Reflection: Hybrid Value</h2>

                    <p>This project demonstrates how I integrate <strong>technical rigor with design-driven thinking</strong>:
                    </p>
                    <Row lg={4} sm={2} xs={1} className="text-center mb-4">
                        <Col><i
                            className="bi bi-arrow-left-right"></i>Delivered stable, scalable production APIs at Amazon DSP
                        </Col>
                        <Col><i
                            className="bi bi-hand-thumbs-up"></i> Championed user and developer experience even in infrastructure-heavy work
                        </Col>
                        <Col><i
                            className="bi bi-lightbulb"></i>Influenced senior engineers through design reframing of technical problems
                        </Col>
                        <Col><i
                            className="bi bi-file-earmark-text"></i>Strengthened team sustainability through onboarding and documentation
                        </Col>
                    </Row>
                    <p>Even as an entry-level engineer, I led by shaping solutions, balancing trade-offs, and ensuring APIs scaled both technically and experientially.</p>
                </ProjectContainer>


            </Container>
        </div>
    );
};

export default FrequencyGroupApis;