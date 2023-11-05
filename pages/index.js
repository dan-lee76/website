import React from "react";
import ContainerBlock from "./container";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import "animate.css/animate.min.css";
import Footer from "../components/Footer";


export default function Home({ repositories }) {
    return (
        <div className="smooth-scroll bg-center bg-cover bg-sky-900 text-gray-900">
        <ContainerBlock
            title="Dan Lee"
            description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
        >
            <div>
                <Hero/>
                <div className="container mx-auto lg:w-3/4 p-3">
                    <Showcase/>
                    <Footer/>
                </div>
            </div>
        </ContainerBlock>
        </div>
    );
}