import { useSnapCarousel } from "react-snap-carousel";
import CarouselContext from "./../context/carouselContext";

const Carousel = ({ children }) => {
  const carousel = useSnapCarousel();

  return (
    <CarouselContext.Provider value={carousel}>
      {children}
    </CarouselContext.Provider>
  );
};

export default Carousel;
