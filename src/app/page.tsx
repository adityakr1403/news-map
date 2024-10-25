"use client"
import IndiaMap from "@/components/IndiaMap";
import HeadLines from "@/components/HeadLines";
import {useRef, useState} from "react";

export default function Home() {
    const infoDisplayRef = useRef<HTMLLabelElement>(null);
    const [stateCode, setStateCode] = useState("INDL")

    const InfoDisplay = () => {
        return <label ref={infoDisplayRef}
                      className="absolute cursor-pointer font-bold font-mono text-white drop-shadow-2xl">Delhi</label>
    }
    return (
        <section
            className="flex flex-col md:flex-row ">
            <div className="aspect-square relative flex-1">
                <IndiaMap infoDisplayRef={infoDisplayRef} setStateCode={(code: string) => setStateCode(code)}/>
                <InfoDisplay/>
            </div>
            <div className="flex-1">

                <HeadLines stateCode={stateCode}/>
            </div>
        </section>
    );
}
