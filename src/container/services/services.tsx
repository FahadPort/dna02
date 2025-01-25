import React from "react";
import { Link } from "react-router-dom";
import { servicesItem } from "../../constants/index.ts";

export default function Services() {
	return (
		<div className="w-full relative padding-x padding-y">
			<div className="w-full grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-10">
				{servicesItem.map((service: any) => (
					<Link
						to={`/services/services-detail/${service.href}`}
						key={service.id}
						className="bg-white relative overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer flex flex-col group">
						<div className="w-full relative flex items-center justify-center">
							<img
								className="w-full h-[500px] object-cover"
								src={service.src}
								alt={service.title}
							/>
						</div>
						<div className="p-6 w-full h-full flex flex-col justify-between gap-2">
							<h3 className="text-2xl text-center uppercase leading-tight font-MonstrateBold">
								{service.title}
							</h3>
							<p className="text-sm leading-tight font-medium text-center font-MonstrateMedium">
								{service.description}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
