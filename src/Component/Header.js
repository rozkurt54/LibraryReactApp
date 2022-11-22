import React from "react";
import { BsPersonFill } from "react-icons/bs";

const Header = () => {
    return (
        <div className="w-full h-12 bg-slate-400 shadow-lg">
            <div className="container mx-auto text-white h-full flex items-center relative">
                <div className="text-2xl font-bold tracking-tighter">
                    Kütühane
                </div>
                <ul className="flex w-full items-certer gap-4 right-0 justify-center">
                    <li>Kitap</li>
                    <li>Yazarlar</li>
                </ul>
                <div className="flex items-center absolute right-0">
                    <BsPersonFill size={24} />
                    Giriş Yap
                </div>
            </div>
        </div>
    );
};

export default Header;
