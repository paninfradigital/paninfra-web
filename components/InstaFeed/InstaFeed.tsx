"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function InstaFeed() {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof window !== "undefined" && (window as any).instgrm) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).instgrm.Embeds.process();
        }
    }, []);

    return (
        <section style={{ padding: "3rem 2.5rem", background: "#FFFFF2" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#ee2e22",  fontWeight: 700, marginBottom: "1rem" }}>
                        Follow Us On Instagram
                    </p>
                    <h2 style={{
                        fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                        fontSize: "clamp(2rem, 5vw, 3.75rem)",
                        color: "#005c97",
                        marginBottom: "1.5rem",
                        lineHeight: 1,
                    }}>
                        @paninfra
                    </h2>
                    <div style={{ width: "80px", height: "1px", background: "#ee2e22", margin: "0 auto" }} />
                </div>

                {/* Embed — centered */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "2rem 0 3rem" }}>
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/paninfra/"
                        data-instgrm-version="14"
                        style={{
                            background: "#FFF",
                            border: "0",
                            borderRadius: "3px",
                            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                            margin: "0 auto",
                            maxWidth: "540px",
                            minWidth: "326px",
                            width: "100%",
                            padding: "0",
                        }}
                    >
                        <div style={{ padding: "16px" }}>
                            <a href="https://www.instagram.com/paninfra/" style={{ background: "#FFFFFF", lineHeight: "0", padding: "0", textAlign: "center", textDecoration: "none", width: "100%" }} target="_blank" rel="noreferrer">
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: 0, height: "40px", marginRight: "14px", width: "40px" }}></div>
                                    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "14px", marginBottom: "6px", width: "100px" }}></div>
                                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "14px", width: "60px" }}></div>
                                    </div>
                                </div>
                                <div style={{ padding: "19% 0" }}></div>
                                <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}></div>
                                <div style={{ paddingTop: "8px" }}>
                                    <div style={{ color: "#3897f0", fontFamily: "Arial,sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: 550, lineHeight: "18px" }}>
                                        View this profile on Instagram
                                    </div>
                                </div>
                                <div style={{ padding: "12.5% 0" }}></div>
                                <div style={{ display: "flex", flexDirection: "row", marginBottom: "14px", alignItems: "center" }}>
                                    <div>
                                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "12.5px", width: "12.5px", transform: "translateX(0px) translateY(7px)" }}></div>
                                        <div style={{ backgroundColor: "#F4F4F4", height: "12.5px", transform: "rotate(-45deg) translateX(3px) translateY(1px)", width: "12.5px", flexGrow: 0, marginRight: "14px", marginLeft: "2px" }}></div>
                                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "12.5px", width: "12.5px", transform: "translateX(9px) translateY(-18px)" }}></div>
                                    </div>
                                    <div style={{ marginLeft: "8px" }}>
                                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "20px", width: "20px" }}></div>
                                        <div style={{ width: "0", height: "0", borderTop: "2px solid transparent", borderLeft: "6px solid #f4f4f4", borderBottom: "2px solid transparent", transform: "translateX(16px) translateY(-4px) rotate(30deg)" }}></div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center", marginBottom: "24px" }}>
                                    <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "14px", marginBottom: "6px", width: "224px" }}></div>
                                    <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "14px", width: "144px" }}></div>
                                </div>
                            </a>
                            <p style={{ color: "#c9c8cd", fontFamily: "Arial,sans-serif", fontSize: "14px", lineHeight: "17px", marginBottom: "0", marginTop: "8px", overflow: "hidden", padding: "8px 0 7px", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                <a href="https://www.instagram.com/paninfra/" style={{ color: "#c9c8cd", fontFamily: "Arial,sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: "normal", lineHeight: "17px", textDecoration: "none" }} target="_blank" rel="noreferrer">
                                    Pan Infra
                                </a>
                                {" "}(@paninfra) • Instagram photos and videos
                            </p>
                        </div>
                    </blockquote>
                </div>

            </div>
            <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
        </section>
    );
}
