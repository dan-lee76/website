import React from "react";
import Header from "./showcase/Header";
import ShowcaseButton from "./showcase/ItemButton";
import Brick from "./showcase/bricks/Brick";
import ItemGroup from "./showcase/ItemGroup";
import BrickImage from "./showcase/bricks/BrickImage";
import BrickLargeImage from "./showcase/bricks/BrickLgImage";


export default function Showcase(props) {
    return (
        <div className="space-y-8">
            <ItemGroup title="Experience">
                <BrickImage title="Software Developer Enginer (Placement)" subtitle="Capital One"
                            img="capitalone_logo.png" year="2023-2024">
                </BrickImage>
                <BrickImage title="Student I.T Support Tutor" subtitle="University of Nottingham" img="uon_logo.png"
                            year="2022-2023"/>
            </ItemGroup>
            <ItemGroup title="Projects">
                <BrickLargeImage title="OnlyDans" subtitle="Fullstack" img="onlydans_logo.png">
                    <p>React.js & PHP, of a media content sharing site, with its own admin panel.</p>
                    <ShowcaseButton title="Code" location="https://github.com/dan-lee76/onlydans"/>
                </BrickLargeImage>
                <BrickLargeImage title="Rambling & Hiking Club" subtitle="Frontend" img="ramsoc_logo.png">
                    <p>Developed for the University of Nottingham Rambling and Hiking Club. Displayed relevant
                        information for hikers, and mapped out routes using mapbox.</p>
                    <ShowcaseButton title="View" location="https://ramsoc.co.uk"/>
                    <ShowcaseButton title="Code" location="https://github.com/UoN-Rambling-Hiking/RamblingHikingWebsite"/>
                </BrickLargeImage>
                <BrickLargeImage title="Nottes" subtitle="Notes" img="nottes_logo.png">
                    <p>Viewable version of my notes whilst studying at the University of Nottingham</p>
                    <ShowcaseButton title="View" location="https://notes.danlee.uk"/>
                </BrickLargeImage>
                <BrickImage title="OSMap Scraper" subtitle="API" img="os_logo.png">
                    <p>Nodejs (PHP) web scraper to get data from ordnance survey walk's. Including, elevation, distance and
                        plotted route.</p>
                    <ShowcaseButton title="Code" location="https://github.com/dan-lee76/OSMapsExporter"/>
                </BrickImage>
            </ItemGroup>
            <ItemGroup title="Education">
                <BrickImage title="BSc Computer Science with Year in Industry" subtitle="University of Nottingham"
                            description="Currently in my second year. " img="uon_logo.png" year="2021-2025">
                </BrickImage>
            </ItemGroup>
            <ItemGroup title="Volunteer Experience">
                <BrickImage title="President" subtitle="Rambling & Hiking Club" img="rambling_logo.png"
                            year="2023-2024">
                    <p>During my time in the club I led countless walks as a Grade 2/3 leader alongside being a verified First Aider.</p>
                </BrickImage>
                <BrickImage title="Mentor" subtitle="School of Computer Science" img="uon_logo.png"
                            year="2022-2023">
                </BrickImage>
                <BrickImage title="Leader" subtitle="GDSC Nottingham" img="gdsc_logo.png"
                            year="2022-2023">
                </BrickImage>
                <BrickImage title="Treasurer" subtitle="HackSoc Nottingham" img="hacksoc_logo.png"
                            year="2022-2023">

                </BrickImage>
                {/*    <ItemWrapper title="Campus Expert" subtitle="GitHub"/>*/}
                {/*<ItemWrapper title="GDSC Lead" subtitle="Google Developer Student Clubs" description="I am the lead for the GDSC at the University of Nottingham."></ItemWrapper>*/}
                {/*<ItemWrapper title="Treasury Officer" subtitle="HackSoc" description="I am the treasurer for the University of Nottingham's technology, computing, recreational, programming, and hacking society."></ItemWrapper>*/}
                {/*<ItemWrapper title="Computer Science Mentor" subtitle="University of Nottingham" description="I am a mentor for the University of Nottingham's Computer Science department."></ItemWrapper>*/}
            </ItemGroup>
        </div>
    );
}


