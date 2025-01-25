import axios from "axios";
import Lenis from "lenis";
import { payment } from "../../assets/index.ts";
import React, { useEffect, useState } from "react";
import { getToken } from "../../utils/get-token.ts";
import { TuserProps } from "../../types/index.ts";
import { getUserData } from "../../utils/currentUser.ts";

export default function CartPage() {
	const token = getToken();
	const [user, setUser] = useState<TuserProps>();
	const [cartItems, setCartItems] = useState<any[]>([]);
	const [cartTotal, setCartTotal] = useState<number>(0);

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setUser(userData);
		};
		fetchUserData();
	}, [token]);

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

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

				// Calculate cart total
				const total = data.reduce((total: number, item: any) => {
					const quantity = item.quantity || 1;
					const price = parseFloat(item.services?.price || "0");
					return total + quantity * price;
				}, 0);

				setCartItems(data);
				setCartTotal(total);
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

	const handlePlaceOrderAndCheckout = async () => {
		try {
			// Proceed to checkout directly without placing an order first
			const checkoutResponse = await axios.post(
				`https://demo-clienttesting.com/mobiledna/backend/api/checkout`,
				{ userId: user?.id },
				{
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`,
					},
				},
			);

			if (checkoutResponse.status === 200 && checkoutResponse.data.url) {
				// Redirect to checkout URL
				window.location.href = checkoutResponse.data.url;
			} else {
				throw new Error("Checkout URL not received");
			}
		} catch (error) {
			console.error("Error during checkout:", error);
		}
	};

	const TdStyle = {
		ThStyle: `w-1/6 min-w-[160px] border-r border-black py-4 px-3 text-lg font-medium font-MonstrateMedium text-black lg:py-7 lg:px-4`,
		TdStyle: `border-b border-l bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium font-MonstrateMedium`,
		TdStyle2: `border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium font-MonstrateMedium`,
		TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium font-MonstrateMedium`,
	};

	return (
		<div className="w-full flex gap-5 justify-between padding-x shadow-md">
			<div className="w-full py-10 pr-5 h-fit border-t border-gray-50">
				<div className="flex pb-4 items-center flex-col">
					<div className="w-full flex flex-wrap -mx-4">
						<div className="w-full">
							<div className="overflow-x-auto">
								<table className="w-full table-auto">
									<thead className="text-center">
										<tr className="w-full border border-black">
											<th className={TdStyle.ThStyle}>Product Image</th>
											<th className={TdStyle.ThStyle}>Product Title</th>
											<th className={TdStyle.ThStyle}>Price</th>
											<th className={TdStyle.ThStyle}>Quantity</th>
											<th className={TdStyle.ThStyle}>Subtotal</th>
										</tr>
									</thead>
									<tbody>
										{cartItems.map((item) => {
											const quantity = item.quantity || 1;
											const price = parseFloat(item.services?.price || "0");
											const subtotal = quantity * price;
											return (
												<tr key={item.id}>
													<td className={TdStyle.TdStyle}>
														<img
															src={`https://demo-clienttesting.com/mobiledna/backend/public/${item.services?.image}`}
															alt="cartImg"
															className="w-full h-20 object-cover"
														/>
													</td>
													<td className={TdStyle.TdStyle}>
														{item.services?.title}
													</td>
													<td className={TdStyle.TdStyle}>
														${price.toFixed(2)}
													</td>
													<td className={TdStyle.TdStyle}>{quantity}</td>
													<td className={TdStyle.TdStyle}>
														${subtotal.toFixed(2)}
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-between gap-5 pt-10">
					<div className="w-full h-fit rounded-lg py-10">
						<h1 className="w-full font-semibold font-MonstrateMedium text-[30px] leading-tight text-black pb-4 border-b border-black/10">
							Cart Total
						</h1>
						<div className="w-full flex flex-col gap-3 justify-between pt-2">
							<div className="w-full flex gap-5 justify-between py-2">
								<div className="w-1/2 flex flex-col justify-between gap-5">
									<div className="w-full flex items-center justify-between gap-5">
										<span className="font-medium font-MonstrateMedium text-[18px] leading-tight text-black">
											Sub Total
										</span>
										<span className="font-bold font-MonstrateMedium text-[18px] leading-tight text-black">
											${cartTotal.toFixed(2)}
										</span>
									</div>
									<div className="w-full flex items-cente justify-between gap-5">
										<span className="font-medium font-MonstrateMedium text-[18px] leading-tight text-black">
											Total
										</span>
										<span className="font-bold font-MonstrateMedium text-[18px] leading-tight text-black">
											${cartTotal.toFixed(2)}
										</span>
									</div>
								</div>
								<span className="border-r border-black" />
								<div className="w-1/2 flex items-center gap-5 justify-between">
									<button
										onClick={handlePlaceOrderAndCheckout}
										className="bg-[#00CD3E] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 text-[20px] rounded-full font-MonstrateMedium leading-tight tracking-tight">
										Checkout Securely Now
									</button>
									<div className="flex justify-center md:justify-end">
										<img
											src={payment}
											alt="Accepted Credit Cards"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
