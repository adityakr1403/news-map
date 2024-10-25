import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "State Info",
    description: "State information of India",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-between gap-10 relative bg-slate-600/10`}
        >
        <video className="absolute object-cover -z-10 w-full h-full blur-md" loop={true} autoPlay={true} muted={true}>
            <source src="/bg.webm" type="video/mp4"/>
        </video>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
