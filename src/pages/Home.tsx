import Lenis from "lenis";
import React, { useEffect } from "react";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import HomeHero from "../container/home/hero.tsx";
import HomeServices from "../container/home/services.tsx";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<Navbar />
			<HomeHero />
			<HomeServices />
			<Footer />
		</>
	);
}
