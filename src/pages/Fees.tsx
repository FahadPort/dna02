import Lenis from "lenis";
import React, { useEffect } from "react";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import Hero from "../container/fees/hero.tsx";
import Fees from "../container/fees/fees.tsx";

export default function ServicePage() {
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
			<Fees />
			<Footer />
		</>
	);
}
