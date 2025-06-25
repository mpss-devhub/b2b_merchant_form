export const Label = (props) => {
    const { children, className, required, ...inputProps } = props;
    return (
        <label
            className={`block font-medium text-base text-gray-600 ${className}`}
            {...inputProps}
        >
            {children}
        </label>
    );
};
