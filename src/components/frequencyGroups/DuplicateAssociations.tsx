import ProjectContainer from  'src/components/helpers/ProjectContainer';

const UpdateAssociations = () => {
    return (
        <ProjectContainer backgroundColor="purple-faded"
                          className="update-associations w-100 d-flex align-items-center justify-content-center mb-4">
            <div className="text-center w-100">
                <div className="association-call duplicates">
                    <div className="association-request">
                        <div className={"association-step"}>
                            <i className="bi bi-1-square"></i>
                            <i className="dash"></i>
                            <i className="bi bi-1-circle"></i>
                        </div>
                    </div>
                    <div className="association-request ghost">
                        <div className={"association-step"}>
                            <i className="bi bi-1-square"></i>
                            <i className="dash"></i>
                            <i className="bi bi-1-circle"></i>
                        </div>
                    </div>
                    <div className="association-request ghost">
                        <div className={"association-step"}>
                            <i className="bi bi-1-square"></i>
                            <i className="dash"></i>
                            <i className="bi bi-1-circle"></i>
                        </div>
                    </div>
                    <div className="association-request ghost">
                        <div className={"association-step"}>
                            <i className="bi bi-1-square"></i>
                            <i className="dash"></i>
                            <i className="bi bi-1-circle"></i>
                        </div>
                    </div>
                    <div className="association-request ghost">
                        <div className={"association-step"}>
                            <i className="bi bi-1-square"></i>
                            <i className="dash"></i>
                            <i className="bi bi-1-circle"></i>
                        </div>
                    </div>
                </div>

            </div>

        </ProjectContainer>

    );
};

export default UpdateAssociations;