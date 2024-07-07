"use client";
import HeroBanner from "@/components/HeroBanner";
import { useState } from "react";

export default function Home() {
	const [show] = useState(true);
	return (
		<div className="flex flex-col">
			<HeroBanner />
			{/* <Collection />
      <span className="text-2xl font-bold text-center mt-10 mb-10">
        Recent Products List
      </span>
      <HomeProducts show={show} /> */}
		</div>
	);
}
