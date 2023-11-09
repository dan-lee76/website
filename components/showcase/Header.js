import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";

export default function Header(props) {
    return (
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <div className="flex justify-center items-center">
                <h3 className="text-white text-4xl leading-tight font-medium mb-2 text-center">{props.title}</h3>
        </div>
        </AnimationOnScroll>
    );
}