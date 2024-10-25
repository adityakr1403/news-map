import React from 'react';
import Image from "next/image";
import logo from "@/assets/india.svg"
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex flex-col md:flex-row items-center gap-3 justify-between p-4 px-10 ">
            <div className="flex items-center gap-3">
                <Image src={logo} width={32} height={32} alt="logo" className="invert"/>
                <Link href={"/"} className="text-3xl uppercase font-bold text-white">StateInfo</Link>
            </div>
            <div className="flex justify-around gap-10 text-xl font-bold uppercase text-white">
                <Link href={"/calendar"} className="">Calendar</Link>
                <Link href={"/subjects"} className="">Subjects</Link>
            </div>
            {/*<div className="flex gap-10 text-xl font-bold text-white">*/}
            {/*    <div className="">UserLogin</div>*/}
            {/*    <div className="">Weather info</div>*/}
            {/*</div>*/}
        </nav>
    );
};

export default Navbar;