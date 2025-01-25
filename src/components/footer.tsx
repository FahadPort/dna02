import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { cards, navLogo } from "../assets/index.ts";

export default function Footer() {
	return (
		<footer className="w-full bg-gray-900 pb-10 padding-x pt-20">
			<div className="w-full flex justify-between gap-5">
				<div className="flex flex-col gap-10">
					<img
						src={navLogo}
						alt="Footer Logo"
						className="w-[250px] object-cover"
					/>
					<ul className="space-y-3">
						<Link
							to="tel:+1123456789"
							className="flex gap-3 items-center text-white hover:text-red-500 font-MonstrateMedium text-[16px]">
							<FaPhoneAlt />
							000 - 123 - 456789
						</Link>
						<Link
							to="mailto:info@example.com"
							className="flex gap-3 items-center text-white hover:text-red-500 font-MonstrateMedium text-[16px]">
							<MdEmail />
							info@example.com
						</Link>
						<Link
							to="No: 58 A, Lorem Ipsum Street, Lorem Ipsum, MD, USA 4508"
							className="flex gap-3 items-center text-white hover:text-red-500 font-MonstrateMedium text-[16px]">
							<FaLocationDot />
							No: 58 A, Lorem Ipsum Street, Lorem Ipsum, MD, USA 4508
						</Link>
					</ul>
				</div>
				<div>
					<h3 className="text-white text-lg mb-4 font-semibold font-MonstrateBold uppercase">
						Menu
					</h3>
					<ul className="space-y-3">
						<li>
							<Link
								to="index.php"
								className="flex gap-3 items-center text-white hover:text-red-500 font-MonstrateMedium text-[16px]">
								Home
							</Link>
						</li>
						<li>
							<Link
								to="services.php"
								className="text-white hover:text-red-500 font-MonstrateMedium text-[16px]">
								Services
							</Link>
						</li>
						<li>
							<Link
								to="about.php"
								className="text-white hover:text-red-500 font-MonstrateMedium text-[16px]">
								About
							</Link>
						</li>
						<li>
							<Link
								to="contact-us.php"
								className="text-white hover:text-red-500 font-MonstrateMedium text-[16px]">
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-white text-lg mb-4 font-MonstrateBold uppercase">
						Treatments
					</h3>
					<ul className="space-y-3">
						<li>
							<Link
								to="#paternity-testing"
								className="text-white hover:text-red-500 font-MonstrateMedium text-[16px]">
								Paternity Testing
							</Link>
						</li>
						<li>
							<Link
								to="#ancestry-testing"
								className="text-white hover:text-red-500 font-MonstrateMedium text-[16px]">
								Ancestry Testing
							</Link>
						</li>
						<li>
							<Link
								to="#twin-testing"
								className="text-white hover:text-red-500 font-MonstrateMedium text-[16px]">
								Twin Testing
							</Link>
						</li>
						<li>
							<Link
								to="#immigration-dna-testing"
								className="text-white hover:text-red-500 font-MonstrateMedium text-[16px]">
								Immigration DNA Testing
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-white font-MonstrateBold text-lg">NEWSLETTER</h3>
					<h2 className="text-white text-2xl mb-4">GET IN TOUCH</h2>
					<form
						action="#"
						method="POST"
						className="flex items-center mb-4">
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your Email"
							required
							className="bg-transparent font-MonstrateMedium text-sm border-b border-white text-white placeholder-white py-2 w-full focus:outline-none"
						/>
						<button
							type="submit"
							className="ml-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-8 h-8"
								viewBox="0 0 51 51"
								fill="white">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18.2061 28.3617L13.7657 36.3274C13.69 36.4633 13.7071 36.6243 13.8098 36.7412C13.9125 36.858 14.07 36.8958 14.2145 36.8382L37.9523 27.3752C38.0924 27.3195 38.1795 27.1909 38.1795 27.0401C38.1795 26.8894 38.0923 26.7608 37.9523 26.7049L14.2145 17.2419C14.07 17.1843 13.9125 17.2221 13.8098 17.3389C13.7072 17.4558 13.69 17.6169 13.7657 17.7528L18.2061 25.7184L29.4467 26.9113C29.5335 26.9205 29.5969 26.9749 29.5969 27.0401C29.5969 27.1053 29.5335 27.1597 29.4467 27.1689L18.2061 28.3617Z"
								/>
							</svg>
						</button>
					</form>
					<p className="text-white text-sm font-MonstrateMedium">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
				</div>
			</div>
			<div className="w-full mt-12 border-t border-gray-700 pt-8 flex items-center justify-between gap-5">
				<p className="text-center md:text-left text-white text-sm font-MonstrateMedium">
					&copy; 2024 My Website. All rights reserved.
				</p>
				<p className="text-center text-white text-sm font-MonstrateMedium">
					Design by{" "}
					<Link
						to="https://americanwebtronics.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-red-500 hover:underline font-MonstrateMedium text-sm">
						American Web Tronics
					</Link>
				</p>
				<div className="flex justify-center md:justify-end">
					<img
						src={cards}
						alt="Accepted Credit Cards"
						className="h-8"
					/>
				</div>
			</div>
		</footer>
	);
}
