import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Hero(){

    return (
        <div className="smooth-scroll bg-center bg-cover bg-sky-900">
            <div className="wave bg-fixed ">
            <header
                className="z-10 flex items-center justify-center h-screen mb-12">

                <div className="w-72 m-10">
                    <img className="rounded-full" src="https://cdn.danlee.uk/content/assets/userProfile.png"/>
                </div>
                <div class="p-5">
                <p className="text-6xl text-black">I am <span className="font-bold">Dan Lee</span>🦆</p>
                <p className="text-3xl">Computer Science Student</p>
                    <p>
                        The founder of <a className="underline" href="https://onlydans.uk">onlydans.uk</a>
                    </p>
                    <div className="flex pt-2">
                        <a className="w-7 mr-2"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="w-7 mr-2"><FontAwesomeIcon  icon={faLinkedin} /> </a>
                        <a className="w-7 mr-2"><FontAwesomeIcon  icon={faEnvelope} /> </a>


                    </div>
                </div>
            </header>
            </div>
            <div className="max-w-lg m-auto items-center justify-center flex">
                <div>
                    <p className="text-3xl text-white ">Projects</p>

                <div className="max-w-lg m-auto">
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
                        magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
                        sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
                        nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
                        odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
                        laoreet sem, semper molestie libero.
                    </p>
                    <p className="mb-4">
                        Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
                        fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
                        non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
                        Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
                        varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
                        semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
                        ipsum, id consequat nulla nunc in ligula.
                    </p>
                    <p className="mb-12">
                        Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
                        dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
                        dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
                        fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
                        fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
                        vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
                        neque.
                    </p>
                </div>
                </div>
            </div>
        </div>
);
}

