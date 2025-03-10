import React from "react";
import Header from "./showcase/Header";
import ShowcaseButton from "./showcase/ItemButton";
import Brick from "./showcase/bricks/Brick";
import ItemGroup from "./showcase/ItemGroup";
import BrickImage from "./showcase/bricks/BrickImage";
import BrickLargeImage from "./showcase/bricks/BrickLgImage";
import Pill from "./showcase/Pill";
import Pills from "./showcase/Pills";


export default function Showcase(props) {
    return (
        <div className="space-y-8">
            <ItemGroup title="Experience">
                <BrickImage title="Senior Smart Bar Assistant" subtitle="University of Nottingham" img="uon_logo.png"
                            year="2024-2025">
                    <p>Managed the team whilst on shift. Being the primary call of support for the Smart Bar
                        Assistants and answering any of their quires. Along with escalating any necessary issues with
                        the Analysis team. Would authorise Azure MFA requests.</p>
                    <Pills>
                        <Pill title="Azure"/>
                    </Pills>
                </BrickImage>
                <BrickImage title="Software Development Enginer (Placement)" subtitle="Capital One"
                            img="capitalone_logo.png" year="2023-2024">
                    <p>Rotated between two teams, Data & Web. Contributed to Developer API, .co.uk, internal ML platform
                        and internal libraries/tools.</p>
                    <Pills>
                        <Pill title="JS/TS"/>
                        <Pill title="React.js"/>
                        <Pill title="Node.js"/>
                        <Pill title="Java"/>
                        <Pill title="Python"/>
                        <Pill title="SDLC"/>
                        <Pill title="AWS"/>
                        <Pill title="Jenkins"/>
                    </Pills>
                </BrickImage>
                <BrickImage title="Student I.T Support Tutor" subtitle="University of Nottingham" img="uon_logo.png"
                            year="2022-2023"/>
            </ItemGroup>
            <ItemGroup title="Licenses & Certifications">
                <BrickImage title="Amazon Web Services Cloud Practioner" subtitle="Amazon"
                            img="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                            year="Issued Jun 2024 | Expires June 2027">
                    <ShowcaseButton title="Show Credential"
                                    location="https://www.credly.com/badges/049cb5a3-4473-4fcc-a1a0-86549041e9a4/public_url"/>
                </BrickImage>
            </ItemGroup>
            <ItemGroup title="Projects">
                <BrickLargeImage title="Rambling & Hiking Club" subtitle="Frontend |" development="Released"
                                 img="ramsoc_logo.png">
                    <p>Developed for the University of Nottingham Rambling and Hiking Club. Display's relevant
                        information for hikers, and mapped out routes using mapbox.</p>
                    <div className="block">
                        <ShowcaseButton title="View" location="https://ramsoc.co.uk"/>
                        <ShowcaseButton title="Code"
                                        location="https://github.com/UoN-Rambling-Hiking/RamblingHikingWebsite"/>
                    </div>
                    <Pills>
                        <Pill title="Node.js"/>
                        <Pill title="Hugo"/>
                        <Pill title="Markdown"/>
                    </Pills>
                </BrickLargeImage>
                <BrickImage title="Generative Pathfinding Algorithm for UK Hiking Routes"
                            subtitle="Research (Dissertation) |" development="Active Development" img="uon_logo.png">
                    <p>As part of my university studies, I am developing an algorithm to generate a user-specified
                        hiking route, to help get hikers to the outdoors quicker, and make the hills more accessible for
                        people.</p>
                    <div className="block">
                        <ShowcaseButton title="Paper (Releasing Q2)" />
                        <ShowcaseButton title="Code (Releasing Q2)" />
                    </div>
                    <Pills>
                        <Pill title="Python"/>
                        <Pill title="JS"/>
                        <Pill title="GeoSpatial Data"/>
                        <Pill title="OSM"/>
                        <Pill title="Open Access Government Data"/>
                    </Pills>
                </BrickImage>
                <BrickLargeImage title="OnlyDans" subtitle="Fullstack |" development="Archived" img="onlydans_logo.png">
                    <p>A media content sharing site, showcasing my university adventure. Also has its own admin panel.
                        Currently decommissioned.</p>
                    <ShowcaseButton title="Code" location="https://github.com/dan-lee76/onlydans"/>
                    <Pills>
                        <Pill title="React.JS"/>
                        <Pill title="PHP"/>
                        <Pill title="SQL"/>
                    </Pills>
                </BrickLargeImage>
                <BrickLargeImage title="Nottes" subtitle="Notes |" development="Released" img="nottes_logo.png">
                    <p>Viewable version of my notes whilst studying at the University of Nottingham</p>
                    <ShowcaseButton title="View" location="https://notes.danlee.uk"/>
                </BrickLargeImage>
                <BrickImage title="OSMap Scraper" subtitle="API |" development="Released" img="os_logo.png">
                    <p>Node.js web scraper to get obtain from ordnance survey walk's. Including, elevation, distance and
                        plotted route. Hosted on cloudflare worker.</p>
                    <ShowcaseButton title="Code" location="https://github.com/dan-lee76/OSMapsExporter"/>
                    <Pills>
                        <Pill title="Node.js"/>
                        <Pill title="Cloudflare"/>
                    </Pills>
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
                    <p>During my time in the club I led countless walks as a Grade 2/3 leader alongside being a verified
                        First Aider. During my term as president I oversaw the organisation of 17 weekly hikes, 3
                        special
                        hikes, 4 training courses, 4 weekend trips, a 90th Anniversary Celebration, an epic Scotland
                        adventure, and welcomed over 200 members.</p>
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


