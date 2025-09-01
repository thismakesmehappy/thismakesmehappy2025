import KeyHighlight from "src/components/helpers/KeyHighlight.tsx";
import KeyHighlightCallout from "src/components/helpers/KeyHighlightCallout.tsx";
import KeyHighlights from "src/components/helpers/KeyHighlights.tsx";
import Section from "src/components/layout/Section.tsx";

const KeyHighlightsAPI = () => {
    return (
        <Section>
            <KeyHighlights xs={1} lg={5} color={"purple"}>
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
        </Section>
    );
};

export default KeyHighlightsAPI
