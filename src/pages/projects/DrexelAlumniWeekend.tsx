import {Col, Container, Figure, FigureCaption, Image, Row} from 'react-bootstrap';
import portfolioGrid from 'src/data/portfolioGrid.json';
import KeyHighlights from 'src/components/helpers/KeyHighlights.tsx';
import KeyHighlightCallout from 'src/components/helpers/KeyHighlightCallout.tsx';
import KeyHighlight from 'src/components/helpers/KeyHighlight.tsx';
import "src/styles/_alumni-weekend.scss"
import {useEffect} from 'react';
import useProjectHeader from 'src/hooks/useProjectHeader.ts';
import ProjectContainer from 'src/components/helpers/ProjectContainer.tsx';
import type {AccentColors} from 'src/helpers/constants.ts';
import {asset} from "src/helpers/assetPath.ts";

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
        });

        // Cleanup when component unmounts
        return () => setHeaderData(null);
    }, []);

    return (
        <div id="alumni-weekend-page">

            {/* Project Content */}

            <Container className="py-5">
                <ProjectContainer backgroundColor="yellow-faded" className={"mb-4"} padding={false}>
                    <Image src={asset("aw/aw_photo_step.jpg")} className={"img-fluid"}
                           alt={"Visual explorations for the Glitch concept"} />
                </ProjectContainer>

                <KeyHighlights subtitle={"Key Facts"} xs={1} lg={5} color={"yellow"}>
                    <KeyHighlight>
                        <KeyHighlightCallout small={true}>
                            Creative Leadership
                        </KeyHighlightCallout>
                        for comprehensive brand and messaging strategy within existing resourcing
                    </KeyHighlight>
                    <KeyHighlight>
                        <KeyHighlightCallout small={true}>
                            Accelerated timeline
                        </KeyHighlightCallout>
                        kicking off 4 months earlier to streamline processes and front-load key decisions
                    </KeyHighlight>
                    <KeyHighlight>
                        <KeyHighlightCallout small={true}>
                            Cross-functional collaboration
                        </KeyHighlightCallout>
                        10 team members across 4 disciplines (visual, editorial, digital, operations)
                    </KeyHighlight>
                    <KeyHighlight>
                        <KeyHighlightCallout small={true}>
                            Mentorship in action
                        </KeyHighlightCallout>
                        developed team skills while ensuring quality standards
                    </KeyHighlight>
                    <KeyHighlight>
                        <KeyHighlightCallout small={true}>
                            400+ attendees
                        </KeyHighlightCallout>
                        with a 100% stakeholder satisfaction rating
                    </KeyHighlight>
                </KeyHighlights>


                {/* <!--
STRUCTURE: Keep concise; pair with a simple “Before API → After API” explainer.
VISUAL OPTIONS:
- Two-column explainer: left = “Backend had FGs, no access”; right = “APIs expose FGs at scale”
- Small KPI strip for the three metrics.
-->*/}

                <ProjectContainer id={"badges"} className={"mb-4"}>
                    <Row xs={4} className="text-center align-items-center row-gap-0">
                        <Col className={"p-1 p-md-3 p-lg-4"}>
                            <Image src={asset("aw/badges/more_fun.gif")} className={"img-fluid badge1"}
                                   alt={"Animated badge: More Fun"} />
                        </Col>
                        <Col className={"p-1 p-md-3 p-lg-4"}>
                            <Image src={asset("aw/badges/guaranteed.gif")} className={"img-fluid badge2"}
                                   alt={"Animated badge: Fun Times Guaranteed"} />
                        </Col>


                        <Col className={"p-1 p-md-3 p-lg-4"}>
                            <Image src={asset("aw/badges/a_feast.gif")} className={"img-fluid badge3"}
                                   alt={"Animated badge: A Feast for your Eyes"} />
                        </Col>
                        <Col className={"p-1 p-md-3 p-lg-4"}>
                            <Image src={asset("aw/badges/curated.gif")} className={"img-fluid badge4"}
                                   alt={"Animated badge: Finely Curated Events"} />
                        </Col>
                        <Col className={"p-1 p-md-3 p-lg-4"} xs={{offset: 1}}>
                            <Image src={asset("aw/badges/and_more.gif")} className={"img-fluid badge5"}
                                   alt={"Animated badge: All You've Missed and More"} />
                        </Col>

                        <Col className={"p-1 p-md-3 p-lg-4"}>
                            <Image src={asset("aw/badges/no_fomo.gif")} className={"img-fluid badge6"}
                                   alt={"Animated badge: No FOMO"} />
                        </Col>
                        <Col className={"p-1 p-md-3 p-lg-4"}>
                            <Image src={asset("aw/badges/live_from.gif")} className={"img-fluid badge7"}
                                   alt={"Animated badge: Live from Drexel University"} />
                        </Col>

                        {/*<Col>*/}
                        {/*    <Image src={asset("aw/badges/dubac.gif")} className={"img-fluid"}*/}
                        {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                        {/*</Col>*/}
                        {/*<Col>*/}
                        {/*    <Image src={asset("aw/badges/live_and_in_person.gif")} className={"img-fluid"}*/}
                        {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                        {/*</Col>*/}

                        {/*<Col>*/}
                        {/*    <Image src={asset("aw/badges/dragon_special.gif")} className={"img-fluid"}*/}
                        {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                        {/*</Col>*/}

                        {/*<Col>*/}
                        {/*    <Image src={asset("aw/badges/enjoy.gif")} className={"img-fluid"}*/}
                        {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                        {/*</Col>*/}
                        {/*<Col>*/}
                        {/*    <Image src={asset("aw/badges/fan_fave.gif")} className={"img-fluid"}*/}
                        {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                        {/*</Col>*/}
                        {/*<Col>*/}
                        {/*    <Image src={asset("aw/badges/fun_for_all.gif")} className={"img-fluid"}*/}
                        {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                        {/*</Col>*/}
                        {/*<Col>*/}
                        {/*    <Image src={asset("aw/badges/old_friends.gif")} className={"img-fluid"}*/}
                        {/*           alt={"Animated badge: A Feast for your Eyes"} />*/}
                        {/*</Col>*/}


                    </Row>
                </ProjectContainer>
                <h2>Challenge and Strategic Context</h2>

                <p>Alumni Weekend 2022 posed an opportunity to re-engage alumni after two years away from on-campus events. The creative challenge was to spark excitement and belonging, and to motivate alumni to return in person. Events ranged from intimate, 20-person reunions to a 400+ person, campus-wide celebration </p>

                <p>This required a <strong>brand system designed like a product </strong>: adaptable across user contexts, consistent in message, and efficient to execute.
                </p>

                <p>Alumni Relations organized the event, while my Marketing and Communications team provided strategy, creative, and execution.</p>

                <Row className="mb-4 row-gap-4">
                    <Col md={6}>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_social_flat.png")} className={"img-fluid badge3"}
                                   alt={"Branded social media story"} />
                        </ProjectContainer>
                    </Col>
                    <Col md={6}>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <video className={"w-100"} autoPlay={true} loop={true} controls={false}
                                   poster={asset("aw/aw_social_anim.png")}>
                                <source src={asset("aw/aw_social_anim.mp4")} type="video/mp4" />
                                <img src={asset("aw/aw_social_anim.gif")} alt={"Animated branded social media post"} />
                            </video>
                        </ProjectContainer>
                    </Col>
                    <Col md={12}>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <video className={"w-100"} autoPlay={true} loop={true} controls={false}
                                   poster={asset("aw/aw_email.png")}>
                                <source src={asset("aw/aw_email.mp4")} type="video/mp4" />
                                <img src={asset("aw/aw_email.gif")} alt={"Animated branded email"} />
                            </video>
                        </ProjectContainer>
                    </Col>
                    <Col>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_web.png")} className={"img-fluid badge3"}
                                   alt={"Branded web banner"} />
                        </ProjectContainer>
                    </Col>
                </Row>

                <h2>Creative System</h2>

                <p>We selected the concept <strong>“Live and In Person”</strong> drawing from vintage sticker graphics to evoke nostalgia and excitement. The theme balanced acknowledgment of alumni absence with anticipation for the irreplaceable experience of being together again.
                </p>
                <ul className={"d-md-none"}>
                    <li><strong>Messaging:</strong> bold, nostalgic language to spark excitement</li>
                    <li>
                        <strong>Visuals:</strong> dynamic typography, holding shapes, and Drexel’s blue and gold palette
                    </li>
                    <li>
                        <strong>System:</strong> structured key art gave designers autonomy while maintaining consistency
                    </li>
                    <li>
                        <strong>Scope:</strong> 50+ digital, print, and environmental touchpoints
                    </li>
                </ul>
                <ProjectContainer backgroundColor="yellow-faded"
                                  className={'d-none d-md-block mb-4 callout-section alumni text-center'}>
                    <Row md={2}>
                        <Col>
                            <i
                                className="bi bi-megaphone"></i>
                            <p className={"mb-1"}><strong>Messaging</strong></p>
                            <p> Bold, nostalgic language to spark excitement</p>
                        </Col>
                        <Col>
                            <i
                                className="bi bi-eye"></i>
                            <p className={"mb-1"}><strong>Visuals</strong></p>
                            <p>Dynamic typography, holding shapes, and Drexel’s blue and gold palette </p>
                        </Col>
                        <Col>
                            <i
                                className="bi bi-diagram-2"></i>
                            <p className={"mb-1"}><strong>System</strong></p>
                            <p>Structured key art gave designers autonomy while maintaining consistency</p>
                        </Col>
                        <Col>
                            <i
                                className="bi bi-binoculars"></i>
                            <p className={"mb-1"}><strong>Scope</strong></p>
                            <p>50+ digital, print, and environmental touchpoints</p>
                        </Col>
                    </Row>
                </ProjectContainer>

                <Row className="mb-4 row-gap-4">
                    <Col md={12}>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_postcard_in_hand.png")} className={"img-fluid"}
                                   alt={"A branded postcard invitation hand"} />
                        </ProjectContainer>
                    </Col>
                    <Col md={12}>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_postcard.png")} className={"img-fluid"}
                                   alt={"A branded postcard invitation leaning against a wall, and we can see both the front and the back"} />
                        </ProjectContainer>
                    </Col>
                    <Col md={12}>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_50invite_cover.png")} className={"img-fluid badge3"}
                                   alt={"Cover for invitation booklets for Golden Dragon Society"} />
                        </ProjectContainer>
                    </Col>
                    <Col md={12}>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_50invite_inside1_insitu.png")} className={"img-fluid badge3"}
                                   alt={"Inside spread of invitation booklet showing a schedule of events"} />
                        </ProjectContainer>
                    </Col>
                    <Col md={12}>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_50invite_inside1.png")} className={"img-fluid badge3"}
                                   alt={"Inside spread of invitation booklet showing several information sections, including planning details"} />
                        </ProjectContainer>
                    </Col>

                </Row>

                <h2>Cross-Functional Integration</h2>

                <p>Systematic collaboration ensured consistency across every medium. Within Marcomm, we iterated visuals, copy, digital strategy, and operations. With Alumni, we cross-pollinated programming and messaging.</p>

                <p>Even small details reinforced the experience: from custom beer cups and tote bags, to mapped projections, and step-and-repeat backdrops. Whether alumni opened an invitation at home, navigated campus, or shared photos online, they encountered a unified brand.</p>

                <Row md={2} className="mb-4 row-gap-4">
                    <Col>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_swag_bag.png")} className={"img-fluid badge3"}
                                   alt={"Alumni Weekend branded tote back on a neutral background"} />
                        </ProjectContainer>
                    </Col>
                    <Col>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_swag_cup.png")} className={"img-fluid badge3"}
                                   alt={"Alumni Weekend branded beer cup on a neutral background"} />
                        </ProjectContainer>
                    </Col>
                    <Col>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_photo_napkins.jpg")} className={"img-fluid badge3"}
                                   alt={"Alumni Weekend branded cocktail napkin on a table"} />
                        </ProjectContainer>
                    </Col>
                    <Col>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_photo_cups.jpg")} className={"img-fluid badge3"}
                                   alt={"Two men wearing hats, each holding an Alumni Weekend branded cup filled with beer"} />
                        </ProjectContainer>
                    </Col>
                    <Col>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_photo_sign.jpg")} className={"img-fluid badge3"}
                                   alt={"Signage for the Drexel Makers Market Festival registration"} />
                        </ProjectContainer>
                    </Col>
                    <Col>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_photo_tee.jpg")} className={"img-fluid badge3"}
                                   alt={"A group of young men, two with their back to the camera, the third between them wearing an Alumni Weekend branded t-shirt"} />
                        </ProjectContainer>
                    </Col>
                    <Col>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_photo_tee_shoulder.png")} className={"img-fluid badge3"}
                                   alt={"Two women at an evening party, one of them wearing the Alumni Weekend branded t-shirt with the neck cut off and off her shoulder"} />
                        </ProjectContainer>
                    </Col>
                    <Col>
                        <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                            <Image src={asset("aw/aw_photo_projection.png")} className={"img-fluid badge3"}
                                   alt={"Light projection of Mario the Dragon holding a sign that says 'Thanks for Joining Us' and next to it 'See you next year!' with the Drexel Alumni logo"} />
                        </ProjectContainer>
                    </Col>
                </Row>
                <h2>Technical Leadership and Team Development</h2>

                <p>Efficient workflows created opportunities to scale my team’s skills:</p>

                <ul>
                    <li>Paired senior and junior designers in a <strong>peer mentorship loop</strong>, boosting confidence and expanding my creative capacity
                    </li>
                    <li>A junior designer strengthened their typography skills by owning all editorial work. With support, they balanced experimentation and execution</li>
                    <li>A senior designer interested in motion, led <strong>motion graphics and projection design</strong> for brand assets and for the closing event—broadening our creative toolkit while delivering new value to stakeholders
                    </li>
                    <li>Paired junior designer with social media manager, empowering them to ideate independently and present their best concepts to the team</li>
                </ul>

                <h2>The Process</h2>

                <p>We followed our now tried-and-true process of collaboration and front-loading creative development. </p>
                <p>Before any creative work, Marcomm and Alumni aligned on shared goals:</p>
                <ul>
                    <li>Maximize attendance for the signature event</li>
                    <li>Welcome alumni back with a sense of belonging</li>
                    <li>Celebrate reunions and campus pride</li>
                    <li>Demonstrate the ongoing value of on-campus programming</li>
                </ul>
                <p>With clear goals, the Marcomm team ideated and brainstormed.</p>
                <Figure>
                    <FigureCaption>Artifacts from the digital ideation session</FigureCaption>
                    <Row className={"row-gap-4"}>
                        <Col>
                            <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                                <Image src={asset("aw/aw_ideation_1.png")} className={"img-fluid"}
                                       alt={"Ideation board with post-its and the prompt: Alumni Weekend 2022 Will Be Awesome Because..."} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                                <Image src={asset("aw/aw_ideation_2.png")} className={"img-fluid"}
                                       alt={"Ideation board with post-its and the prompt: Alumni Journey"} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                                <Image src={asset("aw/aw_ideation_3.png")} className={"img-fluid"}
                                       alt={"Ideation board with post-its and the prompt: Big Idea Time!"} />
                            </ProjectContainer>
                        </Col>
                    </Row>
                </Figure>


                <p>We ideated content, visuals and tactics, which we narrowed it down to two main concepts. We presented to our partners, and with their selection and feedback, we finalized the concept and developed key art to facilitate the rest of the creative process.</p>
                <Figure>
                    <FigureCaption>Mood boards, initial explorations, and pages from the concept presentation</FigureCaption>
                    <Row md={2} className={"row-gap-4"}>
                        <Col>
                            <ProjectContainer backgroundColor="yellow-faded" padding={false}>
                                <Image src={asset("aw/aw_moodboard_glitch.png")} className={"img-fluid"}
                                       alt={"Mood board for the Glitch concept"} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                              borderColor={"yellow"} borderWidth={1}>
                                <Image src={asset("aw/aw_exploration_glitch.png")} className={"img-fluid"}
                                       alt={"Visual explorations for the Glitch concept"} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                              borderColor={"yellow"} borderWidth={1}>
                                <Image src={asset("aw/aw_moodboard_bbbb.png")} className={"img-fluid"}
                                       alt={"Mood board for the Live and in Person concept"} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                              borderColor={"yellow"} borderWidth={1}>
                                <Image src={asset("aw/aw_exploration_bbbb.png")} className={"img-fluid"}
                                       alt={"Visual explorations for the Live and in Person concept"} />
                            </ProjectContainer>
                        </Col>
                        <Col xs={6} md={3}>
                            <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                              borderColor={"yellow"} borderWidth={1}>
                                <Image src={asset("aw/aw_deck_04.png")} className={"img-fluid"}
                                       alt={"Page from a presentation deck highlighting marketing goals"} />
                            </ProjectContainer>
                        </Col>
                        <Col xs={6} md={3}>
                            <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                              borderColor={"yellow"} borderWidth={1}>
                                <Image src={asset("aw/aw_deck_09.png")} className={"img-fluid"}
                                       alt={"Page from a presentation deck highlighting key art for Glitch"} />
                            </ProjectContainer>
                        </Col>
                        <Col xs={6} md={3}>
                            <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                              borderColor={"yellow"} borderWidth={1}>
                                <Image src={asset("aw/aw_deck_25.png")} className={"img-fluid"}
                                       alt={"Page from a presentation deck highlighting key art for Live and in Person"} />
                            </ProjectContainer>
                        </Col>
                        <Col xs={6} md={3}>
                            <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                              borderColor={"yellow"} borderWidth={1}>
                                <Image src={asset("aw/aw_deck_35.png")} className={"img-fluid"}
                                       alt={"Page from a presentation deck highlighting a closing slide"} />
                            </ProjectContainer>
                        </Col>
                    </Row>

                </Figure>
                <p> For 2022, I accelerated this shift, starting four months earlier than usual. This <strong>expanded discovery phase</strong> allowed us to prototype and validate early, with deeper collaboration and alignment, and ultimately more deliverables with fewer resources.
                </p>


                <h2>Continuous Improvement</h2>

                <p>When I joined Drexel five years prior, signature events were fragmented: designed in silos, inconsistent in style, and generic in messaging.</p>

                <p>I introduced three systematic changes:</p>
                <ul>
                    <li>Treat events as <strong>branding problems</strong> with consistent messaging across touchpoints
                    </li>
                    <li><strong>Front-load creative exploration</strong> to secure partner buy-in early</li>
                    <li>Center alumni representation to foster connection and engagement</li>
                </ul>
                <Figure>
                    <FigureCaption>An audit of the 2016 and 2017 creative showed there was no consistentcy and visuals relied heavily on clipart</FigureCaption>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false} borderColor={"yellow"}
                                      borderWidth={1}
                                      className={"mb-4"}>
                        <Image src={asset("aw/aw18_audit.png")} className={"img-fluid"}
                               alt={"Ideation board with post-its and the prompt: Alumni Journey"} />
                    </ProjectContainer>
                </Figure>
                <p>At first, both Marcomm and Alumni Relations resisted. I focused on what I could control—developing strong visual concepts, codifying key art, and empowering my team with reusable systems.</p>

                <Figure>
                    <FigureCaption>When the team resisted the idea of treating events as a branding problem, I focused on showcasing the impact of a consistent visual style </FigureCaption>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                      className={"mb-4"}>
                        <Image src={asset("aw/aw18_exploration.png")} className={"img-fluid"}
                               alt={"Ideation board with post-its and the prompt: Alumni Journey"} />
                    </ProjectContainer>
                </Figure>

                <p>
                    <strong>The impact:</strong> a 12% increase in registrations, stronger alumni engagement, and overwhelmingly positive feedback.
                </p>

                <p>Since gaining my team's trust, we moved to a collaborative process, delivering measurable outcomes while building long-term creative capacity.
                </p>

                <ul>
                    <li>
                        <strong>Before:</strong> Inconsistent, generic visuals; slow, siloed workflows; low partner trust.
                    </li>
                    <li><strong>After:</strong> Unified system, predictable quality, faster output, measurable results.
                    </li>
                </ul>

                <Figure>
                    <FigureCaption>Once the team saw the benefits of collaborating, this became the default </FigureCaption>
                    <ProjectContainer backgroundColor="yellow-faded" padding={false}
                                      className={"mb-4"}>
                        <Image src={asset("aw/drexel_dt_group.jpg")} className={"img-fluid"}
                               alt={"Ideation board with post-its and the prompt: Alumni Journey"} />
                    </ProjectContainer>
                </Figure>


                <ProjectContainer backgroundColor={"yellow-faded"} className={"callout-section alumni"}>
                    <h2>Reflection: Creative Leadership Meets Business Goals</h2>

                    <p>This project demonstrates how I combine <strong>creative direction, systems thinking, and visual craft</strong> to deliver institutional and team impact:
                    </p>
                    <Row lg={4} sm={2} xs={1} className="text-center mb-4">
                        <Col><i
                            className="bi bi-bullseye"></i>Align creative systems with institutional goals
                        </Col>
                        <Col><i
                            className="bi bi-person-heart"></i> Empower individuals,partners and teams through collaboration
                        </Col>
                        <Col><i
                            className="bi bi-gear"></i> Apply systematic thinking to improve quality and build organizational capacity
                        </Col>
                        <Col><i
                            className="bi bi-tree"></i>Foster continuous growth for individuals, teams, and the institution
                        </Col>
                    </Row>
                    <p>Alumni Weekend reflects my leadership approach: shaping strategy and creative, elevating people and teams, and
                       building scalable systems that deliver impact with clarity and efficiency.</p>
                </ProjectContainer>


            </Container>
        </div>
    );
};

export default DrexelAlumniWeekend;