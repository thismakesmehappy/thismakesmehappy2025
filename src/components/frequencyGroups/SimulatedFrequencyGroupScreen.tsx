import {Badge} from "react-bootstrap";
import ProjectContainer from "../../components/helpers/ProjectContainer.tsx";
import {useState} from "react";

export const SimulatedFrequencyGroupScreen = () => {
    const [selectedTimeUnit, setSelectedTimeUnit] = useState(false);
    return (
        <ProjectContainer id="simulated-frequency-group" borderColor="purple-dark" borderWidth={1} padding={false}>
            <div id="simulated-frequency-group-nav"
                 className="bg-purple-dark p-3 text-white font-display d-flex justify-content-between ">
                <div>
                    <i className="bi bi-amazon me-2" />
                    <span>Ads</span>
                </div>
                <div>
                    <Badge pill={true}
                           className="bg-white text-purple-dark me-2">Manager Account</Badge>
                    <i className="bi bi-rocket-takeoff me-2" />
                    <i className="bi bi-question-circle me-2" />
                    <i className="bi bi-person-circle" />
                </div>
            </div>
            <div id="simulated-frequency-group-body" className="p-3 text-purple-dark row">
                <div id="simulated-frequency-group-left"
                     className="text-purple-dark d-flex flex-column border-end border-2 border-purple-dark pe-3 col col-auto">
                    <i className="bi bi-suitcase mb-2" />
                    <i className="bi bi-grid mb-2" />
                    <i className="bi bi-credit-card mb-2" />
                    <i className="bi bi-diagram-2 mb-2" />
                    <i className="bi bi-shield mb-2" />
                    <i className="bi bi-stack mb-2" />
                    <i className="bi bi-arrow-up mb-2" />
                    <i className="bi bi-bar-chart mb-2" />
                    <i className="bi bi-hdd-network mb-2" />
                    <i className="bi bi-grid-3x3 mb-2" />
                    <i className="bi bi-gear" />

                </div>
                <div id="simulated-frequency-group-right" className="ms-2 col ms-0 me-0">
                    <p className="font-display">New Frequency Group <i className="bi bi-star" /></p>
                    <div className="border border-2 border-purple-dark container-fluid p-3">
                        <div className="pb-3 mb-3 border-bottom border-2 border-purple-dark">
                            <label htmlFor="frequencyGroupName" className="me-2 form-label fw-bold">Name</label>
                            <input type={"text"} id="frequencyGroupName" placeholder="Test"
                                   className="text-purple-dark bg-purple-faded border-0 form-control" />
                        </div>
                        <div>
                            <label htmlFor="frequencyGroupFrequency"
                                   className="me-2 form-label fw-bold">Frequency</label>
                            <div className="row align-items-end">
                                <div className="col col-4">
                                    <label htmlFor="frequencyGroupFrequency">Show no more than</label>
                                    <input type={"number"} min={1} id="frequencyGroupFrequency" placeholder="1"
                                           className="text-purple-dark bg-purple-faded border-0 form-control" />
                                </div>
                                <div className="col col-4">
                                    <label htmlFor="frequencyGroupTaimeUnits">times per</label>
                                    <input type={"number"} min={1} id="frequencyGroupTaimeUnits" placeholder="1"
                                           className="text-purple-dark bg-purple-faded border-0 form-control" />
                                </div>
                                <div className="col col-4">
                                    <select id="frequencyGroupTimeType" className={"form-select bg-purple-faded"}>
                                        {!selectedTimeUnit && <option>Select time unit</option>}
                                        <option onSelect={() => setSelectedTimeUnit(true)}>Day</option>
                                        <option onSelect={() => setSelectedTimeUnit(true)}>Hour</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div id="simulated-frequency-group-save" className="ms-2 col ms-0 text-end mt-3 align-self-end">
                        <div className="btn btn-purple-dark">Save</div>
                        <div className="btn btn-purple-light">Cancel</div>
                    </div>

                </div>

            </div>
        </ProjectContainer>
    );
};