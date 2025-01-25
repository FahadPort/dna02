import Lenis from "lenis";
import React, { useEffect } from "react";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";
import OrderHero from "../container/order/hero.tsx";
import OrderPage from "../container/order/order.tsx";

export default function Order() {
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
			<OrderHero />
			<OrderPage />
			<Footer />
		</>
	);
}
