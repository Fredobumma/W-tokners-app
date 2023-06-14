import TeamCarousel from "../teamCarousel";

const Executives = () => {
  const cards = [
    {
      name: "Brad pie",
      role: "CEO and Co founder",
      imgClasses: "bg-[-272px_-5px] tab:bg-[-5px_-5px]",
    },
    {
      name: "Lee Lee",
      role: "CTO and Co founder",
      imgClasses: "bg-[-2861px_-5px] tab:bg-[-2594px_-5px]",
    },
    {
      name: "Shan khan",
      role: "Head of Development",
      imgClasses: "bg-[-4047px_-815px] tab:bg-[-3780px_-815px]",
    },
    {
      name: "Shan Lopez",
      role: "Head of marketing",
      imgClasses: "bg-[-272px_-400px] tab:bg-[-3128px_-400px]",
    },
    {
      name: "Stephanie O.B",
      role: "HR manager",
      imgClasses: "bg-[-4157px_-1210px] tab:bg-[-4157px_-1605px]",
    },
    {
      name: "Lily",
      role: "Community manager",
      imgClasses:
        "bg-[-3107px_-5px] brightness-90 contrast-150 grayscale tab:bg-[-2861px_-400px]",
    },
  ];

  return (
    <section className="-mr-5 py-10 relative bigTab:-mr-8 tab:py-60px laptop:-mr-16 laptop:pb-0 laptop:pt-20">
      <div className="absolute bg-aside blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] dark:bg-darkAside"></div>{" "}
      <TeamCarousel cards={cards} />
    </section>
  );
};

export default Executives;
