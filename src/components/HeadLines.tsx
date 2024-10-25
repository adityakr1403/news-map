"use client";
import React, {useEffect, useState} from 'react';
import {stateDetailsProvider, StateInfo} from "@/utils/stateDetailsProvider";

interface HeadLinesProps {
    stateCode: string
}

const HeadLines = ({stateCode}: HeadLinesProps) => {
    const [stateInfo, setStateInfo] = useState({} as StateInfo)
    useEffect(() => {
        if (stateCode) {
            const stateInfo = stateDetailsProvider(stateCode);
            setStateInfo(stateInfo);
        }
    }, []);
    useEffect(() => {
        const stateInfo = stateDetailsProvider(stateCode);
        setStateInfo(stateInfo);
    }, [stateCode]);

    return (
        <div className="flex flex-col gap-10 text-yellow-100 px-5">
            <div className="text-2xl uppercase font-bold text-orange-100 ">State info :</div>
            <div className="grid gap-2 grid-cols-2 font-semibold  text-xl ">
                <div className="contents">
                    <div className="font-bold">Name :</div>
                    <div className="">{stateInfo.name}</div>
                </div>
                <div className="contents">
                    <div className="font-bold">Code :</div>
                    <div className="">{stateInfo.code}</div>
                </div>
                <div className="contents">
                    <div className="font-bold">Capital :</div>
                    <div className="">{stateInfo.capital}</div>
                </div>
                <div className="contents">
                    <div className="font-bold">Districts :</div>
                    <select className=" text-gray-700 w-auto rounded">{
                        stateInfo.districts?.map((district) => {
                            return <option key={district.id}>{district.name}</option>
                        })
                    }</select>
                </div>
                <div className="contents">
                    <div className="font-bold">State Animal :</div>
                    <details className="">
                        <summary className="cursor-pointer">{stateInfo.stateAnimal?.commonName}</summary>
                        <img src={`http://${stateInfo.stateAnimal?.imgSrc}`}
                             alt={stateInfo.stateAnimal?.imgAlt as string}/>
                    </details>
                </div>
                <div className="contents">
                    <div className="font-bold">State Bird :</div>
                    <details className="">
                        <summary className="cursor-pointer">{stateInfo.stateBird?.bird}</summary>
                        {

                        } <img src={`http://${stateInfo.stateBird?.imgSrc}`}
                               alt={stateInfo.stateBird?.imgAlt as string}/>
                    </details>
                </div>
                <div className="contents">
                    <div className="font-bold">State Flower :</div>
                    <details className="">
                        <summary className="cursor-pointer">{stateInfo.stateFlower?.commonName}</summary>
                        <img src={`http://${stateInfo.stateFlower?.imgSrc}`}
                             alt={stateInfo.stateBird?.imgAlt as string}/>
                    </details>
                </div>
                <div className="contents">
                    <div className="font-bold">State Tree :</div>
                    <details className="">
                        <summary className="cursor-pointer">{stateInfo.stateTree?.commonName}</summary>
                        <img src={`http://${stateInfo.stateTree?.imgSrc}`}
                             alt={stateInfo.stateTree?.imgAlt as string}/>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default HeadLines;