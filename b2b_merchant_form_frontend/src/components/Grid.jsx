import React from "react";

function Grid({ children, gridNumber = 1 }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-${gridNumber} gap-6`}>
            {children}
        </div>
    );
}

export default Grid;
