import { SVG } from "./svg";

const FormContent = ({ form, fields, success, error }) => {
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
      {fields.map(({ id, type, placeholder, autocomplete }, index) => (
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
            autocomplete || id
          )}
        </span>
      ))}
    </>
  );
};

export default FormContent;
