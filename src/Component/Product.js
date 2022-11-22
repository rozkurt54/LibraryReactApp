import React from "react";

const Product = ({ prodct }) => {
    return (
        <div className="border border-slate-200 m-2 rounded p-1 shadow-lg">
            <div className="text-purple-800 font-bold">{prodct.title}</div>
            <img src={prodct.image} alt={prodct.title} />
            <div>{prodct.description}</div>
        </div>
    );
};

export default Product;
