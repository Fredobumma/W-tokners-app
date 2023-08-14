import { lazy, useContext } from "react";
import CarouselContext from "../context/carouselContext";

const SVG = lazy(() => import("./assets/svgs/allSvg"));
const ScrollIndicator = lazy(() => import("./scrollIndicator"));

const TeamCarousel = ({ cards }) => {
	const {
		pages,
		activePageIndex,
		// snapPointIndexes,
		scrollRef,
		next,
		prev,
		goTo,
	} = useContext(CarouselContext);

	// === Buttons Details
	const buttons = [
		{ id: "left", condition: activePageIndex <= 0, navigator: prev },
		{
			id: "right",
			condition: activePageIndex === pages.length - 1,
			navigator: next,
		},
	];

	return (
		<>
			<div className="flex justify-between mb-10">
				<h1 className="font-bold text-32 leading-10 tab:text-40 desktop:text-5xl desktop:leading-54">
					Our Team
				</h1>
				<div
					className="flex justify-center mr-12 space-x-2"
					aria-hidden
				>
					{buttons.map(({ id, condition, navigator }, index) => (
						<button
							key={index}
							className={`hidden outline-0 py-2 px-4 active:rotate-360 focus:rotate-360 hover:rotate-360 transform transition-all duration-300 laptop:block ${
								condition &&
								"cursor-not-allowed active:rotate-0 focus:rotate-0 hover:rotate-0 opacity-30"
							}`}
							onClick={() => navigator()}
						>
							<SVG id={`${id}-arrow`} />
						</button>
					))}
				</div>
			</div>

			<ul
				className="flex gap-2.5 overflow-x-auto pb-5 pr-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-all snap-mandatory bigTab:pr-8 laptop:pr-16 laptop:gap-5"
				ref={scrollRef}
			>
				{cards.map(({ name, role, imgClasses }, index) => (
					<li
						key={index}
						className={`bg-lightTeamCard h-max min-w-max overflow-hidden pb-0 p-minmax pt-30px rounded-all snap-start dark:bg-teamCard ${
							!(index % 2) && "relative"
						}`}
					>
						<span className="block font-bold mb-1.5 ml-5 text-left bigTab:ml-0">
							{name}
						</span>
						<span className="block mb-50px ml-5 text-left text-sm bigTab:ml-0 bigTab:mb-55px">
							{role}
						</span>
						<span
							className={`bg-sprite bg-no-repeat block h-385 w-236 tab:h-420 tab:w-257 ${imgClasses} ${
								!(index % 2) && "relative z-20"
							}`}
						></span>
						{!(index % 2) && (
							<span className="bg-sprite bg-no-repeat block team-bg absolute bg-[-350px_-2183px] inset-0 max-h-full max-w-full z-10 bigTab:top-[5px]"></span>
						)}
					</li>
				))}
			</ul>

			<ScrollIndicator
				pages={pages}
				active={activePageIndex}
				classes="bg-dark border-dark dark:bg-light dark:border-light"
				goTo={goTo}
			/>
		</>
	);
};

export default TeamCarousel;
