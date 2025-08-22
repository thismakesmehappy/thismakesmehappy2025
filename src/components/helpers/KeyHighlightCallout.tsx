import React from "react";

interface KeyHighlightCalloutProps {
    small?: boolean;
    children?: React.ReactNode;
}

const KeyHighlightCallout = ({small = false, children}: KeyHighlightCalloutProps) => {
    return (
        <strong className={small ? "" : "big"}>{children}</strong>
    );
};

export default KeyHighlightCallout;
