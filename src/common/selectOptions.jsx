const SelectOptions = ({ label, id, autoComplete, ...rest }) => {
  const options = Object.values(rest);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        autoComplete={autoComplete}
        className="bg-transparent border-b-2  border-light h-10 px-2 text-sm w-full tab:w-3/4 dark:border-dark"
      >
        {options.map(({ value, content }, i) => (
          <option value={value} key={i} className="text-dark">
            {content || value}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOptions;
