import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import ContainerBlock from "./container";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Showcase from "../components/Showcase";
import SectionHeader from "../components/SectionHeader";
import ShowcaseButton from "../components/ShowcaseButton";

export default function Home({ repositories }) {
    return (
        <div className="smooth-scroll bg-center bg-cover bg-sky-900">
        <ContainerBlock
            title="Dan Lee"
            description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
        >
            {/*<NavBar></NavBar>*/}
        <Hero></Hero>
            <SectionHeader title="Projects"/>
            <Showcase title="Onlydans.uk">
                <ShowcaseButton title="Demo" location="https://onlydans.uk"/>
                <ShowcaseButton title="View" location="https://onlydans.uk"/>
            </Showcase>
            <SectionHeader title="Work"/>
            <Showcase title="Student I.T Support Tutor" subtitle="University of Nottingham"/>
            <SectionHeader title="Education"/>
            <Showcase title="BSc Computer Science with Year in Industry" subtitle="University of Nottingham" description="Currently in my second year. " img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l7__AECbyeJv3zAB9m_nhYpJkdIJbHZqkq1Ysw%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=fbdcafb0bdf5ef270351c912cb9ca8631a7f9f705b4d87e5f484a207f47fd501&ipo=images"></Showcase>
            <SectionHeader title="Experience"/>
            <Showcase title="GDSC Lead" subtitle="Google Developer Student Clubs" description="I am the lead for the GDSC at the University of Nottingham."></Showcase>
            <Showcase title="Treasury Officer" subtitle="HackSoc" description="I am the treasurer for the University of Nottingham's technology, computing, recreational, programming, and hacking society."></Showcase>
            <Showcase title="Computer Science Mentor" subtitle="University of Nottingham" description="I am a mentor for the University of Nottingham's Computer Science department."></Showcase>
        </ContainerBlock>
        </div>
    );
}