import {memojiPlacementFlag} from "../../helpers/featureFlags.ts";
import {RandomMemoji} from "../helpers/RandomMemoji.tsx";

const Footer = () => {
    return (
        <div className="gradient-orange-reverse py-6 mt-5 container-fluid text-center">
            {memojiPlacementFlag == "bottom" &&
                <RandomMemoji id="memoji-bottom" className="mb-1 d-md-inline-block" backgroundColor={true} />}
            <p className="h4 mb-0 text-dark">&copy; 2025 Bernardo Margulis.</p>
        </div>
    );
};

export default Footer;