import React from "react";

const Author = ({ author }) => {
    return (
        <div className="border border-slate-200 m-2 rounded p-1 shadow-lg">
            <div className="text-purple-800 font-bold">{author.name}</div>
            <div className="text-purple-800 font-bold">{author.id}</div>
        </div>
    );
};

export default Author;
