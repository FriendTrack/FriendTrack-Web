import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Form from "./Form";

const SLIDES_ON_PREVIEW = 3;
const FormPage = () => {
  const [formsCount, setFormsCount] = useState(1);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(formsCount);
    }
  }, [formsCount]);
  const onSaveEachForm = () => {
    setFormsCount(formsCount + 1);
  };
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const swiperClass = classNames({
    "h-full w-full": true,
    "cursor-grab": formsCount > SLIDES_ON_PREVIEW,
    "cursor-grabbing": isGrabbing,
  });

  return (
    <Swiper
      modules={[Pagination, Mousewheel]}
      mousewheel
      slidesPerView={SLIDES_ON_PREVIEW}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      className={swiperClass}
    >
      {Array.from({ length: formsCount }).map((_, index) => (
        <SwiperSlide
          className="ps-[20px] px-[20px] pt-6"
          key={index}
          onMouseDown={() => {
            setIsGrabbing(true);
            console.log("down");
          }}
          onMouseUp={() => {
            setIsGrabbing(false);
            console.log("up");
          }}
        >
          <Form onSave={onSaveEachForm} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FormPage;
