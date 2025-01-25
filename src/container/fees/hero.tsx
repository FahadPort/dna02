import React from "react";
import { servicesBg } from "../../assets/index.ts";
import AnimatedText from "../../components/animated-text.tsx";

export default function Hero() {
	return (
		<>
			<div className="w-full h-[60vh] relative">
				<img
					src={servicesBg}
					className="w-full h-full object-cover"
					alt="servicesBg"
				/>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
					<AnimatedText
						className="text-[#fff] font-HyperspaceRace heading font-black leading-tight uppercase"
						text="Fees"
					/>
				</div>
			</div>
		</>
	);
}
