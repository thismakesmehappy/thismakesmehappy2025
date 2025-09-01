import type {HTMLAttributes} from "react";

interface SectionContentProps extends HTMLAttributes<HTMLElement> {
    className?: string;
}

const SectionContent = ({ className = '', ...props }: SectionContentProps) => {
    const combinedClassName = `px-0 px-md-4 px-lg-8 ${className}`.trim();

    return (
        <article {...props} className={combinedClassName}>
            {props.children}
        </article>
    );
};

export default SectionContent;
