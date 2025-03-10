import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";

export default function BrickImage(props) {
    return (
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <div className="flex flex-col items-center justify-center w-full h-full mt-5 mb-5">
            <div className="w-full h-full rounded-lg shadow-lg bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 p-8">
                    <div className="flex sm:justify-end sm:order-2 justify-center mb-4">
                        <img className="rounded-lg w-32 h-32 drop-shadow-lg object-contain" src={props.img}/>
                    </div>
                    <div className="text-center sm:text-left space-y-2 flex my-auto flex-col">
                        <p className="text-2xl leading-tight font-medium">{props.title}</p>
                        {props.subtitle && <p className="text-xl leading-tight font-medium">{props.subtitle}{props.development && <span className="italic"> {props.development}</span>}</p>}
                        {props.year && <p className="text-gray-700 leading-normal text-lg">{props.year}</p>}
                        <div className="space-y-2 flex my-auto flex-col">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AnimationOnScroll>
    );
}