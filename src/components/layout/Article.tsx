import type {HTMLAttributes} from "react";

interface ArticleProps extends HTMLAttributes<HTMLElement> {
    className?: string;
}

const Article = ({ className = '', ...props }: ArticleProps) => {
    return (
        <article {...props} className={className}>
            {props.children}
        </article>
    );
};

export default Article;
