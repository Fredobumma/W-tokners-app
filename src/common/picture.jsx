const Picture = ({ sources, imgClasses, src, alt }) => {
  return (
    <picture>
      {sources.map(({ image, media, type }, index) => (
        <source
          key={index}
          srcSet={image}
          media={media && `(min-width: ${media}px)`}
          type={type}
        />
      ))}
      <img
        className={imgClasses}
        src={src}
        alt={alt}
        loading="lazy"
        height="100%"
        width="100%"
      />
    </picture>
  );
};

export default Picture;
