const Heading = ({ sectionHeader, text }) => {
  return (
    <>
      <h2 className="font-bold leading-10 text-xl">{sectionHeader}</h2>
      <p className="text-sm">{text}</p>
    </>
  );
};

export default Heading;
