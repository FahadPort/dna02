import { Dispatch, SetStateAction } from "react";
import { z } from "zod";

export const stepsFormSchema = z.object({
   name: z.string().min(1, "Name is required"),
   email: z.string().email("Invalid email"),
   phone: z.string().min(1, "Phone number is required"),
   specialRequest: z.string().optional(),
   selectedOption: z.string().min(1, "Please select an option"),
   selectedDate: z.string().min(1, "Please select a date"),
});

export const loginFormSchema = z.object({
   email: z.string().email({
      message: "Email is required",
   }),
   password: z.string().min(1, {
      message: "Password is required",
   }),
});

export const registerFormSchema = z.object({
   name: z.string().min(1, {
      message: "Name is required",
   }),
   email: z.string().email({
      message: "Email is required",
   }),
   password: z.string().min(8, {
      message: "Minimum 8 characters required",
   }),
});

export const profileFormSchema = z.object({
   name: z.string().min(1, {
      message: "Name is required",
   }).optional(),
   email: z.string().email({
      message: "Email is required",
   }).optional(),
});

export type TloginFormData = z.infer<typeof loginFormSchema>;
export type TprofileFormData = z.infer<typeof profileFormSchema>;
export type TregisterFormData = z.infer<typeof registerFormSchema>;
export type TstepsFormData = z.infer<typeof stepsFormSchema>;

export type TlogoMarqueeProps = {
   children: React.ReactNode;
   baseVelocity: number;
};

export type TuserProps = {
   id: string;
   name: string;
   email: string;
};

export type TproductsProps = {
   id: string;
   title: string;
   price: string;
   description: string;
   shortDescription: string;
   images: any;
};

export type TtextHoverProps = {
   titile1: string;
   titile2: string;
};

export type TpositionProps = {
   left: number;
   width: number;
   opacity: number;
};

export type TselectedItem = {
   quantity: number;
   price: number;
   time: number;
};

export type TButtonProps = {
   title: string;
   href: string;
};

export type TRoundedProps = {
   children: React.ReactNode;
   className?: string;
   backgroundColor: string;
};

export type TlinksProps = {
   data: {
      title: string,
      index: number,
      href: string;
   };
   className: string;
   isActive: boolean,
   setSelectedIndicator: Dispatch<SetStateAction<string>>;
};