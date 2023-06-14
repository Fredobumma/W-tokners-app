const Auth_HeroContent = ({ paragraph1, value, valueColor }) => {
  return (
    <>
      <p className="font-bold text-sm desktop:text-xl desktop:leading-54">
        {paragraph1}
      </p>
      <h2
        className={`font-bold leading-10 text-32 tab:text-40 desktop:text-5xl desktop:leading-54 ${valueColor}`}
      >
        {value}
      </h2>
      <p className="font-bold text-right text-xs desktop:text-xl desktop:leading-54">
        Tknrs Tokens
      </p>
    </>
  );
};

export default Auth_HeroContent;
