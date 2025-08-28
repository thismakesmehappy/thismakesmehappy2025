import {Col, Row} from 'react-bootstrap';
import FeaturesColorScales from 'src/components/colorScales/FeaturesColorScales.tsx';
import FeaturesEndpoints from 'src/components/colorScales/FeaturesEndpoints.tsx';
import FeaturesNeutral from 'src/components/colorScales/FeaturesNeutral.tsx';
import FeaturesSelect from 'src/components/colorScales/FeaturesSelect.tsx';
import FeaturesDefineSteps from 'src/components/colorScales/FeaturesDefineSteps.tsx';
import FeaturesNamingConvention from 'src/components/colorScales/FeaturesNamingConvention.tsx';
import FeaturesPreview from 'src/components/colorScales/FeaturesPreview.tsx';
import FeaturesAssets from 'src/components/colorScales/FeaturesAssets.tsx';

const FeaturesScales = () => {
    return (
        <div>
            <Row md={4} xs={2}>
                <Col>
                    <FeaturesColorScales />
                    <p>Create scales for one or many base colors</p>
                </Col>
                <Col>
                    <FeaturesEndpoints />
                    <p>Choose endpoints (e.g. navy instead of black, or sand instead of white)</p>
                </Col>
                <Col>
                    <FeaturesNeutral />
                    <p>Create a custom neutral scale from endpoints</p>
                </Col>
                <Col>
                    <FeaturesSelect />
                    <p>Eyedrop colors or manually enter values</p>
                </Col>
                <Col>
                    <FeaturesDefineSteps />
                    <p>Define equal steps and custom step intervals</p>
                </Col>
                <Col>
                    <FeaturesNamingConvention />
                    <p>Pick naming conventions (e.g. underscores, casing adjustments)</p>
                </Col>
                <Col>
                    <FeaturesPreview />
                    <p>Preview results dynamically</p>
                </Col>
                <Col>
                    <FeaturesAssets />
                    <p>Generate Figma assets (variables, styles, swatches) or export CSS/SCSS tokens</p>
                </Col>
            </Row>
        </div>
    );
};

export default FeaturesScales;