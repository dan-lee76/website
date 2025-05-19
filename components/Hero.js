import React from "react";
import SocialIcons from "./SocialIcons";

export default function Hero(){

    return (
        <div className="">
            <div className="wave flex flex-col items-center overflow-hidden relative content-center">
                <header
                    className="z-10 flex h-screen container xl:w-3/4 lg:w-2/3 md:px-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 h-2/3 w-full p-3">
                        <div className="sm:order-2 self-center flex min-w-full sm:mx-8 justify-center sm:justify-end mt-4 mb-4 sm:m-0">
                            <img className="hover:animate-spin hover:animate-once rounded-full border-2 border-black border-solid shadow-2xl aspect-square max-w-[16rem] sm:w-auto sm:max-w-xs max-w-4 justify-center self-center object-fill drop-shadow-2xl sm:mx-8" src="dan.jpg"/>
                        </div>
                        <div className="sm:self-center gap-2 space-y-2">
                            <h1 className="text-6xl text-center sm:text-left min-h-max flex-nowrap tracking-wide font-medium">Howdy, I'm <span className=" text-sky-800 font-extrabold">Dan Lee</span><span className="animate-bounce repeat-1">🦆</span></h1>
                            <p className="text-3xl text-center sm:text-left">
                                Returning Software Engineer at <a className="underline transition font-bold text-sky-800 hover:text-white" href="https://capitalone.co.uk">Capital One UK</a>
                            </p>
                            <p className="text-2xl text-center sm:text-left">
                                Graduating student at the <a className="underline transition font-bold text-sky-800 hover:text-white" href="https://nottingham.ac.uk">University of Nottingham</a>
                            </p>
                            <SocialIcons/>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

