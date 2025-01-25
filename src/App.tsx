import React from "react";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import Login from "./pages/Login.tsx";
import About from "./pages/About.tsx";
import Order from "./pages/Order.tsx";
import Contact from "./pages/Contact.tsx";
import Register from "./pages/Register.tsx";
import Fees from "./pages/Fees.tsx";
import { Routes, Route } from "react-router-dom";
import FeesDetail from "./pages/FeesDetail.tsx";
import Services from "./pages/Services.tsx";
import ServicesDetail from "./pages/ServicesDetail.tsx";

export default function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/orders"
					element={<Order />}
				/>
				<Route
					path="/fees"
					element={<Fees />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/contact-us"
					element={<Contact />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>
				<Route
					path="/cart"
					element={<Cart />}
				/>
				<Route
					path="/fees/fees-detail/:id"
					element={<FeesDetail />}
				/>
				<Route
					path="/services/services-detail/:href"
					element={<ServicesDetail />}
				/>
			</Routes>
		</>
	);
}
