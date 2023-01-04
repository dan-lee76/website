import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import ContainerBlock from "./container";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

export default function Home({ repositories }) {
    return (
        <ContainerBlock
            title="Dan Lee"
            description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
        >
            {/*<NavBar></NavBar>*/}
        <Hero></Hero>
        </ContainerBlock>
    );
}