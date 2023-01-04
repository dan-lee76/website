import React from "react";

export default function Hero(){

    return (
        <div className="bg-gradient-to-br from-cyan-500 to-blue-500">
        <div className="relative">
            <div className="absolute left-0 m-20 flex p-32">
                <img className="rounded-full " src="https://cdn.danlee.uk/content/assets/userProfile.png"></img>
            </div>
            <div className="absolute right-0 m-20 px-10 bg-black">
                <p className="text-3xl text-white justify-center">I am dan</p>
            </div>
        </div>
        </div>
);
}

