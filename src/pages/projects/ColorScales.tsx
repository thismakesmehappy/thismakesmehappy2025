import portfolioGrid from 'src/data/portfolioGrid.json';
import useProjectHeader from 'src/hooks/useProjectHeader.ts';
import {useEffect} from 'react';
import type {AccentColors, AllColors} from 'src/helpers/constants.ts';
import {Col, Container, Figure, FigureCaption, Image, Row} from 'react-bootstrap';
import ProjectContainer from 'src/components/helpers/ProjectContainer.tsx';
import "src/styles/_color_scales.scss";
import KeyHighlightsScales from 'src/components/colorScales/KeyHighlightsScales.tsx';
import FeaturesScales from 'src/components/colorScales/FeaturesScales.tsx';
import {asset} from 'src/helpers/assetPath.ts';

const ColorScales = () => {
    const projectData = portfolioGrid.projects.featured.figmaPlugin;
    const color = projectData.accentColor as AccentColors;
    const colorFaded = color + "-faded" as AllColors;


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
        });

        // Cleanup when component unmounts
        return () => setHeaderData(null);
    }, []);

    return (
        <div id="color-scales-page">
            <Container className="py-5">
                <div className="w-100 mb-4 d-flex align-items-center">
                    <ProjectContainer id="color-scales-hero" backgroundColor={colorFaded}
                                      padding={false}>
                        <Image src={asset("colorScales/color_scales_ui_static_mock.png")} className={"img-fluid"}
                               alt={"Screen grab of Figma with the Color Scales plugin open"} />
                    </ProjectContainer>
                </div>


                <KeyHighlightsScales />


                {/*<div className="d-block text-center d-md-flex justify-content-center gap-3">*/}
                {/*    <ButtonWrapper>Github</ButtonWrapper>*/}
                {/*    <ButtonWrapper>Open in Figma</ButtonWrapper>*/}
                {/*</div>*/}

                <Figure>
                    <ProjectContainer backgroundColor="aqua-faded" className="p-0" padding={false}
                                      borderColor={"aqua-dark"} borderWidth={1}>
                        <video className={"w-100"} autoPlay={true} loop={true} controls={true}>
                            <source src={asset("colorScales/scales_in_action.mp4")} type="video/mp4" />
                            <source src={asset("colorScales/scales_in_action.mov")} type="video/mov" />
                            <source src={asset("colorScales/scales_in_action.gif")} />
                        </video>
                    </ProjectContainer>
                    <FigureCaption>Screen recordings showcasing basic interactions for the plugin</FigureCaption>
                </Figure>
                <Figure>
                    <ProjectContainer backgroundColor="aqua-faded" className="p-0" padding={false}
                                      borderColor={"aqua-dark"} borderWidth={1}>
                        <video className={"w-100"} autoPlay={true} loop={true} controls={true}>
                            <source src={asset("colorScales/naming_options.mp4")} type="video/mp4" />
                            <source src={asset("colorScales/naming_options.mov")} type="video/mov" />
                            <source src={asset("colorScales/scales_in_action.gif")} />
                        </video>
                    </ProjectContainer>
                    <FigureCaption>Screen recordings showing modal for naming options</FigureCaption>
                </Figure>
                <h2>Features</h2>
                <FeaturesScales />


                <Figure>
                    <Row xs={1} md={2} className={"gy-4"}>
                        <Col>
                            <ProjectContainer backgroundColor="aqua-faded" padding={false}>
                                <Image src={asset("colorScales/scales_features_variables.png")} className={"img-fluid"}
                                       alt={"Screen grab showing variables in Figma created by the plugin"} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="aqua-faded" className={"img-fluid"} padding={false}>
                                <Image src={asset("colorScales/scales_features_swatches.png")} className={"img-fluid"}
                                       alt={"Screen grab showing color swatches in Figma created by the plugin"} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}>
                                <Image src={asset("colorScales/scales_features_styles.png")} className={"img-fluid"}
                                       alt={"Screen grab showing color styles in Figma created by the plugin"} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="aqua-faded" className={"w-100 overflow-hidden"}>
                                <Image src={asset("colorScales/scales_features_css.png")} className={"img-fluid"}
                                       alt={"CSS variables created by the plugin"} />
                            </ProjectContainer>
                        </Col>
                    </Row>
                    <FigureCaption>The plugin produces several production-ready assets: Figma variables, color swatches, color styles, and CSS and SCSS variables for all the primitive colors and the scales.</FigureCaption>
                </Figure>

                <h2>Technical Architecture</h2>

                <ul>
                    <li><strong>React + TypeScript</strong> for UI and business logic</li>
                    <li><strong>Zustand</strong> for state management</li>
                    <li><strong>Figma Document API</strong> for two-way sync between plugin and design file</li>
                    <li><strong>NPM color libraries</strong> for naming and accessibility support</li>
                    <li><strong>Jest</strong> for unit and integration tests</li>
                    <li><strong>Continuous improvement and development</strong></li>
                </ul>

                <h2>The Problem</h2>

                <p>During a design study, I calculated color scales manually—tedious, error-prone work that slowed creative
                   flow. I reframed this as a design challenge: build a smarter tool that
                   preserves momentum, ensures precision, and integrates into workflows.</p>

                <Figure>
                    <ProjectContainer id="color-scales-manual-scales" backgroundColor={colorFaded}
                                      padding={false}>
                        <Image src={asset("colorScales/scales_inspiration.png")} className={"img-fluid"}
                               alt={"Screen grab of a Figma file with a color study containing a number of inspiration images and color swatches, showcasing a group of color scales"} />
                    </ProjectContainer>
                    <FigureCaption>The idea for the plugin came from calculating scales for a design study</FigureCaption>
                </Figure>

                <h2>Product Discovery & Creative Problem-Solving</h2>

                <p>I approached this as a <strong>product and workflow challenge</strong>. To clarify user needs, I mapped user stories: select base colors, set preferences, preview scales, generate assets.
                </p>

                <p>I explored existing plugins and saw two gaps: existing plugins generated only basic tints/shades, and didn't produce production-ready assets automatically. This confirmed there was space to create something more useful.
                </p>
                <p>With both design and engineering skills, I sketched concepts, prototyped flows in Figma, and built an MVP. From there I
                   iterated—adding, removing, and refining features.</p>

                <Figure>
                    <Row xs={1} md={2} className={"gy-4"}>
                        <Col>
                            <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}
                                              borderColor={"aqua-dark"} borderWidth={1}>
                                <Image src={asset("colorScales/sketches_notability/scalesSketchPage5.png")}
                                       className={"img-fluid"}
                                       alt={"Screen grab of a list of user stories written by hand"} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}
                                              borderColor={"aqua-dark"} borderWidth={1}>
                                <Image src={asset("colorScales/sketches_notability/scalesSketchPage6.png")}
                                       className={"img-fluid"}
                                       alt={"Screen grab of a list of user stories written by hand with an initial sketch"} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}
                                              borderColor={"aqua-dark"} borderWidth={1}>
                                <Image src={asset("colorScales/sketches_notability/scalesSketchPage2.png")}
                                       className={"img-fluid"}
                                       alt={"Hand-drawn sketches showcasing screen explorations"} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}
                                              borderColor={"aqua-dark"} borderWidth={1}>
                                <Image src={asset("colorScales/sketches_notability/scalesSketchPage7.png")}
                                       className={"img-fluid"}
                                       alt={"Hand-drawn sketches showcasing component explorations"} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}
                                              borderColor={"aqua-dark"} borderWidth={1}>
                                <Image src={asset("colorScales/scales_figma_sketch_v1.png")}
                                       className={"img-fluid"}
                                       alt={"Early Figma sketch showing layouts and components"} />
                            </ProjectContainer>
                        </Col>
                        <Col>
                            <ProjectContainer backgroundColor="aqua-faded" className={"w-100"} padding={false}
                                              borderColor={"aqua-dark"} borderWidth={1}>
                                <Image src={asset("colorScales/scales_figma_sketch_v2.png")}
                                       className={"img-fluid"} alt={"A more advanced Figma prototype"} />
                            </ProjectContainer>
                        </Col>
                    </Row>
                    <FigureCaption>Even as a self-initiated project, I began by scketching and iterating before spinning out code.</FigureCaption>
                </Figure>

                <h2>AI Collaboration</h2>
                <p>I used AI as a <strong>strategic partner</strong>. Sometimes it built full features, sometimes we collaborated, sometimes it helped
                   me ideate, and other times I coded entirely by hand. My engineering background helped choose the right tool at the right
                   time.
                </p>
                <ul>
                    <li>
                        <strong>Claude Code:</strong> Feature building, test suite generation, refactoring, code collaboration
                    </li>
                    <li><strong>Junie (JetBrains):</strong> Quick technical Q&A</li>
                    <li><strong>ChatGPT:</strong> Strategy validation, idea exploration, structural improvements</li>
                    <li>
                        <strong>Manual Coding:</strong> Validate AI outputs; UI, business logic, styling and features where precision mattered most
                    </li>
                </ul>
                <p>This mix reduced development time by ~40–50% while I retained ownership of product vision, UI, and quality.</p>


                {/*<h2>Early Validation & Impact</h2>*/}

                {/*<strong>Placeholder: User Adoption Metrics</strong> *(to be added post-launch: downloads, workflow savings, feature usage patterns,*/}
                {/*community feedback)**/}

                {/*Early peer feedback confirmed the value: generating <strong>production-ready assets</strong> elevated the plugin beyond color math*/}
                {/*into a <strong>workflow integration tool</strong>.*/}

                {/*\[Visual: Designer quotes confirming value] */}

                <ProjectContainer backgroundColor={"aqua-faded"} className={"callout-section scales"}>
                    <h2>Reflection: Cross-functional Product Design</h2>


                    <p>This project synthesizes my hybrid strengths:</p>

                    <Row lg={4} sm={2} xs={1} className="text-center mb-4">
                        <Col><i
                            className="bi bi-arrow-left-right"></i>Creative Problem-solving by reframing repetitive work into workflow automation
                        </Col>
                        <Col><i
                            className="bi bi-hand-thumbs-up"></i> Designed and engineered a complete tool independently
                        </Col>
                        <Col><i
                            className="bi bi-lightbulb"></i>390+ tests, CI/CD practices, modern React + TypeScript
                        </Col>
                        <Col><i
                            className="bi bi-file-earmark-text"></i>Smart AI collaboration, Figma integration, design systems expertise
                        </Col>
                    </Row>

                    <strong>Color Scales</strong> transformed a manual bottleneck into a streamlined workflow enhancer. More importantly, it
                                                  demonstrates how I bridge design and engineering to deliver <strong>products that scale both technically and experientially</strong>.

                </ProjectContainer>
            </Container>
        </div>
    );
};

/*


---

📖 <strong>Word Count:</strong> \~582 (excluding placeholders)


* */

export default ColorScales;