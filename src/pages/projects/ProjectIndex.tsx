// pages/ProjectIndex.tsx
import React from 'react';
import {useProjectHeader} from "../../hooks/useProjectHeader.ts";
import {PortfolioGrid} from "../../components/portfolioGrid/PortfolioGrid.tsx";
import {homeListOfTerms} from "../../data/homeListOfTerms.ts";

const ProjectIndex = () => {
    const {setHeaderData} = useProjectHeader();

    React.useEffect(() => {
        setHeaderData({
            title: "Projects",
            color: "orange",
            wordCloud: homeListOfTerms
        });

        return () => setHeaderData(null);
    }, [setHeaderData]);

    // Combine featured and standard projects


    return (
        <>
            <PortfolioGrid /></>
    );
};

export default ProjectIndex;
