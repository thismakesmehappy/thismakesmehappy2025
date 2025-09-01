// pages/ProjectIndex.tsx
import React from 'react';
import useProjectHeader from 'src/hooks/useProjectHeader.ts';
import PortfolioGrid from 'src/components/portfolioGrid/PortfolioGrid.tsx';
import homeListOfTerms from 'src/data/homeListOfTerms.ts';

const ProjectIndex = () => {
    const {setHeaderData} = useProjectHeader();

    React.useEffect(() => {
        setHeaderData({
            title: "Projects",
            color: "orange",
            wordCloud: homeListOfTerms,
            impact: undefined // Required field for interface
        });

        return () => setHeaderData(null);
    }, [setHeaderData]);

    return (
        <>
            <PortfolioGrid />
        </>
    );
};

export default ProjectIndex;
