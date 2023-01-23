import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Hero(){

    return (
        <div className="">
            <div className="wave flex flex-col items-center justify-center min-h-screen overflow-hidden relative">
            <header
                className="z-10 flex h-screen mb-12 lg:w-3/4">
                <div className="md:flex items-center w-max-auto md:pb-40 md:mb-40 order-last md:order-first relative justify-around justify-evenly">
                    <div className="lg:pl-20 pl-10 w-3/5 mx-10">
                        <p className="text-6xl text-black">I am <span className="font-bold">Dan Lee</span>🦆</p>
                        <p className="text-3xl">Computer Science Student</p>
                        <p>
                            The founder of <a className="underline" href="https://onlydans.uk">onlydans.uk</a>
                        </p>
                        <div
                            className="flex flex-row space-x-6 sm:justify-start justify-center pointer-events-auto pt-2">
                            <a href="https://github.com/dan-lee76"><FontAwesomeIcon className="w-10"
                                                                                    icon={faGithub}/></a>
                            <a><FontAwesomeIcon className="w-11" icon={faTwitter}/> </a>
                            <a><FontAwesomeIcon className="w-11" icon={faEnvelope}/> </a>
                            <a href="https://linkedin.com/in/dan-lee76"><FontAwesomeIcon className="w-9"
                                                                                         icon={faLinkedin}/> </a>
                        </div>
                    </div>
                <div className="md:w-1/3 lg:w-1/4 pr-10 lg:pr-20 justify-self-end order-first md:order-last justify-around mx-10">
                    <img className="rounded-full border-2 border-black border-solid shadow-2xl " src="https://cdn.danlee.uk/content/assets/userProfile.png"/>
                </div>

                </div>
            </header>
            </div>
        </div>
);
}

