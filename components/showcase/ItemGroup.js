import React from "react";
import Header from "./Header";



export default function ItemGroup(props) {
    return (
        <div className="">
            <Header title={props.title}/>
            {props.children}
        </div>
    );
}