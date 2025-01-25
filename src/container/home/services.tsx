import {
	aboutPng,
	ancestryTesting,
	arrowRight,
	chatIcon,
	faqBg,
	grandparenttesting,
	ourceo,
	paternityTesting,
	siblingDNATesting,
	twintesting,
	videoThumbnail,
} from "../../assets/index.ts";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { faqItems } from "../../constants/index.ts";
import ContactForm from "../../container/contact/form.tsx";
import AnimatedText from "../../components/animated-text.tsx";

export default function HomeServices() {
	const [isOpen, setIsOpen] = useState(false);
	const [openIndex, setOpenIndex] = useState(null);
	const handleItemClick = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<>
			<div className="w-full padding-x padding-y">
				<div className="w-full flex justify-between gap-10 relative xm:flex-col sm:flex-col">
					<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-8 relative z-50">
						<div className="flex flex-col gap-3">
							<div className="flex items-center gap-3">
								<p className="text-[#f4404a] text-[15px] font-semibold font-MonstrateMedium uppercase leading-normal tracking-[3.60px]">
									About Us
								</p>
								<span className="w-[134.02px] h-[1.13px] bg-gradient-to-r from-[#f4404a] to-[#700303]" />
							</div>
							<h1 className="relative z-50 flex flex-col gap-2">
								<AnimatedText
									text="Your Trusted Partner in"
									className="text-black heading font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
								/>
								<AnimatedText
									text="DNA Testing Services"
									className="text-black heading font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
								/>
							</h1>
						</div>
						<div className="flex flex-col gap-8 relative z-50">
							<div className="w-full">
								<div className="flex flex-col gap-5 relative z-50">
									<p className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
										At Mobile DNA Now LLC, we understand the importance of
										accurate and reliable DNA testing, especially when it comes
										to paternity and other sensitive matters. That’s why we
										strive to make the entire process simple and stress-free for
										our clients. Our mobile services are designed to offer you
										maximum convenience, ensuring you can get tested without
										having to leave the comfort of your home or office.
									</p>
									<div className="flex items-center gap-3">
										<span className="w-20 rounded-lg h-[2px] bg-gradient-to-r from-[#f4404a] to-[#700303]" />
										<p className="text-black text-2xl font-semibold font-MonstrateMedium uppercase leading-normal tracking-[3.60px]">
											Infidelity Testing
										</p>
									</div>
									<div className="flex items-center gap-3">
										<span className="w-20 rounded-lg h-[2px] bg-gradient-to-r from-[#f4404a] to-[#700303]" />
										<p className="text-black text-2xl font-semibold font-MonstrateMedium uppercase leading-normal tracking-[3.60px]">
											Legal Paternity Testing
										</p>
									</div>
									<div className="flex items-center gap-3">
										<span className="w-20 rounded-lg h-[2px] bg-gradient-to-r from-[#f4404a] to-[#700303]" />
										<p className="text-black text-2xl font-semibold font-MonstrateMedium uppercase leading-normal tracking-[3.60px]">
											Ancestry Testing
										</p>
									</div>
									<div className="flex items-center gap-3">
										<span className="w-20 rounded-lg h-[2px] bg-gradient-to-r from-[#f4404a] to-[#700303]" />
										<p className="text-black text-2xl font-semibold font-MonstrateMedium uppercase leading-normal tracking-[3.60px]">
											Grand-parentage
										</p>
									</div>
									<div className="flex items-center gap-3">
										<span className="w-20 rounded-lg h-[2px] bg-gradient-to-r from-[#f4404a] to-[#700303]" />
										<p className="text-black text-2xl font-semibold font-MonstrateMedium uppercase leading-normal tracking-[3.60px]">
											Siblingship
										</p>
									</div>
									<div className="flex items-center gap-3">
										<span className="w-20 rounded-lg h-[2px] bg-gradient-to-r from-[#f4404a] to-[#700303]" />
										<p className="text-black text-2xl font-semibold font-MonstrateMedium uppercase leading-normal tracking-[3.60px]">
											Various DNA Test
										</p>
									</div>
								</div>
							</div>
							<Link
								to="/contact-us"
								className={`w-fit group flex items-center gap-3 text-[#0E0E30] text-[20px] font-normal leading-tight tracking-tight px-6 py-3 border border-white`}>
								<span className="w-fit text-white text-[18px] font-MonstrateMedium uppercase font-normal leading-tight tracking-tight">
									Book US Now
								</span>
								<img
									src={arrowRight}
									alt="arrowRightImg"
									className="w-8 group-hover:rotate-[-45deg] ease-in-out transition-all duration-300"
								/>
							</Link>
						</div>
					</div>
					<div className="w-1/2 xm:w-full sm:w-full relative">
						<img
							src={aboutPng}
							alt="aboutPng"
							className="w-full h-[800px] object-cover"
						/>
						<div className="w-full absolute bottom-5 p-8 flex items-center">
							<div className="w-[400px] p-5 bg-gradient-to-r from-[#f4404a] to-[#700303] hover:-translate-y-5 duration-200 ease-linear transition-all">
								<p className="text-lg font-MonstrateRegular text-white font-medium">
									At Mobile DNA Now LLC, our mission is to provide accessible,
									reliable, and discreet DNA testing services that prioritize
									our clients’ convenience and peace of mind.
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
			<div className="w-full padding-x padding-y">
				<div className="w-full flex justify-between gap-5 relative xm:flex-col sm:flex-col">
					<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-8 z-50">
						<div className="flex flex-col gap-3">
							<div className="flex items-center gap-3">
								<p className="text-[#f4404a] text-[15px] font-semibold font-MonstrateMedium uppercase leading-normal tracking-[3.60px]">
									services
								</p>
								<span className="w-[134.02px] h-[1.13px] bg-gradient-to-r from-[#f4404a] to-[#700303]" />
							</div>
							<h1 className="relative z-50 flex flex-col gap-2">
								<AnimatedText
									text="Secure and Confidential"
									className="text-black heading font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
								/>
								<AnimatedText
									text="Services"
									className="text-black heading font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
								/>
							</h1>
						</div>
						<div className="flex flex-col gap-8 relative z-50">
							<div className="w-full">
								<div className="flex flex-col gap-5 relative z-50">
									<p className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
										Secure and Confidential Services** At Mobile DNA Now LLC, we
										prioritize your privacy and peace of mind by offering DNA
										testing services that are both secure and confidential. Our
										strict protocols ensure that your personal information and
										test results remain protected at every step.
									</p>
									<p className="flex items-center gap-2 text-[#f4404a] text-[16px] font-semibold font-MonstrateMedium uppercase leading-normal tracking-[3.60px]">
										View All Services
										<FaArrowRightLong
											size={25}
											className="text-[#f4404a]"
										/>
									</p>
								</div>
							</div>
						</div>
						<div className="w-full flex gap-5 items-end">
							<Link
								to="/fees"
								className="w-1/2 relative">
								<img
									src={paternityTesting}
									alt="ancestryTesting"
									className="w-full h-[400px]"
								/>
								<div className="px-[35px] py-5 bg-gradient-to-r from-[#f4404a] to-[#700303] justify-center items-center gap-2.5 inline-flex absolute bottom-10 left-0 cursor-pointer">
									<div className="text-center text-white text-xs font-semibold font-MonstrateMedium uppercase leading-none">
										DNA Testing
									</div>
								</div>
							</Link>
							<Link
								to="/fees"
								className="w-1/2 relative">
								<img
									src={ancestryTesting}
									alt="ancestryTesting"
									className="w-full h-[450px]"
								/>
								<div className="px-[35px] py-5 bg-gradient-to-r from-[#f4404a] to-[#700303] justify-center items-center gap-2.5 inline-flex absolute bottom-10 left-0">
									<div className="text-center text-white text-xs font-semibold font-MonstrateMedium uppercase leading-none">
										The Process
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="w-1/2 xm:w-full sm:w-full relative">
						<div className="w-full flex gap-5 items-end absolute bottom-0">
							<Link
								to="/fees"
								className="w-1/2 relative">
								<img
									src={twintesting}
									alt="twintesting"
									className="w-full h-[550px]"
								/>
								<div className="px-[35px] py-5 bg-gradient-to-r from-[#f4404a] to-[#700303] justify-center items-center gap-2.5 inline-flex absolute bottom-10 left-0">
									<div className="text-center text-white text-xs font-semibold font-MonstrateMedium uppercase leading-none">
										Court-Admissible Testing
									</div>
								</div>
							</Link>
							<div className="w-1/2 relative flex flex-col gap-2">
								<Link
									to="/fees"
									className="relative">
									<img
										src={grandparenttesting}
										alt="grandparenttesting"
										className="w-full h-[300px]"
									/>
									<div className="px-[35px] py-5 bg-gradient-to-r from-[#f4404a] to-[#700303] justify-center items-center gap-2.5 inline-flex absolute bottom-10 left-0">
										<div className="text-center text-white text-xs font-semibold font-MonstrateMedium uppercase leading-none">
											Court-Admissible Testing
										</div>
									</div>
								</Link>
								<Link
									to="/fees"
									className="relative">
									<img
										src={siblingDNATesting}
										alt="siblingDNATesting"
										className="w-full h-[300px]"
									/>
									<div className="px-[35px] py-5 bg-gradient-to-r from-[#f4404a] to-[#700303] justify-center items-center gap-2.5 inline-flex absolute bottom-10 left-0">
										<div className="text-center text-white text-xs font-semibold font-MonstrateMedium uppercase leading-none">
											Expert Support
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="w-full flex items-center justify-between py-4 mt-10 padding-x"
				style={{
					background:
						" linear-gradient(90deg, #F4404A -9.14%, #700303 249.14%)",
				}}>
				<div className="flex gap-4 items-center">
					<img
						src={chatIcon}
						alt="chatIcon"
						className="hover:scale-110 transition-all duration-300 ease-in-out"
					/>
					<div className="flex flex-col">
						<p className="text-lg font-MonstrateRegular tracking-tight leading-tight text-white font-medium">
							Get Support
						</p>
						<p className="text-lg font-MonstrateRegular tracking-tight leading-tight text-white font-medium">
							Support@demo.com
						</p>
					</div>
				</div>
				<h1 className="relative z-50 flex flex-col gap-2">
					<AnimatedText
						text="make your appointment with Us!"
						className="text-white text-2xl font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
					/>
				</h1>
				<Link
					to="/contact-us"
					className={`w-fit group flex items-center gap-3 text-[#0E0E30] text-[20px] font-normal leading-tight tracking-tight px-6 py-3 border border-white`}>
					<span className="w-fit text-white text-[18px] font-MonstrateMedium uppercase font-normal leading-tight tracking-tight">
						Book US Now
					</span>
					<img
						src={arrowRight}
						alt="arrowRightImg"
						className="w-8 group-hover:rotate-[-45deg] ease-in-out transition-all duration-300"
					/>
				</Link>
			</div>
			<div className="w-full relative">
				<img
					src={videoThumbnail}
					alt="videoThumbnail"
					className="w-full object-cover"
				/>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#2f2b2a]/60 rounded-full justify-center items-center inline-flex cursor-pointer">
					<div className="flex items-center justify-center">
						<FaPlay
							size={26}
							className="text-white"
						/>
					</div>
				</div>
			</div>
			<div className="w-full flex items-center justify-center padding-x pt-10 bg-black">
				<div className="w-1/2 flex items-center justify-center relative">
					<img
						src={ourceo}
						alt="ourceo"
						className="w-[60%] object-cover"
					/>
					<div className="absolute bottom-10 p-8 flex items-center hover:-translate-y-5 duration-200 ease-linear transition-all">
						<div className="w-[500px] p-5 bg-white">
							<p className="flex text-lg font-MonstrateRegular text-black font-medium">
								Dr. Joe Mathew is committed to providing exceptional care and
								guidance with expertise and compassion.
							</p>
						</div>
					</div>
				</div>
				<div className="w-1/2">
					<div className="flex flex-col gap-10">
						<div className="flex flex-col gap-2">
							<p className="text-lg font-MonstrateRegular tracking-tight leading-tight text-white font-medium">
								Our CEO
							</p>
							<p className="text-3xl font-MonstrateBold tracking-tight leading-tight text-white font-medium">
								Joe Mathew - PHD
							</p>
							<p className="text-lg font-MonstrateRegular tracking-tight leading-loose text-white font-medium">
								At Mobile DNA Now LLC, my vision has always been to create a
								service that not only provides accurate and reliable DNA testing
								but also prioritizes the comfort and trust of our clients. We
								understand that the reasons behind seeking DNA testing are
								deeply personal, and our mission is to handle each case with the
								utmost care, confidentiality, and professionalism. By bringing
								our services directly to your doorstep, we aim to eliminate the
								stress and provide you with the answers you need in a convenient
								and compassionate manner.
							</p>
							<p className="text-lg font-MonstrateRegular tracking-tight leading-loose text-white font-medium">
								I am proud of the team we’ve built and the values we uphold as
								we continue to innovate and expand our offerings. Our promise is
								to serve you with integrity and dedication, ensuring that your
								journey to clarity is as seamless as possible. Thank you for
								trusting Mobile DNA Now LLC for your most important testing
								needs.
							</p>
						</div>
						<Link
							to="/contact-us"
							className={`w-fit group flex items-center gap-3 text-[#0E0E30] text-[20px] font-normal leading-tight tracking-tight px-6 py-3 border border-white`}>
							<span className="w-fit text-white text-[18px] font-MonstrateMedium uppercase font-normal leading-tight tracking-tight">
								Book US Now
							</span>
							<img
								src={arrowRight}
								alt="arrowRightImg"
								className="w-8 group-hover:rotate-[-45deg] ease-in-out transition-all duration-300"
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full bg-gradient-to-r from-[#f4404a] to-[#700303]">
				<div className="w-full flex items-center justify-center gap-14 padding-x padding-y">
					<div className="flex flex-col items-center">
						<div className="flex gap-2 items-center">
							<p className="text-[#fff] heading font-bold font-MonstrateBold uppercase leading-tight tracking-tight">
								8
							</p>
							<p className="text-[#fff] heading font-bold font-MonstrateBold uppercase leading-tight tracking-tight">
								+
							</p>
						</div>
						<p className="text-[#fff] text-sm font-MonstrateRegular leading-tight tracking-tight">
							Years
						</p>
					</div>
					<div className="w-px h-[134.27px] opacity-20 bg-gradient-to-b from-white to-white" />
					<div className="flex flex-col items-center">
						<div className="flex gap-2 items-center">
							<p className="text-[#fff] heading font-bold font-MonstrateBold uppercase leading-tight tracking-tight">
								84
							</p>
							<p className="text-[#fff] heading font-bold font-MonstrateBold uppercase leading-tight tracking-tight">
								M
							</p>
						</div>
						<p className="text-[#fff] text-sm font-MonstrateRegular leading-tight tracking-tight">
							Patients
						</p>
					</div>
					<div className="w-px h-[134.27px] opacity-20 bg-gradient-to-b from-white to-white" />
					<div className="flex flex-col items-center">
						<div className="flex gap-2 items-center">
							<p className="text-[#fff] heading font-bold font-MonstrateBold uppercase leading-tight tracking-tight">
								24
							</p>
							<p className="text-[#fff] heading font-bold font-MonstrateBold uppercase leading-tight tracking-tight">
								+
							</p>
						</div>
						<p className="text-[#fff] text-sm font-MonstrateRegular leading-tight tracking-tight">
							Branches
						</p>
					</div>
					<div className="w-px h-[134.27px] opacity-20 bg-gradient-to-b from-white to-white" />
					<div className="flex flex-col items-center">
						<div className="flex gap-2 items-center">
							<p className="text-[#fff] heading font-bold font-MonstrateBold uppercase leading-tight tracking-tight">
								36
							</p>
							<p className="text-[#fff] heading font-bold font-MonstrateBold uppercase leading-tight tracking-tight">
								K
							</p>
						</div>
						<p className="text-[#fff] text-sm font-MonstrateRegular leading-tight tracking-tight">
							Tests
						</p>
					</div>
					<div className="w-px h-[134.27px] opacity-20 bg-gradient-to-b from-white to-white" />
					<div className="flex flex-col items-center">
						<div className="flex gap-2 items-center">
							<p className="text-[#fff] heading font-bold font-MonstrateBold uppercase leading-tight tracking-tight">
								49
							</p>
							<p className="text-[#fff] heading font-bold font-MonstrateBold uppercase leading-tight tracking-tight">
								+
							</p>
						</div>
						<p className="text-[#fff] text-sm font-MonstrateRegular leading-tight tracking-tight">
							Doctors
						</p>
					</div>
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
			<ContactForm />
		</>
	);
}
