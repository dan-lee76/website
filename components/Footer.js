import React from "react";
import SocialIcons from "./SocialIcons";
import {AnimationOnScroll} from "react-animation-on-scroll";

function getYear() {
    const date = new Date();
    return date.getFullYear();
}

export default function Footer() {
    return (
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <div className="flex flex-col items-center justify-center w-full h-full mb-2 animate-fade-up mt-32">
            <div className="w-full h-full rounded-lg shadow-lg bg-white">
                <div className="p-8">
                    <div className="text-center sm:text-left space-y-2 flex my-auto flex-col">
                        <p className="text-2xl leading-tight font-medium">Get in touch</p>
                        <div>
                            <SocialIcons/>
                            <footer className="text-center text-gray-500"> © {getYear()} Dan Lee. All rights reserved.</footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AnimationOnScroll>
    );
}

