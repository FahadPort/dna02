import Lenis from "lenis";
import React, { useEffect } from "react";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";
import ContactHero from "../container/contact/hero.tsx";
import ContactForm from "../container/contact/form.tsx";

export default function Contact() {
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
			<ContactHero />
			<ContactForm />
			<Footer />
		</>
	);
}
