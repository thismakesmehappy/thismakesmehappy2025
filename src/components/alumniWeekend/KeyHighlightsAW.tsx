import KeyHighlight from "src/components/helpers/KeyHighlight.tsx";
import KeyHighlightCallout from "src/components/helpers/KeyHighlightCallout.tsx";
import KeyHighlights from "src/components/helpers/KeyHighlights.tsx";

const KeyHighlightsAW = () => {
    return (
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
    );
};

export default KeyHighlightsAW
