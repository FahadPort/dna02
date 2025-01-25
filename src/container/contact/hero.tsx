import React from "react";
import { contactBg } from "../../assets/index.ts";
import AnimatedText from "../../components/animated-text.tsx";

export default function Hero() {
	return (
		<div className="w-full h-[60vh] flex items-center relative justify-center">
			<img
				src={contactBg}
				alt="bg"
				className="w-full h-full object-cover"
			/>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<AnimatedText
					className="text-white text-center heading font-black leading-tight uppercase tracking-tight"
					text="Contact Us"
				/>
			</div>
		</div>
	);
}
