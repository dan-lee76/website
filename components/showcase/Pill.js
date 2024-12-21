import React from "react";


export default function Pill(props) {
    return <div className="inline">
    <span
        className="bg-sky-700 text-white hover:bg-sky-900  text-xs font-medium me-2 px-4 py-2 rounded-full mr-2 inline-block mt-2">{props.title}</span>
    </div>
}