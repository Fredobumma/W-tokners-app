import { lazy } from "react";
import webpImg2x from "../assets/services-bg.webp";
import webpImg1x from "../assets/services-bg-1.webp";
import { pictureSource } from "../../utilities/getVariables";

const Picture = lazy(() => import("../picture"));
const ServicesContent = lazy(() =>
	import("../abstract-components/servicesContent")
);

const Services = () => {
	// === Rendering all picture sources
	const sources = pictureSource(768, webpImg2x, webpImg1x);

	return (
		<section>
			<div className="grid items-center laptop:grid-cols-2 desktop:h-auto">
				<Picture
					sources={sources}
					src={webpImg2x}
					imgClasses="max-h-400 object-stretch scale-x-115 w-full tab:scale-x-110 laptop:min-h-[420px] laptop:-ml-12 laptop:scale-110 desktop:min-h-auto desktop:-ml-60px desktop:scale-x-110 widerScreen:-ml-16"
					alt="Background"
				/>
				<div className="bg-dark h-auto max-h-full overflow-y-auto -mx-5 px-5 py-70px rounded-tr-[150px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-all text-white tab:rounded-tr-[40%] bigTab:-mx-8 bigTab:px-8 bigTab:rounded-tr-[50%] laptop:max-h-[420px] laptop:min-h-[420px] laptop:-mr-16 laptop:pl-120px laptop:rounded-tl-[50%] laptop:rounded-tr-none laptop:scale-y-110 desktop:min-h-auto desktop:pl-170px widerScreen:self-end widerScreen:pb-24 dark:bg-light dark:text-dark">
					<ServicesContent />
				</div>
			</div>
		</section>
	);
};

export default Services;
