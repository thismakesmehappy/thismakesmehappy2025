import {memojiPlacementFlag} from 'src/helpers/featureFlags.ts';
import RandomMemoji from 'src/components/helpers/RandomMemoji.tsx';
import {useLocation} from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <div className="gradient-orange-reverse py-6 mt-5 container-fluid text-center">
            {memojiPlacementFlag == "bottom" &&
                <RandomMemoji
                    key={location.pathname}
                    id="memoji-bottom"
                    className="mb-1 d-md-inline-block"
                    backgroundColor={true}
                    backgroundColorVariant={"light"}
                />}
            <p className="h4 mb-0 text-dark">&copy; 2025 Bernardo Margulis.</p>
        </div>
    );
};

export default Footer;