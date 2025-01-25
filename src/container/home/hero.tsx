import React from "react";
import { heroBg } from "../../assets/index.ts";
import AnimatedText from "../../components/animated-text.tsx";

export default function HomeHero() {
	return (
		<>
			<div className="w-full h-screen relative">
				<video
					src={heroBg}
					autoPlay
					muted
					loop
					className="w-full h-full object-cover absolute top-0 left-0"
				/>
				<div className="w-full flex h-full items-center padding-x">
					<div className="flex flex-col gap-5 relative z-50">
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-3">
								<p className="text-white text-[15px] font-semibold font-MonstrateMedium uppercase leading-normal tracking-[3.60px]">
									Mobile DNA Now!
								</p>
								<span className="w-[134.02px] h-[1.13px] bg-white" />
							</div>
							<h1 className="relative z-50 flex flex-col gap-2">
								<AnimatedText
									text="DNA Testing Made Easy,"
									className="text-white heading font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
								/>
								<AnimatedText
									text="Anywhere You Are"
									className="text-white heading font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
								/>
							</h1>
							<p className="text-lg font-MonstrateRegular text-white leading-loose font-medium">
								Experience fast, secure, and discreet DNA testing <br /> at your
								convenience.
							</p>
						</div>
						<div className="flex flex-col gap-2 relative z-50">
							<div className="w-[523.76px] flex items-center px-4 text-xl h-[50.99px] bg-white/20 backdrop-blur-[10.60px] text-white font-MonstrateRegular leading-tight tracking-tight">
								01 Infidelity Testing
							</div>
							<div className="w-[487.50px] flex items-center px-4 text-xl h-[50.99px] bg-white/20 backdrop-blur-[10.60px] text-white font-MonstrateRegular leading-tight tracking-tight">
								02 Legal Paternity Testing
							</div>
							<div className="w-[450px] flex items-center px-4 text-xl h-[50.99px] bg-white/20 backdrop-blur-[10.60px] text-white font-MonstrateRegular leading-tight tracking-tight">
								03 Ancestry Testing
							</div>
							<div className="w-[400px] flex items-center px-4 text-xl h-[50.99px] bg-white/20 backdrop-blur-[10.60px] text-white font-MonstrateRegular leading-tight tracking-tight">
								04 Grand-parentage
							</div>
							<div className="w-[360px] flex items-center px-4 text-xl h-[50.99px] bg-white/20 backdrop-blur-[10.60px] text-white font-MonstrateRegular leading-tight tracking-tight">
								05 Siblingship
							</div>
							<div className="w-[320px] flex items-center px-4 text-xl h-[50.99px] bg-white/20 backdrop-blur-[10.60px] text-white font-MonstrateRegular leading-tight tracking-tight">
								06 Various DNA Test
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
