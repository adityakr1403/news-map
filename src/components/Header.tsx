import React from 'react';
import Navbar from "@/components/Navbar";

const Header = () => {
    return (
        <section className="sticky top-0 backdrop-blur-md z-30">
            <Navbar/>
        </section>
    );
};

export default Header;