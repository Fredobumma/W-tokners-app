import { lazy } from "react";

const SVG = lazy(() => import("../assets/svgs/allSvg"));
const Auth_ServicesContent = lazy(() =>
	import("../abstract-components/auth-servicesContent")
);

const Services = () => {
	// === Cards Details
	const cards = [
		{
			containerClasses: "mb-5 ml-auto laptop:mb-10",
			headingClasses: "mb-5 desktop:mb-10",
			headingText:
				"Proposal regarding Total Supply, ICO and Pricing Total Supply (after periodical increase of supply):",
			amountClasses: "text-green-600",
			amount: "10,000,000,000",
		},
		{
			headingClasses: "mb-[18px] desktop:mb-30px",
			headingText: "Supply at Genesis:",
			amountClasses: "text-yellow",
			amount: "3,000,000,000",
			textClasses: "desktop:mb-5",
		},
	];

	return (
		<section className="py-130px relative bigTab:py-150px laptop:-mb-72 laptop:pb-72 laptop:pt-120px desktop:-mb-[488px] desktop:-mt-5 desktop:pt-[220px] desktop:pb-[480px] widerScreen:-mt-30px">
			<span className="absolute h-full inset-0 -ml-5 w-screen -z-20 bigTab:-ml-8 laptop:hidden">
				<SVG
					id="presale-bg-2"
					height="100%"
					width="100%"
					aspectRatio="none"
				/>
			</span>
			<span className="hidden inset-0 text-white w-screen -z-20 laptop:absolute laptop:block laptop:-ml-16 laptop:h-[85%] widerScreen:max-w-1600 dark:text-dark">
				<SVG
					id="presale-bg"
					height="100%"
					width="100%"
					aspectRatio="none"
				/>
			</span>
			<Auth_ServicesContent cards={cards} />
		</section>
	);
};

export default Services;
