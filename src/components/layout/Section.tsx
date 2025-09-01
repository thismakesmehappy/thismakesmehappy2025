import type {HTMLAttributes} from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    spacing?: 'tight' | 'normal' | 'loose';
    className?: string;
}

const Section = ({ spacing = 'normal', className = '', ...props }: SectionProps) => {
    const spacingMap = {
        tight: 'mt-4 mb-4',
        normal: 'mt-6 mb-6',
        loose: 'mt-8 mb-8'
    };

    const combinedClassName = `${spacingMap[spacing]} ${className}`.trim();

    return (
        <section {...props} className={combinedClassName}>
            {props.children}
        </section>
    );
};

export default Section;
