import {Container, Placeholder} from 'react-bootstrap';
import {SPACING} from 'src/helpers/spacingConstants.ts';

interface LoadingSkeletonProps {
    type?: 'project' | 'page' | 'component';
}

const LoadingSkeleton = ({ type = 'project' }: LoadingSkeletonProps) => {
    if (type === 'project') {
        return (
            <Container className={SPACING.CONTAINER}>
                {/* Hero placeholder */}
                <Placeholder as="div" animation="glow" className={SPACING.SECTION}>
                    <Placeholder xs={12} style={{ height: '300px' }} className="rounded" />
                </Placeholder>

                {/* Key highlights placeholder */}
                <div className={SPACING.SECTION}>
                    <Placeholder as="h2" animation="glow">
                        <Placeholder xs={4} />
                    </Placeholder>
                    <div className="row">
                        <div className="col-md-4">
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} />
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                        </div>
                        <div className="col-md-4">
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={5} /> <Placeholder xs={6} />
                                <Placeholder xs={8} /> <Placeholder xs={4} />
                            </Placeholder>
                        </div>
                        <div className="col-md-4">
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={6} /> <Placeholder xs={7} />
                                <Placeholder xs={5} /> <Placeholder xs={8} />
                            </Placeholder>
                        </div>
                    </div>
                </div>

                {/* Content sections placeholder */}
                <div className={SPACING.SECTION}>
                    <Placeholder as="h3" animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={12} /> <Placeholder xs={10} />
                        <Placeholder xs={8} /> <Placeholder xs={11} />
                        <Placeholder xs={9} />
                    </Placeholder>
                </div>

                {/* Image placeholder */}
                <Placeholder as="div" animation="glow" className={SPACING.SECTION}>
                    <Placeholder xs={12} style={{ height: '200px' }} className="rounded" />
                </Placeholder>
            </Container>
        );
    }

    // Simpler placeholder for other types
    return (
        <Container className={SPACING.CONTAINER}>
            <Placeholder as="div" animation="glow">
                <Placeholder xs={12} style={{ height: '150px' }} />
            </Placeholder>
        </Container>
    );
};

export default LoadingSkeleton;
