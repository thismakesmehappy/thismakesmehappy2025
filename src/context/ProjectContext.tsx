import {useState} from 'react';
import {ProjectContext} from 'src/hooks/useProjectHeader';
import type {ProjectHeaderData} from 'src/hooks/useProjectHeader';

const ProjectProvider = ({children}: { children: React.ReactNode }) => {
    const [headerData, setHeaderData] = useState<ProjectHeaderData | null>(null);

    return (
        <ProjectContext.Provider value={{headerData, setHeaderData}}>
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectProvider;
