import React from "react";
import {useAuth} from "../context/AuthContext";

export const UserInfo = () => {
    const {getUser} = useAuth();

    return (
        <div className="flex justify-center mx-20 ">
            <div className="flex-none w-1/4 flex justify-center">
                <img className="rounded-full" src={getUser().data.avatarUrl}/>
            </div>
            <div className="flex-grow w-3/4 justify-between border-b border-gray-300">
                <p className="text-5xl">{getUser().data.name}</p>
                <div className="mt-5">
                    <span className="text-2xl">Підписників </span>
                    <span className="text-2xl">Відстежую </span>
                </div>
            </div>
        </div>
    );
}