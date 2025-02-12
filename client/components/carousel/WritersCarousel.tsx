"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";
import { PostsData } from "@/app/page";
import { useCallback, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

type Props = {
  postsData: PostsData;
};

const WritersCarousel = (props: Props) => {
  const { postsData } = props;
  const swiperRef = useRef<SwiperRef>(null);
  const [navBtnStates, setNavBtnStates] = useState({
    prev: true,
    next: false,
  });

  // Changes buttons to disabled if necessery by changing navBtnStates state.
  const updateNavButtons = (swiper: SwiperType) => {
    setNavBtnStates({
      prev: swiper.isBeginning,
      next: swiper.isEnd,
    });
  };

  // Triggers Swiper Prev function.
  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
    updateNavButtons(swiperRef.current.swiper);
  }, [swiperRef]);

  // Triggers Swiper Next function.
  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
    updateNavButtons(swiperRef.current.swiper);
  }, [swiperRef]);


  if (!postsData || postsData.length === 0) return;

  return (
    <div className="overflow-hidden w-100">
      <h1 className="text-[28px] border-r-[10px] border-custom-red mb-5 mr-3 pr-4 font-semibold text-custom-black">
        כתבי הטורים
      </h1>
      <div className="relative">
        <div
          className="absolute top-[50%] right-2 z-20 hidden sm:block"
          onClick={handlePrev}
        >
          <button
            className={`${navBtnStates.prev ? "disabled opacity-50" : ""}`}
          >
            <i className="border-custom-red border-l-[6px] border-t-[6px] p-[10px] rotate-[135deg] inline-block mr-2"></i>
          </button>
        </div>
        <div className="w-[90%] mx-auto">
          <Swiper
            className="mySwiper"
            slidesPerView={2}
            spaceBetween={20}
            dir="rtl"
            ref={swiperRef}
            breakpoints={{
              640: {
                slidesPerView: "auto",
                spaceBetween: 100,
              },
            }}
          >
            {postsData.map((post) => {
              return (
                <SwiperSlide key={post.postUrl}>
                  <Card post={post} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div
          className="absolute left-2 top-[50%] z-20 hidden sm:block"
          onClick={handleNext}
        >
          <button
            className={`${navBtnStates.next ? "disabled opacity-50" : ""}`}
          >
            <i className="border-custom-red border-r-[6px] border-b-[6px] p-[10px] rotate-[135deg] inline-block mr-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritersCarousel;
