import React from "react";
import { cartGif } from "../../assets/index.ts";
import AnimatedText from "../../components/animated-text.tsx";

export default function CartHero() {
	return (
		<>
			<div className="w-full h-[60vh] relative">
				<img
					src={cartGif}
					alt="cartGif"
					className="w-full h-full object-cover"
				/>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
					<AnimatedText
						className="text-[#fff] font-HyperspaceRace heading font-black leading-tight uppercase"
						text="Shopping Cart"
					/>
				</div>
			</div>
		</>
	);
}
