import React from "react";
import { aboutPng } from "../../assets/index.ts";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedText from "../../components/animated-text.tsx";

export default function ServiceDetailInfo() {
	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex justify-between gap-10 relative xm:flex-col sm:flex-col">
				<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-8 relative z-50">
					<div className="flex flex-col gap-3">
						<div className="flex items-center gap-3">
							<p className="text-[#f4404a] text-[15px] font-semibold font-MonstrateMedium uppercase leading-normal tracking-[3.60px]">
								Service Detail
							</p>
							<span className="w-[134.02px] h-[1.13px] bg-gradient-to-r from-[#f4404a] to-[#700303]" />
						</div>
						<h1 className="relative z-50 flex flex-col gap-2">
							<AnimatedText
								text="DNA Testing"
								className="text-black heading font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
							/>
						</h1>
					</div>
					<div className="flex flex-col gap-8 relative z-50">
						<div className="w-full">
							<div className="flex flex-col gap-6 relative z-50">
								<p className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
									At Mobile DNA Now LLC, we understand the importance of
									accurate and reliable DNA testing, especially when it comes to
									paternity and other sensitive matters. That’s why we strive to
									make the entire process simple and stress-free for our
									clients. Our mobile services are designed to offer you maximum
									convenience, ensuring you can get tested without having to
									leave the comfort of your home or office.
								</p>
								<p className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
									We take pride in maintaining the highest standards of
									professionalism and confidentiality throughout the testing
									process. From the initial appointment to the final results,
									our team ensures that every step is handled with care and
									precision. Whether you need testing for legal purposes or
									personal peace of mind, our state-of-the-art methods and
									certified labs guarantee trustworthy results that you can
									count on.
								</p>
								<p className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
									With Mobile DNA Now LLC, you are not just getting a service
									but a reliable partner who is committed to delivering clarity
									and answers with compassion and discretion. Our goal is to
									empower you with the information you need while ensuring your
									privacy is respected at all times.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-1/2 xm:w-full sm:w-full relative">
					<img
						src={aboutPng}
						alt="aboutPng"
						className="w-full h-[800px] object-cover"
					/>
					<div className="absolute bottom-5 p-8 flex items-center">
						<div className="w-[400px] p-5 bg-gradient-to-r from-[#f4404a] to-[#700303] hover:-translate-y-5 duration-200 ease-linear transition-all">
							<p className="text-lg font-MonstrateRegular text-white font-medium">
								At Mobile DNA Now LLC, our mission is to provide accessible,
								reliable, and discreet DNA testing services that prioritize our
								clients’ convenience and peace of mind.
							</p>
							<div className="flex items-center gap-2 cursor-pointer group">
								<p className="text-white text-[25px] font-bold font-MonstrateBold uppercase leading-loose">
									Our Mission
								</p>
								<FaArrowRightLong
									size={25}
									className="w-8 ease-in-out transition-all duration-300 group-hover:translate-x-2 text-white"
								/>
							</div>
						</div>
						<div className="w-[400px] p-5 bg-white hover:-translate-y-5 duration-200 ease-linear transition-all">
							<p className="text-lg font-MonstrateRegular text-black font-medium">
								Our vision is to be a trusted leader in mobile DNA testing
								services, empowering individuals and families with information
								that fosters trust and resolves uncertainties.
							</p>
							<div className="flex items-center gap-2 cursor-pointer group">
								<p className="text-[#f4404a] text-[25px] font-bold font-MonstrateBold uppercase leading-loose">
									Our Vission
								</p>
								<FaArrowRightLong
									size={25}
									className="w-8 ease-in-out transition-all duration-300 group-hover:translate-x-2 text-[#f4404a]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
