import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../utilities/SectionTitle";
import { useEffect, useState } from "react";
import api from "../../../utilities/axiosAccess";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    api.get("getAllReview").then((res) => {
      setReview(res.data);
    });
  }, []);

  return (
    <div className="mb-5">
      <SectionTitle
        heading="Student Research Showcase"
        subHeading="Every research paper displayed in our showcase goes through a rigorous evaluation process to ensure academic excellence. These papers demonstrate students' commitment to producing scholarly work of the highest quality."
      ></SectionTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {review.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" p-4 h-fit border border-black">
              <div className="flex gap-4">
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                    <img src={review.img} />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-2">{review.clgName}</h1>
                  <h1 className="text-xl">{review.user}</h1>
                </div>
              </div>
              <p className="mt-5 text-base">{review.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
