import { lazy, Suspense } from "react";
import LazyLoader from "../common/block-components/lazyLoader";

const Hero = lazy(() => import("../common/block-components/block-auth-hero"));
const Objectives = lazy(() =>
	import("../common/block-components/block-auth-objectives")
);
const Services = lazy(() =>
	import("../common/block-components/block-auth-services")
);

const UsersHomePage = () => {
	return (
		<Suspense fallback={<LazyLoader />}>
			<Hero />
			<Objectives />
			<Services />
		</Suspense>
	);
};

export default UsersHomePage;
