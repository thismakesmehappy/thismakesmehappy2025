import AnimatedButton from  'src/components/ui/AnimatedButton';
import {asset} from 'src/helpers/assetPath.ts';
import {SPACING} from 'src/helpers/spacingConstants.ts';
import callToAction from 'src/data/callToAction.json'

const CallToAction = () => {
    return (
        <div className={`d-block text-center d-md-flex justify-content-center ${SPACING.BUTTON_GROUP}`}>
            {callToAction.map(action => {
                    const link = action.asset ? asset(action.link) : action.link;
                    const target = action.blank ? {target: "_blank"} : {};
                    return (
                        <AnimatedButton href={link} variant="primary"
                                       className={SPACING.BUTTON_RESPONSIVE}
                                       {...target}
                                       key={`call-to-action-${action.label}`}
                        >
                            <i className={`bi bi-${action.icon}`}></i> {action.label}
                        </AnimatedButton>
                    )
                }
            )
            }
        </div>
    );
};

export default CallToAction;
