import React from "react";
import ContainerBlock from "./container";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import "animate.css/animate.min.css";
import Footer from "../components/Footer";


export default function Home() {
    return (
        <div className="smooth-scroll bg-center bg-cover bg-sky-900 text-gray-900">
            <ContainerBlock
                title="Dan Lee"
                description="Dan Lee. Student at the University of Nottingham studying Computer Science, and your average hiking enthusiast. Incoming Software Engineer at Capital One UK."
            >
                <div>
                    <Hero/>
                    <div className="container mx-auto lg:w-3/4 md:px-16 p-3">
                        <Showcase/>
                        <Footer/>
                    </div>
                </div>
            </ContainerBlock>
        </div>
    );
}
