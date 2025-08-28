import {Col} from 'react-bootstrap';
import React from 'react';

const KeyHighlight = ({children}: { children: React.ReactNode }) => {
    return (
        <Col>{children}</Col>
    );
};

export default KeyHighlight;
