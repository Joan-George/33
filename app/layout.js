import AdminProvider from "@/Context/AdminProvider";
import CartProvider from "@/Context/CartProvider";
import ContextProvider from "@/Context/Context";
import { ProductContextProvider } from "@/Context/CreateProduct";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: "300", display: "swap" });

export const metadata = {
	title: "33 %",
	description: "A store for all your needs",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{/* <NextTopLoader color="#000" height={4} /> */}
				<ContextProvider>
					<AdminProvider>
						<ProductContextProvider>
							<CartProvider>
								{/* <Header /> */}
								<Toaster />
								{children}
								{/* <Footer /> */}
							</CartProvider>
						</ProductContextProvider>
					</AdminProvider>
				</ContextProvider>
			</body>
		</html>
	);
}
