import React from "react";
import type {AllColors} from "src/helpers/constants.ts";

interface ProjectContainerProps {
    backgroundColor?: AllColors;
    borderColor?: AllColors
    borderWidth?: 0 | 1 | 2 | 3 | 4 | 5;
    borderRadius?: 0 | 1 | 2 | 3;
    children?: React.ReactNode;
    className?: string;
    expand?: boolean;
    id?: string;
    padding?: boolean;
    style?: any;
}

const ProjectContainer = ({
                              backgroundColor,
                              borderColor,
                              borderWidth = 0,
                              borderRadius = 3,
                              className,
                              children,
                              style,
                              expand = false,
                              id,
                              padding = true,
                          }: ProjectContainerProps) => {
    return (
        <div id={id}
             style={style}
             className={
                 `rounded-4 
            overflow-hidden 
            border border-${borderWidth} border-${borderColor} 
            ${backgroundColor &&
                 `bg-${backgroundColor}`} 
            rounded-${borderRadius}  
            ${className}
            ${padding && `p-4 ${expand && `ms-md-n4 me-md-n4`}`}
            `
             }>
            {children}
        </div>
    );
};

export default ProjectContainer;