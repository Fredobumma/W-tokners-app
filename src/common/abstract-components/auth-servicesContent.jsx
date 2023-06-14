const Auth_ServicesContent = ({ cards }) => {
  return (
    <div>
      {cards.map(
        (
          {
            containerClasses,
            headingClasses,
            headingText,
            amountClasses,
            amount,
            textClasses,
          },
          index
        ) => (
          <div
            key={index}
            className={`bg-dark max-w-640 p-8 rounded-all text-center text-white bigTab:px-70px bigTab:py-12 laptop:max-w-800 desktop:max-w-1024 desktop:px-48 desktop:py-24 dark:bg-white dark:text-dark ${containerClasses}`}
          >
            <h3
              className={`font-bold leading-6 text-lg desktop:leading-10 desktop:text-32 ${headingClasses}`}
            >
              {headingText}
            </h3>
            <div className="mx-auto w-fit">
              <h2
                className={`font-bold text-minmax9vw w-full laptop:text-8xl ${amountClasses}`}
              >
                {amount}
              </h2>
              <p
                className={`leading-54 -mt-2.5 text-right text-sm desktop:leading-54 desktop:text-xl ${textClasses}`}
              >
                Tokens
              </p>
            </div>
            {textClasses && (
              <p className="opacity-60 text-xs desktop:text-base">
                from the Genesis supply, 2,500,000,000 will be reserved for the
                ICO while 500,000,000 will be allocated for team members,
                founders and to onboard celebrities and influencers.
              </p>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Auth_ServicesContent;
