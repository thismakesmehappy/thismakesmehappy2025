interface TogglePlusMinusProps {
    plus: boolean,
    className?: string
}

const TogglePlusMinus = ({plus, className}: TogglePlusMinusProps) => {
    return (
        <>
            {plus ? <i className={`bi bi-plus-circle-fill ${className}`}></i> :
                <i className={`bi bi-dash-circle-fill ${className}`}></i>}

        </>
    );
};

export default TogglePlusMinus;