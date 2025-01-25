import Lenis from "lenis";
import React, { useEffect } from "react";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";
import ServiceDetailHero from "../container/feesDetail/hero.tsx";
import ServiceDetailInfo from "../container/feesDetail/info.tsx";

export default function FeesDetail() {
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
			<ServiceDetailHero />
			<ServiceDetailInfo />
			<Footer />
		</>
	);
}
