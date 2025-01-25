import Lenis from "lenis";
import React, { useEffect } from "react";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";
import AboutHero from "../container/about/hero.tsx";
import WhoWeAre from "../container/about/who-we-are.tsx";

export default function About() {
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
			<AboutHero />
			<WhoWeAre />
			<Footer />
		</>
	);
}
