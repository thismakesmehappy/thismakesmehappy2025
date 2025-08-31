import ButtonWrapper from 'src/components/ui/ButtonWrapper.tsx';
import {asset} from 'src/helpers/assetPath.ts';
import callToAction from 'src/data/callToAction.json'

const CallToAction = () => {
    return (
        <div className="d-block text-center d-md-flex justify-content-center gap-3">
            {callToAction.map(action => {
                    const link = action.asset ? asset(action.link) : action.link;
                    const target = action.blank ? {target: "_blank"} : {};
                    return (
                        <ButtonWrapper href={link} variant="primary"
                                       className={"mb-3 mb-md-0"}
                                       {...target}
                                       key={`call-to-action-${action.label}`}
                        >
                            <i className={`bi bi-${action.icon}`}></i> {action.label}
                        </ButtonWrapper>
                    )
                }
            )
            }
        </div>
    );
};

export default CallToAction;
