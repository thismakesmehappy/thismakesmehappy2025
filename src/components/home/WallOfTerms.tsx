import {Container} from "react-bootstrap";

interface WallOfTermsProps {
    terms: string[];
}

const WallOfTerms = ({terms}: WallOfTermsProps) => {
    return (
        <div className="hero-section" id="wall-of-terms">
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