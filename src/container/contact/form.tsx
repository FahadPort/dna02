import axios from "axios";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AnimatedText from "../../components/animated-text.tsx";
import { arrowRight, bookSlot, supportImg } from "../../assets/index.ts";

export default function Form() {
	const [selectedDate, setSelectedDate] = useState("");
	const [selectedOption, setSelectedOption] = useState("");

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm();

	const onSubmits = async (data) => {
		try {
			const payload = {
				...data,
				selectedOption,
				selectedDate,
			};

			const response = await axios.post(
				`https://demo-clienttesting.com/mobiledna/backend/api/contact`,
				payload,
			);
			if (response.data.success) {
				toast.success(response.data.success);
			} else {
				toast.error("Failed to send data");
			}
		} catch (err) {
			if (axios.isAxiosError(err) && err.response) {
				toast.error(err.response.data.message);
			} else {
				toast.error("An error occurred");
			}
			console.error("Error:", err);
		}
	};

	const options = [
		{ value: "Paternity Testing", label: "Paternity Testing" },
		{ value: "Ancestry Testing", label: "Ancestry Testing" },
		{ value: "Grandparent testing", label: "Grandparent testing" },
		{ value: "Sibling testing", label: "Sibling testing" },
		{ value: "Twin testing", label: "Twin testing" },
	];

	return (
		<div className="w-full">
			<div className="w-full flex justify-between">
				<div className="w-1/2 flex justify-between gap-5 xm:flex-col sm:flex-col relative">
					<img
						src={bookSlot}
						alt="bookSlot"
						className="w-full object-cover"
					/>
					<div className="absolute left-0 bottom-20 bg-white p-8">
						<div className="flex gap-3 flex-col">
							<div className="flex flex-col gap-2">
								<AnimatedText
									className="text-black font-MonstrateBold text-2xl leading-tight uppercase tracking-tight"
									text="WE ALWAYS TAKE CARE"
								/>
								<AnimatedText
									className="text-black font-MonstrateBold text-2xl leading-tight uppercase tracking-tight"
									text="OF YOUR SKIN"
								/>
							</div>
							<div className="flex items-center gap-3">
								<img
									src={supportImg}
									alt="supportImg"
									className="w-20 object-cover"
								/>
								<div className="flex flex-col gap-2">
									<div className="w-[144.29px] h-6 text-[#f4404a] text-xs font-semibold font-MonstrateMedium leading-normal tracking-[2.40px]">
										24/7 EMERGENCY
									</div>
									<div className="w-[168.33px] h-[18px] text-center text-[#161616] text-lg font-bold font-MonstrateMedium leading-[18px]">
										000 - 123 - 456789
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<form
					className="w-1/2 flex flex-col bg-[#9D181B] gap-8 px-8 py-10 pt-10"
					onSubmit={handleSubmit(onSubmits)}>
					<div className="flex flex-col gap-2">
						<AnimatedText
							className="text-white text-lg leading-tight capitalize tracking-tight"
							text="Appointment"
						/>
						<AnimatedText
							className="text-white text-2xl leading-tight capitalize tracking-tight"
							text="Book Your slot"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="name"
							className="text-sm font-medium leading-tight tracking-tight text-white uppercase">
							Hello I am!
						</label>
						<input
							id="name"
							{...register("name")}
							type="name"
							placeholder="Name"
							className="w-full py-3 border-b border-white bg-transparent placeholder:text-white placeholder:text-sm text-white outline-none"
							required
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="selectMenu"
							className="text-sm font-medium leading-tight tracking-tight text-white uppercase">
							I am looking it for
						</label>
						<div className="w-full">
							<select
								id="selectMenu"
								value={selectedOption}
								onChange={(e) => setSelectedOption(e.target.value)}
								className="w-full py-3 border-b border-white bg-transparent placeholder:text-white placeholder:text-sm text-white outline-none">
								<option
									value=""
									className="text-black font-MonstrateRegular leading-tight tracking-tight text-[16px]"
									disabled>
									Choose an option
								</option>
								{options.map((option) => (
									<option
										className="text-black font-MonstrateRegular leading-tight tracking-tight text-[16px]"
										key={option.value}
										value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="datePicker"
							className="text-sm font-medium leading-tight tracking-tight text-white uppercase">
							Date to fix a surgery or treatments
						</label>
						<input
							type="date"
							id="datePicker"
							value={selectedDate}
							onChange={(e) => setSelectedDate(e.target.value)}
							className="w-full py-3 border-b border-white bg-transparent placeholder:text-white placeholder:text-sm text-white outline-none"
						/>
					</div>
					<div className="w-full flex items-center justify-between gap-5">
						<div className="w-full flex flex-col gap-2">
							<label
								htmlFor="contact"
								className="text-sm font-medium leading-tight tracking-tight text-white uppercase">
								Your Contact Number
							</label>
							<input
								id="contact"
								{...register("phone")}
								type="text"
								placeholder="Contact Number"
								className="w-full py-3 border-b border-white bg-transparent placeholder:text-white placeholder:text-sm text-white outline-none"
								required
							/>
						</div>
						<div className="w-full flex flex-col gap-2">
							<label
								htmlFor="email"
								className="text-sm font-medium leading-tight tracking-tight text-white uppercase">
								Your Email Id
							</label>
							<input
								id="email"
								{...register("email")}
								type="email"
								placeholder="Email"
								className="w-full py-3 border-b border-white bg-transparent placeholder:text-white placeholder:text-sm text-white outline-none"
								required
							/>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="message"
							className="text-sm font-medium leading-tight tracking-tight text-white uppercase">
							Message
						</label>
						<textarea
							id="message"
							{...register("specialRequest")}
							placeholder="Enter Your Message"
							className="w-full py-3 border-b border-white bg-transparent placeholder:text-white placeholder:text-sm text-white outline-none"
							required
						/>
					</div>
					<button
						disabled={isSubmitting}
						type="submit"
						className={`w-fit group flex items-center gap-3 text-[#0E0E30] text-[20px] font-normal leading-tight tracking-tight px-6 py-3 border border-white`}>
						<span className="w-fit text-white text-[20px] font-normal leading-tight tracking-tight">
							{isSubmitting ? "Sending..." : "Send"}
						</span>
						<img
							src={arrowRight}
							alt="arrowRightImg"
							className="w-8 group-hover:rotate-[-45deg] ease-in-out transition-all duration-300"
						/>
					</button>
				</form>
			</div>
		</div>
	);
}
