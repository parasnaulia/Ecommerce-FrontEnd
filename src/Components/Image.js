import { useEffect, useState } from "react";
import { images } from "./Constants/Constants";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
const Image = () => {
  const [index, setIndex] = useState(0);
  // console.log(images);
  useEffect(() => {
    const inter = setInterval(() => {
      setIndex((prev) => {
        if (prev === images.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    return () => {
      clearInterval(inter);
    };
  }, []);
  return (
    <div className="Slider">
      <div>
        <button
          className="btn-prev"
          disabled={index == 0}
          onClick={() => {
            setIndex((prev) => {
              return prev - 1;
            });
          }}
        >
          <FcPrevious />
        </button>
        <img
          className="slider-img"
          src={images[index].url}
          alt="No Img"
          style={{ width: "70rem", height: "20rem" }}
        />
        <button
          className="btn-next"
          disabled={index >= images.length - 1}
          onClick={() => {
            setIndex((prev) => {
              return prev + 1;
            });
          }}
        >
          <FcNext />
        </button>
      </div>
    </div>
  );
};
export default Image;
