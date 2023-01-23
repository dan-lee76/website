import React from "react";

export default function SectionHeader(props) {
    return (
        <div className="flex justify-center items-center">
            <div className="">
                <h3 className="text-white text-4xl leading-tight font-medium mb-2">{props.title}</h3>
            </div>
        </div>
    );
}