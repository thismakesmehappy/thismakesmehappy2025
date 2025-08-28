import ButtonWrapper from 'src/components/ui/ButtonWrapper.tsx';
import {Button} from 'react-bootstrap';
import {asset} from 'src/helpers/assetPath.ts';

const CallToAction = () => {
    return (
        <div className="d-block text-center d-md-flex justify-content-center gap-3">
            <ButtonWrapper href="mailto:bernardo+portfolio@thismakesmehappy.co" variant="primary"
                           className={"mb-3 mb-md-0"}>
                <i className="bi bi-envelope"></i> email
            </ButtonWrapper>
            <ButtonWrapper href="https://www.linkedin.com/in/thismakesmehappy/" target="_blank"
                           variant="primary" className={"mb-3 mb-md-0"}>
                <i className="bi bi-linkedin"></i> LinkedIn
            </ButtonWrapper>
            <ButtonWrapper href="https://github.com/thismakesmehappy" target="_blank"
                           variant="primary" className={"mb-3 mb-md-0"}>
                <i className="bi bi-github"></i> Github
            </ButtonWrapper>
            <Button href={asset("/resume/resume_bernardo_margulis.pdf")} variant="primary">
                <i className="bi bi-file-earmark-arrow-down"></i> Résumé (PDF ~100KB)
            </Button>
        </div>
    );
};

export default CallToAction;
