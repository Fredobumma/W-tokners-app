import { lazy, useContext } from "react";
import FormContext from "../context/formContext";

const SVG = lazy(() => import("./assets/svgs/allSvg"));

const FormBody = () => {
	const {
		body: { form, fields, success, error },
	} = useContext(FormContext);

	return (
		<>
			{error[0] && (
				<span className="text-center text-red text-xs">{error[0]}</span>
			)}
			{success && (
				<span className="font-bold text-center text-green-600 text-xs">
					{success}
				</span>
			)}
			{fields.map(
				({ id, type, placeholder, autoComplete, maxLength }, index) => (
					<span
						key={index}
						className="border-light flex border-b-2 gap-2 items-center dark:border-dark"
					>
						<label htmlFor={id}>
							<SVG id={id} />
						</label>
						{form.renderInput(
							id,
							id,
							type || id,
							placeholder,
							autoComplete || id,
							maxLength
						)}
					</span>
				)
			)}
		</>
	);
};

export default FormBody;
