import KeyHighlight from  'src/components/helpers/KeyHighlight';
import KeyHighlightCallout from  'src/components/helpers/KeyHighlightCallout';
import KeyHighlights from  'src/components/helpers/KeyHighlights';

const KeyHighlightsScales = () => {
    return (
        <KeyHighlights subtitle={"Key Facts"} xs={1} md={2} lg={3} xl={6} color={"aqua"}>
            <KeyHighlight>
                <KeyHighlightCallout small={true}>
                    Figma plugin
                </KeyHighlightCallout>
                for color blending
            </KeyHighlight>
            <KeyHighlight>
                <KeyHighlightCallout small={true}>
                    Self-initiated project
                </KeyHighlightCallout>
                combining design expertise with engineering execution
            </KeyHighlight>
            <KeyHighlight>
                <KeyHighlightCallout small={true}>
                    Workflow automation
                </KeyHighlightCallout>
                from color selection through asset creation
            </KeyHighlight>
            <KeyHighlight>
                <KeyHighlightCallout small={true}>
                    390+ unit and integration tests
                </KeyHighlightCallout>
                with CI/CD practices
            </KeyHighlight>
            <KeyHighlight>
                <KeyHighlightCallout small={true}>
                    AI collaboration
                </KeyHighlightCallout>
                integrated into coding and strategy
            </KeyHighlight><
            KeyHighlight>
            <KeyHighlightCallout small={true}>
                98% workflow time reduction
            </KeyHighlightCallout>
            30 minutes → 30 seconds
        </KeyHighlight>
        </KeyHighlights>
    );
};

export default KeyHighlightsScales;