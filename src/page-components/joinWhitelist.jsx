import { Suspense, lazy } from "react";
import RequireAuth from "../common/auth";
import LazyLoader from "../common/block-components/lazyLoader";

const WhitelistForm = lazy(() =>
	import("../common/block-components/block-whitelistForm")
);

const JoinWhitelist = () => {
	return (
		<Suspense fallback={<LazyLoader />}>
			<RequireAuth>
				<WhitelistForm />
			</RequireAuth>
		</Suspense>
	);
};

export default JoinWhitelist;
