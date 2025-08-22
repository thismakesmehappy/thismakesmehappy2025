import ProjectContainer from "../../../components/helpers/ProjectContainer.tsx";

const UpdateAssociations = () => {
    return (
        <ProjectContainer backgroundColor="purple-faded"
                          className="update-associations w-100 d-flex align-items-center justify-content-center mb-4">
            <div className="text-center w-100">
                <div className="association-group before">
                    <div className="association-call">
                        <div className="association-request">
                            <div className={"association-step"}>
                                <i className="bi bi-1-square"></i>
                                <i className="dash"></i>
                                <i className="bi bi-1-circle"></i>
                            </div>
                            <div className="step">→</div>
                            <div className={"association-step"}>
                                <i className="bi bi-1-square"></i>
                                <i className="dash"></i>
                                <i className="bi bi-circle"></i>
                            </div>
                        </div>
                    </div>
                    <div className="association-call">
                        <div className="association-request">
                            <div className={"association-step"}>
                                <i className="bi bi-1-square"></i>
                                <i className="dash"></i>
                                <i className="bi bi-circle"></i>
                            </div>
                            <div className="step">→</div>
                            <div className={"association-step"}>
                                <i className="bi bi-1-square"></i>
                                <i className="dash"></i>
                                <i className="bi bi-2-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="association-separator"></div>
                <div className="association-group after">
                    <div className="association-call">
                        <div className="association-request">
                            <div className={"association-step"}>
                                <i className="bi bi-1-square"></i>
                                <i className="dash"></i>
                                <i className="bi bi-1-circle"></i>
                            </div>
                            <div className="step">→</div>
                            <div className={"association-step"}>
                                <i className="bi bi-1-square"></i>
                                <i className="dash"></i>
                                <i className="bi bi-2-circle"></i>
                            </div>
                        </div>
                        <div className="association-request">
                            <div className={"association-step"}>
                                <i className="bi bi-2-square"></i>
                                <i className="dash"></i>
                                <i className="bi bi-2-circle"></i>
                            </div>
                            <div className="step">→</div>
                            <div className={"association-step"}>
                                <i className="bi bi-2-square"></i>
                                <i className="dash"></i>
                                <i className="bi bi-circle"></i>
                            </div>
                        </div>

                        <div className="association-request">
                            <div className={"association-step"}>
                                <i className="bi bi-1-square"></i>
                                <i className="dash"></i>
                                <i className="bi bi-circle"></i>
                            </div>
                            <div className="step">→</div>
                            <div className={"association-step"}>
                                <i className="bi bi-1-square"></i>
                                <i className="dash"></i>
                                <i className="bi bi-2-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </ProjectContainer>

    );
};

export default UpdateAssociations;