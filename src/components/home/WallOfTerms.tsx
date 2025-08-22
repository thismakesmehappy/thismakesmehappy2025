import {Container} from "react-bootstrap";

interface WallOfTermsProps {
    terms: string[];
    className?: string;
}

const WallOfTerms = ({terms, className = ""}: WallOfTermsProps) => {
    return (
        <div className={className} id="wall-of-terms">
            <Container>
                <ul>
                    {terms.map((term, index) => (
                        <li key={`term-${index}`}>{term}</li>
                    ))}
                </ul>
            </Container>
        </div>
    );
};

export default WallOfTerms;