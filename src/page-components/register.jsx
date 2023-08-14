import { Suspense, lazy } from "react";
import LazyLoader from "../common/block-components/lazyLoader";

const RegisterForm = lazy(() =>
	import("../common/block-components/block-registerForm")
);

const Register = () => {
	return (
		<Suspense fallback={<LazyLoader />}>
			<RegisterForm />
		</Suspense>
	);
};

export default Register;
