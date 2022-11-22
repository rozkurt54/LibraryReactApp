import React, { useEffect, useState } from "react";
import Author from "../Component/Author";

const Main = () => {
    const [productList, setProductList] = useState();
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        fetch("/author")
            .then((response) => response.json())
            .then((response) => {
                setProductList(response);
                setIsDataLoaded(true);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);
    if (isDataLoaded) {
        return (
            <div className="w-full m-2 border border-slate-200">
                <div className="grid grid-cols-6 gap-6">
                    {productList.map((prodct) => {
                        return <Author author={prodct} />;
                    })}
                </div>
            </div>
        );
    } else {
        return <div>Data Yükleniyor</div>;
    }
};

export default Main;
