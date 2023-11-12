import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ContainerBlock({ children, ...customMeta }) {
    const router = useRouter();

    const meta = {
        title: "Dan Lee.",
        description: `Dan Lee. A Software Engineer at Capital One UK. Student at the University of Nottingham, and your average hiking enthusiast.`,
        image: "/dan.jpg",
        type: "website",
        ...customMeta,
    };
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <link rel={"icon"} href={"/icon.png"} />
                <meta
                    property="og:url"
                    content={`https://danlee.uk${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://danlee.uk${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Dan Lee" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={"https://danlee.uk/dan.jpg"} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@dan-lee76" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={"https://danlee.uk/dan.jpg"} />
                <meta name="theme-color" content="#0c4a6e" />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <div className="">{children}</div>
        </div>
    );
}
