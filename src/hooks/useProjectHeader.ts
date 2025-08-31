import {createContext, useContext} from 'react';
import type {AccentColors} from 'src/helpers/constants.ts';

export interface ProjectHeaderData {
    impact: string | string[] | undefined;
    color?: AccentColors | "primary" | "secondary";
    title: string;
    subtitle?: string;
    summary?: string;
    wordCount?: number;
    readingTime?: number;
    wordCloud?: string[];
    project?: string;
    timeline?: string;
    role?: string;
    challenge?: string;
}

interface ProjectContextType {
    headerData: ProjectHeaderData | null;
    setHeaderData: (data: ProjectHeaderData | null) => void;
}

export const ProjectContext = createContext<ProjectContextType>({
    headerData: null,
    setHeaderData: () => {
    },
});

const useProjectHeader = () => useContext(ProjectContext);

export default useProjectHeader;