import axios from "axios";
import toast from "react-hot-toast";
import { TuserProps } from "../../types/index.ts";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getToken } from "../../utils/get-token.ts";
import getService from "../../actions/get-service.ts";
import { getUserData } from "../../utils/currentUser.ts";
import AnimatedText from "../../components/animated-text.tsx";
import ServicesSteps from "../../components/services-steps.tsx";
import { caccurate, markers, nextDay } from "../../assets/index.ts";

export default function FeesDetailInfo() {
	const token = getToken();
	const { id } = useParams();
	const [user, setUser] = useState<TuserProps>();
	const [service, setService] = useState<{
		image: string;
		title: string;
		price: number;
		shipping: string;
		options: { title: string }[];
		id: string;
	} | null>(null);
	const [loading, setLoading] = useState(true);
	const [cartItems, setCartItems] = useState<any[]>([]);
	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await fetch(
					`$https://demo-clienttesting.com/mobiledna/backend/api/cart`,
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
	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setUser(userData);
		};
		fetchUserData();
	});

	const addToCart = async (serviceId: string) => {
		if (!user || !token) {
			window.location.href = "/login";
			return;
		}
		try {
			const response = await axios.post(
				`https://demo-clienttesting.com/mobiledna/backend/api/cart`,
				{
					user_id: user?.id,
					service_id: serviceId,
					quantity: 120,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);
			toast.success(response.data.success);
		} catch (error: unknown) {
			if (error instanceof Error) {
				toast.error(error.message);
			} else {
				toast.error("An unknown error occurred");
			}
		}
	};

	useEffect(() => {
		const fetchService = async () => {
			if (id) {
				try {
					const response = await getService(id);
					setService(response.data);
				} catch (err) {
					console.error("Error fetching products:", err);
				} finally {
					setLoading(false);
				}
			} else {
				console.error("Service ID is undefined");
				setLoading(false);
			}
		};
		fetchService();
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!service) {
		return <div>Error: Service not found</div>;
	}
	return (
		<div className="w-full relative padding-y flex flex-col gap-10">
			<div className="w-full flex justify-between gap-10 relative xm:flex-col sm:flex-col padding-x">
				<div className="w-1/2 xm:w-full sm:w-full">
					<img
						// ts-ignore
						src={`https://demo-clienttesting.com/mobiledna/backend/public/${service?.image}`}
						alt="serviceDetail"
						className="w-full h-[800px] object-cover"
					/>
				</div>
				<div className="w-1/2 xm:w-full sm:w-full flex flex-col gap-5 relative z-50">
					<div className="relative z-50">
						<h1 className="relative z-50 flex flex-col gap-2">
							<AnimatedText
								//  @ts-ignore
								text={service?.title}
								className="text-black heading font-MonstrateBold tracking-tight font-semibold leading-none flex uppercase overflow-hidden"
							/>
						</h1>
					</div>
					<div className="w-full flex items-center gap-3">
						<h1 className="text-black text-[30px] font-bold leading-tight capitalize font-MonstrateMedium">
							{service.price}$
						</h1>
						<h1 className="text-black text-[30px] font-bold leading-tight capitalize font-MonstrateMedium">
							+
						</h1>
						<h1 className="text-black text-[30px] font-bold leading-tight capitalize font-MonstrateMedium">
							{service.shipping}
						</h1>
					</div>
					<div className="w-1/2 xm:w-full sm:w-full flex items-center gap-10">
						<img
							src={nextDay}
							alt="nextDay"
							className="w-[80px] object-cover"
						/>
						<img
							src={caccurate}
							alt="caccurate"
							className="w-[80px] object-cover"
						/>
						<img
							src={markers}
							alt="markers"
							className="w-[80px] object-cover"
						/>
					</div>
					<div className="flex flex-col gap-6 relative z-50">
						<ul className="list-disc pl-5">
							{service.options.map((item) => (
								<li className="text-[16px] font-MonstrateRegular text-[#454545] leading-loose font-medium">
									{item.title}
								</li>
							))}
						</ul>
						<button
							style={{
								background:
									" linear-gradient(90deg, #F4404A -9.14%, #700303 249.14%)",
							}}
							className="w-fit flex items-center gap-2 btn transition-all duration-300 ease-in-out text-white px-4 py-4 uppercase text-[16px] font-Monstrate leading-tight tracking-tight rounded-md"
							onClick={() => addToCart(service?.id)}>
							order now
						</button>
						<p className="text-[16px] font-MonstrateRegular text-[#454545] leading-loose font-medium">
							If you require a paternity test for legal matters, you will need a
							<br />
							<span className="text-[16px] font-MonstrateRegular text-[#F4404A] leading-loose font-semibold">
								legal paternity test.
							</span>
						</p>
					</div>
				</div>
			</div>
			<ServicesSteps />
		</div>
	);
}
