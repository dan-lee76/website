import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";



export default function Brick(props) {
    return (
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
            <div className="flex flex-col items-center justify-center w-full h-full mt-5 mb-5 animate-fade-up">
                <div className="w-full h-full rounded-lg shadow-lg bg-white">
                    <div className="sm:w-1/2 p-8">
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

