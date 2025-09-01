import {memojiPlacementFlag} from 'src/helpers/featureFlags.ts';
import RandomMemoji from 'src/components/helpers/RandomMemoji';
import {Link, useLocation} from 'react-router-dom';
import callToAction from 'src/data/callToAction.json';
import {asset} from "src/helpers/assetPath.ts";

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
            <div></div>
            <div className={"d-inline-block mx-auto"}>
                <p className="h4 mb-0 text-dark">&copy; 2025 Bernardo Margulis.</p>
                <div className={"mx-auto d-flex justify-content-between mt-2 text-dark"}>
                    {
                        callToAction.map(action => {
                                const link = action.asset ? asset(action.link) : action.link;
                                const target = action.blank ? {target: "_blank"} : {};
                                return (
                                    <div className="text-center font-display" key={`footer-icon-${action.label}`}>
                                        <Link to={link} {...target} className={"text-pink footer-link"} tabIndex={0}>
                                            <div><i className={`bi bi-${action.icon}`}></i></div>
                                            <div>{action.label}</div>
                                        </Link>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;