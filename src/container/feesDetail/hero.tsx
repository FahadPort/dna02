import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { paternityTest } from "../../assets/index.ts";
import getService from "../../actions/get-service.ts";
import AnimatedText from "../../components/animated-text.tsx";

export default function Hero() {
	const { id } = useParams();
	const [service, setService] = useState();
	useEffect(() => {
		const fetchService = async () => {
			if (id) {
				try {
					const response = await getService(id);
					setService(response.data);
				} catch (err) {
					console.error("Error fetching products:", err);
				}
			} else {
				console.error("Service ID is undefined");
			}
		};
		fetchService();
	}, []);
	return (
		<div className="w-full h-[60vh] relative">
			<img
				src={paternityTest}
				className="w-full h-full object-cover"
				alt="paternityTest"
			/>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
				<AnimatedText
					className="text-[#fff] font-HyperspaceRace heading font-black leading-tight uppercase"
					// @ts-ignore
					text={service?.title}
				/>
			</div>
		</div>
	);
}
