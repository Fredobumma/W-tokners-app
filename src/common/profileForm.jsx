import SVG from "./assets/svgs/allSvg";
import { SecondaryInput } from "./input";
import Button from "./button";

const AuthForm = ({ form, success, errors, inputs, validateData }) => {
  return (
    <form className="border-b grid gap-30px pb-10 px-30px tab:pb-60px tab:px-50px bigTab:px-70px laptop:pb-20 laptop:px-100px">
      {errors.generic && (
        <span className="text-center text-red text-xs">{errors.generic}</span>
      )}
      {success && (
        <span className="font-bold text-center text-green-600 text-xs">
          {success}
        </span>
      )}
      {inputs.map(
        (
          { id, type, placeholder, autoComplete, maxLength, handler },
          index
        ) => (
          <div
            key={index}
            className="tab:flex tab:items-end tab:justify-around"
          >
            <div className="tab:w-3/5">
              {errors[id] && (
                <span className="text-red text-xs">{errors[id]}</span>
              )}
              <span className="flex border-b-2 border-light gap-2 items-center mt-2.5 dark:border-dark">
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
            </div>
            <Button
              label="Update"
              extraStyles={
                (errors[id] || validateData(id)) &&
                "cursor-not-allowed opacity-30 dark:opacity-40"
              }
              onClick={handler}
            />
          </div>
        )
      )}
    </form>
  );
};

const PersonalForm = ({ success, errors, inputs, handler }) => {
  return (
    <form
      onSubmit={handler}
      className="border-b grid gap-30px pb-10 px-30px tab:px-70px bigTab:px-24 laptop:pb-60px laptop:px-150px desktop:px-170px"
    >
      {inputs.map(({ Component, ...rest }, index) => (
        <span
          key={index}
          className="flex flex-col tab:flex-row tab:items-center tab:justify-between"
        >
          {(Component && <Component {...rest} />) || (
            <SecondaryInput {...rest} />
          )}
        </span>
      ))}
      <Button label="Save" extraStyles="ml-auto w-fit" />
      {errors.generic && (
        <span className="text-center text-red text-xs">{errors.generic}</span>
      )}
      {success && (
        <span className="font-bold text-center text-green-600 text-xs">
          {success}
        </span>
      )}
    </form>
  );
};

export { AuthForm, PersonalForm };
