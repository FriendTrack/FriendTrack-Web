import { useConfirmReloadPage } from "@/hooks/useConfirmReloadPage";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Form from "./Form";

const SLIDES_ON_PREVIEW = 3;
const FormPage = () => {
  const [formsCount, setFormsCount] = useState(1);
  const swiperRef = useRef<SwiperClass | null>(null);

  useConfirmReloadPage();

  useEffect(() => {
    if (formsCount > SLIDES_ON_PREVIEW) {
      swiperRef.current?.slideTo(formsCount);
    }
  }, [formsCount]);

  return (
    <Swiper
      modules={[Pagination, Mousewheel]}
      mousewheel
      slidesPerView={SLIDES_ON_PREVIEW}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      className={cn(
        "h-full w-full",
        formsCount > SLIDES_ON_PREVIEW && "cursor-grab"
      )}
    >
      {Array.from({ length: formsCount }).map((_, index) => (
        <SwiperSlide className="ps-[20px] px-[20px] pt-6" key={index}>
          <Form onSave={() => setFormsCount(formsCount + 1)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FormPage;
