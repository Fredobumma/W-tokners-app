import { SVG } from "./svg";

const FormContent = ({ error, fields, form }) => {
  return (
    <>
      {error[0] && (
        <span className="text-center text-red text-xs">{error[0]}</span>
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
