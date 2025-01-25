import UserMenu from "./UserMenu.tsx";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { navLogo } from "../assets/index.ts";
import { IoBagHandle } from "react-icons/io5";
import { navVarients } from "../motion/index.ts";
import { getToken } from "../utils/get-token.ts";
import React, { useEffect, useState } from "react";
import LeftSideHome from "./left-side-menu/LeftSideHome.tsx";
import Header from "./header.tsx";
import TextHover from "./text-hover.tsx";
import { navLinks } from "../constants/index.ts";
export default function Navbar() {
	const token = getToken();
	const { pathname } = useLocation();
	const [cartItems, setCartItems] = useState<any[]>([]);

	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await fetch(
					`https://demo-clienttesting.com/mobiledna/backend/api/cart`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				const data = await response.json();
				setCartItems(data);
			} catch (error: unknown) {
				if (error instanceof Error) {
					console.log(error.message);
				} else {
					console.log("An unknown error occurred");
				}
			}
		};
		fetchCartItems();
	}, [token]);

	return (
		<>
			<motion.div
				initial="initial"
				whileInView="vissible"
				viewport={{ once: true }}
				variants={navVarients}
				className="w-full flex flex-col gap-3 padding-x py-4 absolute top-0 z-[999] sm:hidden xm:hidden md:hidden">
				<Header />
				<div className="w-full flex items-center justify-between">
					<Link to="/">
						<img
							src={navLogo}
							alt="navLogo"
							width={200}
							height={200}
							className="w-[200px] object-cover"
						/>
					</Link>
					<ul className="relative flex items-center gap-7">
						{navLinks.map((item) => (
							<Link
								key={item.id}
								className={`transition-all duration-300 ease-in-out text-white rounded-lg text-[20px] font-MonstrateMedium leading-tight tracking-tight hover ${
									pathname === item.href ? "text-[#f4404a]" : "text-white"
								}`}
								to={item.href}>
								<TextHover
									titile1={item.title}
									titile2={item.title}
								/>
							</Link>
						))}
						<div className="flex items-center gap-2">
							<Link
								style={{
									background:
										" linear-gradient(90deg, #F4404A -9.14%, #700303 249.14%)",
								}}
								className="flex items-center gap-2 btn transition-all duration-300 ease-in-out text-white px-4 py-3 text-[16px] font-MonstrateMedium leading-tight tracking-tight capitalize rounded-md"
								to="/">
								<IoIosCall
									className="text-white"
									size={24}
								/>
								emergency call
							</Link>
							<Link
								style={{
									background:
										" linear-gradient(90deg, #F4404A -9.14%, #700303 249.14%)",
								}}
								to="/cart"
								className="px-4 py-2 relative rounded-lg text-white">
								<span className="absolute right-3 top-1 px-[5px] py-[2px] text-white font-Monstrate rounded-full bg-black text-[8px]">
									{cartItems.length > 0 ? cartItems.length : 0}
								</span>
								<IoBagHandle size={30} />
							</Link>
							<UserMenu />
						</div>
					</ul>
				</div>
			</motion.div>
			<div className="sm:!flex xm:!flex md:!flex hidden">
				<LeftSideHome />
			</div>
		</>
	);
}
