"use client";
import { Context } from "@/Context/Context";
import Image from "next/image";
import { useContext } from "react";

const Footer = () => {
	const { user } = useContext(Context);
	return (
		<>
			{/* {!user?.data?.isAdmin && (
        <div className="w-[97%] mx-auto my-5">
          <div className="flex flex-col items-center gap-4 rounded-lg bg-indigo-500 p-6 shadow-lg sm:flex-row sm:justify-between">
            <strong className="text-xl text-white sm:text-xl capitalize text-center md:text-start">
              {" "}
              contact us <span className="text-[#12171D]"> now </span>
              <p className="text-xs text-white my-2 w-full text-center md:text-start ">
                for more information about our services and products, please
                visit our website{" "}
                <a
                  href="https://github.com/riteshk-007/nextjs-store"
                  className="text-[#F59E0B]"
                  target="_blank"
                >
                  GitHub
                </a>{" "}
                OR click this link
              </p>
            </strong>

            <Link
              className="inline-flex items-center gap-2 rounded-full border border-[#12171D] bg-[#000000] px-8 py-3 text-white hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus:ring active:bg-white/90"
              href="/contact"
            >
              <span className="text-sm font-medium"> Lets Get Started </span>

              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      )} */}
			<footer className="bg-white lg:grid lg:grid-cols-5">
				<div className="relative block h-32 lg:col-span-2 lg:h-full">
					<Image
						src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
						alt="footer"
						layout="fill"
						className="absolute inset-0 h-full w-full object-cover"
					/>
				</div>

				<div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
					<div className="mt-12 border-t border-gray-100 pt-12">
						<div className="sm:flex sm:items-center sm:justify-between">
							<ul className="flex flex-wrap gap-4 text-xs">
								<li>
									<a href="#!" className="text-gray-500 transition hover:opacity-75">
										{" "}
										Terms & Conditions{" "}
									</a>
								</li>

								<li>
									<a href="#!" className="text-gray-500 transition hover:opacity-75">
										{" "}
										Privacy Policy{" "}
									</a>
								</li>

								<li>
									<a href="#!" className="text-gray-500 transition hover:opacity-75">
										{" "}
										Cookies{" "}
									</a>
								</li>
							</ul>

							<p className="mt-8 text-xs text-gray-500 sm:mt-0">&copy; 2024. Ritesh Clothing Store . All rights reserved.</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
