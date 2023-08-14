import { lazy, useContext } from "react";
import FormContext from "../context/formContext";

const FormGuide = lazy(() => import("./formGuide"));
const FormBody = lazy(() => import("./formBody"));
const Button = lazy(() => import("./button"));

const FormPage = () => {
	const {
		body: { form, checkError, data },
	} = useContext(FormContext);

	return (
		<section className="pb-20 pt-10 relative tab:pb-120px tab:pt-60px bigTab:pb-20 laptop:pb-0 laptop:pt-20">
			<div className="absolute bg-aside blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] dark:bg-darkAside"></div>
			<div className="flex flex-col gap-10 max-w-512 mx-auto tab:max-w-640 bigTab:gap-50px bigTab:max-w-700 laptop:gap-0 laptop:max-w-1024">
				<FormGuide />
				<div className="relative max-w-full">
					<div className="absolute animate-switch-gradient bg-400% inset-0 bg-form mx-30px -rotate-2 rounded-all shadow-lg -skew-y-[5deg] tab:mx-10 bigTab:mx-50px bigTab:-skew-y-[4deg] laptop:mx-16 laptop:-skew-y-2"></div>
					<div className="bg-dark py-60px relative rounded-all shadow-lg tab:py-20 bigTab:py-24 laptop:py-120px dark:bg-white">
						<form
							onSubmit={form.handleSubmit}
							className="grid gap-30px px-30px tab:px-50px bigTab:px-70px laptop:px-100px"
						>
							<FormBody />
							<div>
								<Button
									label="Submit"
									extraStyles={
										(checkError || data) &&
										"cursor-not-allowed opacity-30 dark:opacity-40"
									}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FormPage;
