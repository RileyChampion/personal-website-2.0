import React from "react";
import './pill.scss';

interface PillProps {
    text: string;
}

function Pill({text} : PillProps) {
    return (
        <div className="pill">
            {text}
        </div>
    )
}
export default Pill;