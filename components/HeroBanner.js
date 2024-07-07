import EmblaCarousel from "@/components/emblaCarousel/EmblaCarousel";
import "../components/emblaCarousel/embla.css";

const HeroBanner = () => {
	const IMAGES = ["retail_front.jpg", "full_view.jpg", "inside_with_shoes.jpg"];
	const OPTIONS = [];
	const SLIDE_COUNT = IMAGES.length;
	const SLIDES = IMAGES.map((item) => ({ name: item, src: `/assets/shop-images/${item}` }));
	return (
		<div className="p-2">
			<div className="relative overflow-hidden bg-white">
				<div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
					<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 grid md:grid-cols-2">
						<div className="sm:max-w-lg flex flex-col justify-center">
							<h1 className="text-4xl font-bold tracking-wide text-gray-900 sm:text-6xl font-mono text-shadow shadow-red-400">
								33%
							</h1>
							<p className="mt-4 text-xl text-gray-500">RETAIL AT WHOLESLAE PRICE</p>
							<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mt-8">
								<div>
									<h1>
										<span className="uppercase tracking-wide text-gray-500 font-bold"> Contact Us </span>
									</h1>

									<ul className="mt-3 flex gap-6">
										<li>
											<a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
												<span className="sr-only">Facebook</span>

												<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
													<path
														fillRule="evenodd"
														d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
														clipRule="evenodd"
													/>
												</svg>
											</a>
										</li>

										<li>
											<a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
												<span className="sr-only">Instagram</span>

												<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
													<path
														fillRule="evenodd"
														d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
														clipRule="evenodd"
													/>
												</svg>
											</a>
										</li>

										<li>
											<a
												href="https://maps.app.goo.gl/X8ReeZx8Vn973A5n6"
												target="_blank"
												className="text-gray-700 transition hover:opacity-75"
											>
												<span className="sr-only">Location</span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														fill-rule="evenodd"
														d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
														clip-rule="evenodd"
													/>
												</svg>
											</a>
										</li>
										<li>
											<a
												href="https://wa.me/6369023228?send=hello"
												target="_blank"
												className="text-gray-700 transition hover:opacity-75"
											>
												<span className="sr-only">Whats App</span>
												<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 30 30" aria-hidden="true">
													<path
														fillRule="evenodd"
														d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"
														clipRule="evenodd"
													/>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div>
							<div className="mt-10">
								{/* Decorative image grid */}
								<EmblaCarousel slides={SLIDES} options={OPTIONS} />

								{/* <Link
									href="/products"
									className="inline-block rounded-md border border-transparent bg-[#2a2e33] px-8 py-3 text-center font-medium text-white hover:bg-[#12171d]"
								>
									Shop Collection
								</Link> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
