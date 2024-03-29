import { lazy, useContext, useState } from "react";
import Joi from "../../services/validatorService";
import { setData } from "../../services/httpService";
import {
	loginWithJwt,
	signIn,
	signUp,
	updateUser,
} from "../../services/authService";
import logger from "../../services/logService";
import ValidatorContext from "../../context/validatorContext";
import FormContext from "../../context/formContext";
import Loader from "./loader";
import { clearNotify, mapErrorTo } from "../../utilities/helpers";
import { getFormData } from "../../utilities/getVariables";

const FormPage = lazy(() => import("../formPage"));

const RegisterForm = () => {
	// === Page Context
	const validator = useContext(ValidatorContext);

	// === Page State
	const [state, setState] = useState({
		data: { username: "", email: "", password: "" },
		errors: {},
		success: "",
	});
	const [loader, setLoader] = useState(false);

	// === Schema Validator
	const schema = {
		username: Joi.string().min(3).max(20).required().label("Username"),
		email: Joi.string().email().min(5).max(40).required().label("E-mail"),
		password: Joi.string().min(8).max(30).required().label("Password"),
	};

	// === Handler
	// handling user registration
	const doSubmit = async () => {
		setLoader(true);
		const obj = { ...state };
		const { username, email, password } = obj.data;

		try {
			const { user } = await signUp(email, password);
			await updateUser(user, { displayName: username });
			const {
				user: { accessToken },
			} = await signIn(email, password);
			await setData("users", email, { username, email, password });

			loginWithJwt(accessToken);

			obj.success = "Login Success";
			window.location = "/";
		} catch (error) {
			obj.errors.generic = mapErrorTo(error.code);
			logger.log(error);
		}

		setLoader(false);
		setState({ ...obj });
		clearNotify(obj, setState);
	};

	// ===  Extracting and Destructuring form data
	const { form, data, error, checkError, success } = getFormData(
		state,
		schema,
		validator,
		doSubmit,
		setState
	);

	// === Authentication Data Details
	const fields = [
		{
			id: "username",
			placeholder: "Username",
			type: "text",
			maxLength: "20",
		},
		{ id: "email", placeholder: "E-mail address", maxLength: "40" },
		{
			id: "password",
			placeholder: "Password",
			autoComplete: "new-password",
			maxLength: "30",
		},
	];

	return (
		<FormContext.Provider
			value={{
				guide: {
					text1: "To access more, Register and get whitelisted...",
					text2: "Already have a Tokners account ?",
					path: "/login",
					name: "Sign In",
				},
				body: { form, fields, success, error, checkError, data },
			}}
		>
			{loader && <Loader />}
			<FormPage />
		</FormContext.Provider>
	);
};

export default RegisterForm;
