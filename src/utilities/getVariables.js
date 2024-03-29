function pictureSource(value, webpImg2x, webpImg1x) {
	return [
		{ image: webpImg2x, type: "image/webp", media: value },
		{ image: webpImg1x, type: "image/webp" },
	];
}

function getFormData(state, schema, validator, doSubmit, setState) {
	const form = new validator(state, setState, schema, doSubmit);
	const data = Object.values(state.data).filter((el) => el === "").length;
	const error = Object.values(state.errors);
	const checkError = !state.errors.generic && error[0];
	const { success } = state;

	return { form, data, error, checkError, success };
}

export { pictureSource, getFormData };
