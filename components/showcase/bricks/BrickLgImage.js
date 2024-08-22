import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";

export default function BrickLargeImage(props) {
    return (
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
            <div className="flex flex-col items-center justify-center w-full h-full mt-5 mb-5">
                <div className="w-full h-full rounded-lg shadow-lg bg-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 p-8">
                        <div className="flex sm:justify-end sm:order-2 justify-center mb-4">
                            <img className="rounded-lg max-h-96 shadow-lg object-contain sm:w-5/6 w-full" src={props.img}/>
                        </div>
                        <div className="text-center sm:text-left space-y-2 flex my-auto flex-col">
                            <p className="text-2xl leading-tight font-medium">{props.title}</p>
                            {props.subtitle && <p className="text-xl leading-tight font-medium">{props.subtitle}</p>}
                            {props.year && <p className="text-gray-700 leading-normal text-lg">{props.year}</p>}
                            <div>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimationOnScroll>
    );
}