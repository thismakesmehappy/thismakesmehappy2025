import FeaturesWrapper from "src/components/colorScales/FeaturesWrapper.tsx";
import {Badge} from "react-bootstrap";

const FeaturesDefineSteps = () => {
    return (
        <FeaturesWrapper>
            <div id={"steps"}>
                <Badge bg={"aqua-dark"}>50</Badge>
                <Badge bg={"aqua-dark"}>250</Badge>
                <Badge bg={"aqua-dark"}>500</Badge>
                <Badge bg={"aqua-dark"}>750</Badge>
                <Badge bg={"aqua-dark"}>950</Badge>
            </div>
        </FeaturesWrapper>
    );
};

export default FeaturesDefineSteps;