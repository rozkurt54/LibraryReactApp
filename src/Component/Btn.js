import React, { useState } from "react";

const Btn = () => {
    const [color, setColor] = useState();
    return (
        <div
            className={"w-6 h-6 bg-slate-200"}
            style={color && { backgroundColor: color }}
            onClick={() => {
                setColor("#D00");
            }}
        ></div>
    );
};

export default Btn;
