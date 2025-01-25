import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedText from "./animated-text.tsx";
import {
	enclosed,
	faqBg,
	fourStep,
	mobileDna,
	oneStep,
	pt,
	threeStep,
	twoStep,
} from "../assets/index.ts";
import { faqItems } from "../constants/index.ts";

export default function ServicesSteps() {
	const [isOpen, setIsOpen] = useState(false);
	const [openIndex, setOpenIndex] = useState(null);
	const handleItemClick = (index) => {
		setOpenIndex(openIndex === index ? null : index); // Toggle the clicked item
	};
	const items = [
		{
			title: "Lorem Ipsum simply dummy text?",
			content:
				"Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
		},
		{
			title: "Lorem Ipsum simply dummy text?",
			content:
				"Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
		},
		{
			title: "Lorem Ipsum simply dummy text?",
			content:
				"Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
		},
	];
	return (
		<div className="w-full">
			<div className="w-full flex items-center justify-center flex-col gap-20 relative">
				<div className="w-full flex justify-center items-center flex-col">
					<AnimatedText
						text="Four easy steps for your DNA"
						className="text-black uppercase tracking-tighter heading leading-tight font-MonstrateBold font-medium"
					/>
					<AnimatedText
						text=" paternity test"
						className="text-black font-MonstrateBold font-medium uppercase tracking-tighter heading leading-tight"
					/>
				</div>
				<div className="w-full flex items-center justify-center gap-10 pb-20">
					<div className="w-[250px] pt-20 px-5 pb-10 bg-white rounded-[20px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.10)] relative">
						<h1 className="text-black text-lg text-center font-MonstrateBold font-semibold leading-tight tracking-tight uppercase overflow-hidden">
							Buy your <br /> collection kit
						</h1>
						<div className="absolute -top-1/2 -translate-x-1/2 left-1/2 translate-y-6">
							<img
								src={oneStep}
								alt="oneStep"
							/>
						</div>
					</div>
					<div className="w-[250px] pt-20 px-5 pb-10 bg-white rounded-[20px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.10)] relative">
						<h1 className="text-black text-lg text-center font-MonstrateBold font-semibold leading-tight tracking-tight uppercase overflow-hidden">
							Collect your cheek <br /> cell DNA samples
						</h1>
						<div className="absolute -top-1/2 -translate-x-1/2 left-1/2 translate-y-6">
							<img
								src={twoStep}
								alt="twoStep"
							/>
						</div>
					</div>
					<div className="w-[250px] pt-20 px-5 pb-10 bg-white rounded-[20px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.10)] relative">
						<h1 className="text-black text-lg text-center font-MonstrateBold font-semibold leading-tight tracking-tight uppercase overflow-hidden">
							Post back to our <br /> laboratory
						</h1>
						<div className="absolute -top-1/2 -translate-x-1/2 left-1/2 translate-y-6">
							<img
								src={threeStep}
								alt="threeStep"
							/>
						</div>
					</div>
					<div className="w-[250px] pt-20 px-5 pb-10 bg-white rounded-[20px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.10)] relative">
						<h1 className="text-black text-lg text-center font-MonstrateBold font-semibold leading-tight tracking-tight uppercase overflow-hidden">
							Receive your <br /> results by email
						</h1>
						<div className="absolute -top-1/2 -translate-x-1/2 left-1/2 translate-y-6">
							<img
								src={fourStep}
								alt="fourStep"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full">
				<div className="w-full flex justify-between gap-10 relative xm:flex-col sm:flex-col padding-x">
					<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-8 relative z-50">
						<div className="relative z-50">
							<h1 className="relative z-50 flex flex-col gap-2">
								<AnimatedText
									text="How Do We Perform"
									className="text-black heading font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
								/>
								<AnimatedText
									text="Infidelity Testing?"
									className="text-black font-MonstrateBold heading leading-none tracking-tight flex uppercase overflow-hidden"
								/>
							</h1>
						</div>
						<div className="flex flex-col gap-6 relative z-50">
							<p className="text-lg font-MonstrateRegular text-black leading-loose font-medium">
								At Mobile DNA Now LLC, we provide discreet and reliable
								infidelity testing services to help uncover the truth in
								sensitive situations. Our process is simple, confidential, and
								designed to offer clarity while maintaining professionalism and
								respect for all parties involved.
							</p>
							<p className="text-lg font-MonstrateRegular text-black leading-loose font-medium">
								Infidelity testing typically involves the collection of DNA
								samples from personal items such as clothing, bedding, or other
								materials provided by the client. Our team ensures proper
								handling of these samples to maintain accuracy and reliability.
								Once collected, the samples are sent to an accredited laboratory
								for analysis, where cutting-edge techniques are used to
								determine if DNA evidence supports your concerns.
							</p>
							<p className="text-lg font-MonstrateRegular text-black leading-loose font-medium">
								We understand the emotional nature of this service, which is why
								we handle each case with compassion and confidentiality. You can
								trust Mobile DNA Now LLC to provide accurate results and support
								you throughout the process.
							</p>
							<Link
								style={{
									background:
										" linear-gradient(90deg, #F4404A -9.14%, #700303 249.14%)",
								}}
								className="w-fit flex items-center gap-2 btn transition-all duration-300 ease-in-out text-white px-4 py-4 uppercase text-[16px] font-MonstrateRegular leading-tight tracking-tight rounded-md"
								to="/contact-us">
								order now
							</Link>
						</div>
					</div>
					<div className="w-1/2 xm:w-full sm:w-full">
						<img
							src={pt}
							alt="pt"
							className="w-full h-[800px] object-cover"
						/>
					</div>
				</div>
				<div
					className="w-full flex items-center justify-center py-4 my-10"
					style={{
						background:
							" linear-gradient(90deg, #F4404A -9.14%, #700303 249.14%)",
					}}>
					<p className="text-lg font-MonstrateRegular text-white leading-loose font-medium">
						The USA’s fastest, most accurate DNA paternity test for just $89
					</p>
				</div>
			</div>
			<div className="w-full">
				<div className="w-full flex justify-between gap-10 relative xm:flex-col sm:flex-col padding-x">
					<div className="w-1/2 xm:w-full sm:w-full">
						<img
							src={mobileDna}
							alt="mobileDna"
							className="w-full h-[800px] object-cover"
						/>
					</div>
					<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-8 relative z-50">
						<div className="relative z-50">
							<h1 className="relative z-50 flex flex-col gap-2">
								<AnimatedText
									text="Why Choose Mobile DNA Now?"
									className="text-black heading font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
								/>
								<AnimatedText
									text="DNA Now?"
									className="text-black font-MonstrateBold heading leading-none tracking-tight flex uppercase overflow-hidden"
								/>
							</h1>
						</div>
						<div className="flex flex-col gap-6 relative z-50">
							<ul className="list-disc pl-5">
								<li className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
									Our mobile services eliminate the need for you to visit a
									clinic. We come to your location to collect samples, ensuring
									a hassle-free and discreet experience.
								</li>
								<li className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
									We partner with certified and accredited laboratories that
									utilize cutting-edge technology to provide precise DNA test
									results you can trust.
								</li>
								<li className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
									Your privacy is our top priority. From sample collection to
									delivering results, we maintain strict confidentiality and
									professionalism in every step of the process.
								</li>
								<li className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
									We offer competitive pricing with no hidden fees, making
									high-quality DNA testing accessible to everyone.
								</li>
							</ul>
							<p className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
								Choose Mobile DNA Now for a stress-free testing experience with
								results you can rely on. Whether you need legal DNA testing,
								paternity tests, or infidelity testing, we’re here to provide
								the answers you need with compassion and care.
							</p>
							<Link
								style={{
									background:
										" linear-gradient(90deg, #F4404A -9.14%, #700303 249.14%)",
								}}
								className="w-fit flex items-center gap-2 btn transition-all duration-300 ease-in-out text-white px-4 py-4 uppercase text-[16px] font-MonstrateRegular leading-tight tracking-tight rounded-md"
								to="/contact-us">
								order now
							</Link>
						</div>
					</div>
				</div>
				<div
					className="w-full flex items-center justify-center py-4 my-10"
					style={{
						background:
							" linear-gradient(90deg, #F4404A -9.14%, #700303 249.14%)",
					}}>
					<p className="text-lg font-MonstrateRegular text-white leading-loose font-medium">
						Over ONE MILLION genetic tests performed since 2004
					</p>
				</div>
			</div>
			<div className="w-full">
				<div className="w-full padding-x flex justify-between gap-10 relative xm:flex-col sm:flex-col">
					<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-8 relative z-50">
						<div className="relative z-50">
							<h1 className="relative z-50 flex flex-col gap-2">
								<AnimatedText
									text="Enclosed in the"
									className="text-black heading font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
								/>
								<AnimatedText
									text="DNA test kit:"
									className="text-black font-MonstrateBold heading leading-none tracking-tight flex uppercase overflow-hidden"
								/>
							</h1>
						</div>
						<div className="flex flex-col gap-6 relative z-50">
							<p className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
								The DNA test kit contains everything needed to collect your
								sample and submit it for analysis. Inside, you will find clear
								instructions on how to properly collect a sample using the
								provided swab or collection device. It's crucial that you follow
								the steps precisely to avoid any issues with the sample,
								ensuring an accurate and reliable result.
							</p>
							<p className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
								Once you’ve collected your sample, securely package it and send
								it back using the pre-paid shipping label included in the kit.
								Your sample will be processed in a state-of-the-art laboratory,
								where advanced technology will be used to analyze your genetic
								information.
							</p>
							<p className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
								This kit is designed to provide you with a comprehensive
								overview of your genetic makeup. In addition to providing
								insights into your ancestry, the test may also reveal details
								about inherited traits, such as eye color, and health
								predispositions, like your potential risk for certain
								conditions. The results are designed to give you valuable
								information that can help you make informed decisions about your
								health and lifestyle.
							</p>
							<Link
								style={{
									background:
										" linear-gradient(90deg, #F4404A -9.14%, #700303 249.14%)",
								}}
								className="w-fit flex items-center gap-2 btn transition-all duration-300 ease-in-out text-white px-4 py-4 uppercase text-[16px] font-MonstrateRegular leading-tight tracking-tight rounded-md"
								to="/contact-us">
								order now
							</Link>
						</div>
					</div>
					<div className="w-1/2 xm:w-full sm:w-full">
						<img
							src={enclosed}
							alt="enclosed"
							className="w-full h-[800px] object-cover"
						/>
					</div>
				</div>
				<div
					className="w-full flex items-center justify-center py-4 my-10"
					style={{
						background:
							" linear-gradient(90deg, #F4404A -9.14%, #700303 249.14%)",
					}}>
					<p className="text-lg font-MonstrateRegular text-white leading-loose font-medium">
						All testing performed at our award-winning USA laboratory
					</p>
				</div>
			</div>
			<div className="w-full padding-y">
				<div className="w-full padding-x flex justify-between gap-10 relative xm:flex-col sm:flex-col">
					<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-8 relative z-50">
						<div className="flex flex-col gap-3">
							<div className="flex items-center gap-3">
								<p className="text-[#f4404a] text-[15px] font-semibold font-MonstrateMedium uppercase leading-normal tracking-[3.60px]">
									our expert answers
								</p>
								<span className="w-[134.02px] h-[1.13px] bg-gradient-to-r from-[#f4404a] to-[#700303]" />
							</div>
							<h1 className="relative z-50 flex flex-col gap-2">
								<AnimatedText
									text="frequently asked"
									className="text-black heading font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
								/>
								<AnimatedText
									text="questions"
									className="text-black font-MonstrateBold heading leading-none tracking-tight flex uppercase overflow-hidden"
								/>
							</h1>
						</div>
						<div className="flex flex-col gap-8 relative z-50">
							{faqItems.map((item, index) => (
								<div className="w-full border border-[#ff1a1a]/40 p-5">
									<div>
										<button
											className="w-full flex gap-4 items-center p-4 text-left text-gray-800"
											onClick={() => handleItemClick(index)}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="26"
												height="26"
												viewBox="0 0 26 26"
												fill="none"
												className={`${
													isOpen ? "rotate-0" : "rotate-180"
												} transition-all duration-200 ease-linear`}>
												<path
													d="M3.31079 25.3199C3.06327 25.3199 2.81575 25.3204 2.56823 25.1966C1.94942 24.9491 1.57812 24.33 1.57812 23.7112C1.57812 23.2162 1.82565 22.7211 2.19694 22.4736L12.9643 13.1914L23.7316 22.4736C24.1029 22.8449 24.3504 23.2162 24.3504 23.7112C24.3504 24.33 23.9791 24.9491 23.3603 25.1966C23.1128 25.3204 22.8653 25.3199 22.6177 25.3199C22.2464 25.3199 21.8751 25.1964 21.5039 24.9488L12.9643 17.5231L4.42466 24.9488C4.17714 25.0726 3.68208 25.3199 3.31079 25.3199Z"
													fill="#FF1A1A"
												/>
												<path
													d="M3.31079 12.5738C3.06327 12.5738 2.81575 12.5737 2.56823 12.4499C1.94942 12.2024 1.57812 11.5839 1.57812 10.9651C1.57812 10.4701 1.82565 9.97502 2.19694 9.72749L12.9643 0.445312L23.7316 9.72749C24.1029 10.0988 24.3504 10.4701 24.3504 10.9651C24.3504 11.5839 23.9791 12.2024 23.3603 12.4499C23.1128 12.5737 22.8653 12.5738 22.6177 12.5738C22.2464 12.5738 21.8751 12.4503 21.5039 12.2027L12.9643 4.777L4.42466 12.2027C4.17714 12.3265 3.68208 12.5738 3.31079 12.5738Z"
													fill="#FF1A1A"
												/>
											</svg>
											<span className="text-[#161616] uppercase font-medium font-MonstrateMedium leading-tight tracking-tight">
												{item.title}
											</span>
										</button>
										{openIndex === index && (
											<div className="p-4 transition-all duration-200 ease-linear text-sm font-MonstrateMedium tracking-tight">
												<p>{item.content}</p>
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="w-1/2 xm:w-full sm:w-full">
						<img
							src={faqBg}
							alt="faqBg"
							className="w-full h-[800px] object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
