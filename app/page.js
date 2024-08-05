import Image from "next/image";
import Navbar from "@/app/components/Navigation/Navbar";
import LandingPage from "@/app/components/LandingPage/LandingPage";
import '@/app/components/LandingPage/landing.css';
import '@/app/components/Navigation/nav.css';
import '@/app/globals.css';

export default function Home() {
  return (
    <main className="flex flex-col justify-start">
        <Navbar/>
        <LandingPage/>
    </main>
  );
}