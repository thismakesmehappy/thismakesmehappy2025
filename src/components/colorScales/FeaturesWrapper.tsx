import ProjectContainer from  'src/components/helpers/ProjectContainer';
import {type ReactNode} from 'react';

interface FeaturesWrapperProps {
    children?: ReactNode;
}

const FeaturesWrapper = ({children}: FeaturesWrapperProps) => {
    return (
        <ProjectContainer padding={false} backgroundColor="aqua-faded"
                          className={"mb-2 mb-md-4 figma-features d-flex justify-content-center align-items-center font-display"}>
            <div>
                {children}
            </div>
        </ProjectContainer>
    );
};
export default FeaturesWrapper;