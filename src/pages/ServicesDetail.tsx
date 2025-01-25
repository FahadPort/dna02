import Lenis from "lenis";
import React, { useEffect } from "react";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";
import Hero from "../container/serviceDetail/hero.tsx";
import ServiceDetailInfo from "../container/serviceDetail/info.tsx";

export default function ServicesDetail() {
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
			<Hero />
			<ServiceDetailInfo />
			<Footer />
		</>
	);
}
