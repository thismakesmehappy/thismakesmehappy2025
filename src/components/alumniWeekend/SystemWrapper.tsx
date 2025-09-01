import ProjectContainer from "src/components/helpers/ProjectContainer.tsx";
import type {ReactNode} from "react";

interface SystemWrapperProps {
    children?: ReactNode;
}

const SystemWrapper = ({children}: SystemWrapperProps) => {
    return (
        <ProjectContainer padding={false} backgroundColor="yellow-faded"
                          className={"mb-1 mb-md-2 figma-features d-flex justify-content-center align-items-center font-display "}>
            <div>
                {children}
            </div>
        </ProjectContainer>
    );
};

export default SystemWrapper
