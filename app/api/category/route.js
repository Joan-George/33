import connectDB from "@/db/Database";
import { NextResponse } from "next/server";

export const GET = async (req) => {
	try {
		await connectDB();

		const categories = [];
		return NextResponse.json(
			{
				status: "success",
				data: categories,
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				status: "error",
				message: error.message,
			},
			{
				status: 500,
			}
		);
	}
};
