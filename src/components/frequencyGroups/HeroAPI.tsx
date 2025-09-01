import {Figure, FigureCaption} from "react-bootstrap";
import SimulatedFrequencyGroupScreen from "src/components/frequencyGroups/SimulatedFrequencyGroupScreen.tsx";

const HeroAPI = () => {
    return (
        <div className="w-100 d-flex align-items-center">
            <Figure className="mx-auto">
                <SimulatedFrequencyGroupScreen />
                <FigureCaption>Frequency Groups UI that calls the create endpoint (simulated screen)</FigureCaption>
            </Figure>
        </div>
    );
};

export default HeroAPI
