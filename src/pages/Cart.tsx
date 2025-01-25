import Lenis from "lenis";
import React, { useEffect } from "react";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";
import CartPage from "../container/cart/cart.tsx";
import CartHero from "../container/cart/hero.tsx";

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
			<CartHero />
			<CartPage />
			<Footer />
		</>
	);
}
