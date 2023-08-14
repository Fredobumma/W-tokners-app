import { Suspense, lazy } from "react";
import LazyLoader from "../common/block-components/lazyLoader";

const LoginForm = lazy(() =>
	import("../common/block-components/block-loginForm")
);

const Login = () => {
	return (
		<Suspense fallback={<LazyLoader />}>
			<LoginForm />
		</Suspense>
	);
};

export default Login;
