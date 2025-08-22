import {useState} from 'react';
import {ProjectContext} from '../hooks/useProjectHeader';
import type {ProjectHeaderData} from '../hooks/useProjectHeader';

export const ProjectProvider = ({children}: { children: React.ReactNode }) => {
    const [headerData, setHeaderData] = useState<ProjectHeaderData | null>(null);

    return (
        <ProjectContext.Provider value={{headerData, setHeaderData}}>
            {children}
        </ProjectContext.Provider>
    );
};
