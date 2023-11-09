import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareGithub, faSquareXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faSquareEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function SocialIcons() {

    return (
        <div
            className="flex flex-row space-x-6 sm:justify-start pointer-events-auto pt-2 justify-center">
            <a href="https://github.com/dan-lee76" className="self-end"><FontAwesomeIcon
                className="w-8 transition duration-150 ease-in-out hover:text-sky-800"
                icon={faSquareGithub}/></a>
            <a href="https://x.com/NoSoAverageGuy" className="self-end"><FontAwesomeIcon className="w-8 transition duration-150 ease-in-out hover:text-sky-800" icon={faSquareXTwitter} /></a>
            <a href="mailto:contact@danlee.uk" className="self-end"><FontAwesomeIcon className="w-8 transition duration-150 ease-in-out hover:text-sky-800"
                                icon={faSquareEnvelope}/> </a>
            <a href="https://linkedin.com/in/dan-lee76" className="self-end"><FontAwesomeIcon
                className="w-8 transition duration-150 ease-in-out hover:text-sky-800"
                icon={faLinkedin}/> </a>
        </div>
    );
}

