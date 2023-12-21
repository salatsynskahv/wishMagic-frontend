import React, {useReducer, useState} from "react";
import axios from "axios";
import {serviceApi} from "../misc/ServiceApi";

export default function Modal({showModal, setShowModal}) {
    const [link, setLink] = useState();
    const dataReducer = (state, action) => {
        if (action.type === "init") {
            console.log(action.payload);
            return {...state, ...action.payload};
        }
        if (action.type === "input") {
            return {...state, [action.payload.name]: action.payload.value}
        }
    }

    const [data, dispatchData] = useReducer(dataReducer, {});
    const inputStyle = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";




    console.log(data);
    function submitLink() {
        serviceApi.scrappingFromUrl(link).then((result) => {
            dispatchData({
                type: "init",
                payload: result.data
            });
            console.log(result.data);
        })
    }

    return (
        <>
            {/*<button*/}
            {/*    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
            {/*    type="button"*/}
            {/*    onClick={() => setShowModal(true)}*/}
            {/*>*/}
            {/*    Open regular modal*/}
            {/*</button>*/}
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Додати бажання
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span
                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-xl font-medium leading-relaxed">
                                        Вставте лінк із будь-якого сайту на ваше бажання
                                    </p>
                                    <input
                                        className={inputStyle}
                                        placeholder="https://"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                    ></input>
                                    <p className="my-6 mx-3">Скопіюйте лінк на товар або бажання і ми спробуємо
                                        заповнити всі поля автоматично</p>
                                    <button className="bg-green-200 rounded-3xl py-3 px-6"
                                            onClick={submitLink}>
                                        Додати
                                    </button>
                                </div>

                                {
                                    data &&
                                    <div className="flex flex-col mx-10 my-6">
                                        {/*<label htmlFor="Назва вішліста"></label>*/}
                                        {/*<select></select>*/}
                                        <label htmlFor="title">Назва бажання</label>
                                        <input
                                            className={inputStyle}
                                            type="text"
                                            name="title"
                                            value={data.title}
                                            onChange={
                                                (
                                                    event) => dispatchData(
                                                    {
                                                        type: "input",
                                                        payload: {
                                                            name: event.target.name,
                                                            value: event.target.value
                                                        }
                                                    }
                                                )
                                            }
                                        />
                                        <label

                                            htmlFor="title">Ціна</label>
                                        <input
                                            className={inputStyle}
                                            type="text"
                                            name="price"
                                            value={data.price}
                                            onChange={
                                                (
                                                    event) => dispatchData(
                                                    {
                                                        type: "input",
                                                        payload: {
                                                            name: event.target.name,
                                                            value: event.target.value
                                                        }
                                                    }
                                                )
                                            }
                                        />
                                        <label> Коментар</label>
                                        <textarea className={inputStyle}></textarea>
                                    </div>
                                }
                                {/*footer*/}
                                <div
                                    className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    {/*<button*/}
                                    {/*    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                                    {/*    type="button"*/}
                                    {/*    onClick={submitLink}*/}
                                    {/*>*/}
                                    {/*    Add wish*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : <></>}
        </>
    );
}