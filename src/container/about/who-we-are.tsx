import {
	aboutPng,
	arrowRight,
	chatIcon,
	ourceo,
	videoThumbnail,
} from "../../assets/index.ts";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { teamsItem } from "../../constants/index.ts";
import AnimatedText from "../../components/animated-text.tsx";

export default function WhoWeAre() {
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
									text="Who we are"
									className="text-black heading font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
								/>
							</h1>
						</div>
						<div className="flex flex-col gap-8 relative z-50">
							<div className="w-full">
								<div className="flex flex-col gap-6 relative z-50">
									<p className="text-lg font-MonstrateRegular text-[#454545] leading-loose font-medium">
										At Mobile DNA Now LLC, we understand the importance of
										accurate and reliable DNA testing, especially when it comes
										to paternity and other sensitive matters. That’s why we
										strive to make the entire process simple and stress-free for
										our clients. Our mobile services are designed to offer you
										maximum convenience, ensuring you can get tested without
										having to leave the comfort of your home or office.
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
										but a reliable partner who is committed to delivering
										clarity and answers with compassion and discretion. Our goal
										is to empower you with the information you need while
										ensuring your privacy is respected at all times.
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
			<div className="w-full relative padding-x padding-y">
				<h1 className="py-10 flex items-center justify-center">
					<AnimatedText
						text="Our Team!"
						className="text-black heading font-bold font-MonstrateBold leading-none tracking-tight flex uppercase overflow-hidden"
					/>
				</h1>
				<div className="w-full grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-10">
					{teamsItem.map((team: any) => (
						<Link
							to={`/services/service-detail/${team.id}`}
							key={team.id}
							className="bg-white relative overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer flex flex-col group">
							<div className="w-full relative flex items-center justify-center">
								<img
									className="w-full h-[500px] object-cover"
									src={team.src}
									alt={team.title}
								/>
							</div>
							<div className="py-6 w-full h-full flex flex-col justify-between gap-2">
								<h3 className="text-2xl font-bold uppercase leading-tight font-MonstrateBold">
									{team.title}
								</h3>
								<p className="text-sm leading-tight font-medium font-MonstrateMedium">
									{team.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
