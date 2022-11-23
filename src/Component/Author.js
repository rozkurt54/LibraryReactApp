import React from "react";

const Author = ({ author }) => {
    return (
        <div className="border border-slate-200 m-2 rounded p-1 shadow-lg">
            <div className="text-purple-800 font-bold">{author.name}</div>
            <div className="text-purple-800 font-bold">
                {author.id}
                <img
                    src="http://localhost:8081/images/7a9472a7-afce-4e57-bfb6-914488407315.jpg"
                    alt={author.name}
                />
            </div>
        </div>
    );
};

export default Author;
