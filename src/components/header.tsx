import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<ul className="relative flex items-center gap-10">
				<Link
					className="transition-all duration-300 ease-in-out text-white py-3 rounded-lg text-[16px] font-MonstrateRegular leading-tight tracking-tight"
					to="tel:000 - 123 - 456789">
					000 - 123 - 456789
				</Link>
				<Link
					className="transition-all duration-300 ease-in-out text-white py-3 rounded-lg text-[16px] font-MonstrateRegular leading-tight tracking-tight"
					to="mailto:info@example.com">
					info@example.com
				</Link>
				<Link
					className="transition-all duration-300 ease-in-out text-white py-3 rounded-lg text-[16px] font-MonstrateRegular leading-tight tracking-tight"
					to="/fees">
					No: 58 A, East Lorem Street, Ipsum dolor, MD, USA 4508
				</Link>
			</ul>
		</div>
	);
}
