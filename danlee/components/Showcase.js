import React from "react";



export default function Showcase(props) {
    return (
        <div className="flex  justify-center items-center pb-10">
            <div className="block p-6 rounded-lg shadow-lg bg-white md:w-1/2 lg:w-1/3">
                <div>
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{props.title}</h5>
                <h6 className="text-gray-900 text-l leading-tight font-medium mb-2">{props.subtitle}</h6>
                <p className="text-gray-700 text-base leading-normal">{props.description}</p>
                    <div>{props.children}</div>
                </div>
                    <img className="rounded-lg" src={props.img}></img>
            </div>
        </div>
    );
}