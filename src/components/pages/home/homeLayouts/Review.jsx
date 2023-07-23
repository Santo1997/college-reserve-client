import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import SectionTitle from "../../../utilities/SectionTitle";

const Review = () => {
  return (
    <div className="mb-5">
      <SectionTitle
        heading="Student Research Showcase"
        subHeading="Every research paper displayed in our showcase goes through a rigorous evaluation process to ensure academic excellence. These papers demonstrate students' commitment to producing scholarly work of the highest quality."
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="grid md:grid-cols-2 gap-2 w-full">
            <div className="mx-10 md:my-10 md:ms-10 p-4 h-fit border">
              <div className="flex gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-2">College Name 1</h1>
                  <h1 className="text-xl">Summer Sage</h1>
                  <h1 className="text-base">Department</h1>
                </div>
              </div>
              <p className="mt-5  text-base">
                Explore diverse languages, connect with cultures, and embark on
                a linguistic journey like no other. Learn, engage, and celebrate
                the power of language with our vibrant community. Join us today!
              </p>
            </div>
            <div className="mx-10 md:my-10 md:me-10 p-4 h-fit border">
              <div className="flex gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-2">College Name 1</h1>
                  <h1 className="text-xl">Summer Sage</h1>
                  <h1 className="text-base">Department</h1>
                </div>
              </div>
              <p className="mt-5  text-base">
                Explore diverse languages, connect with cultures, and embark on
                a linguistic journey like no other. Learn, engage, and celebrate
                the power of language with our vibrant community. Join us today!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-2 gap-2 w-full">
            <div className="mx-10 md:my-10 md:ms-10 p-4 h-fit border">
              <div className="flex gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-2">College Name 1</h1>
                  <h1 className="text-xl">Summer Sage</h1>
                  <h1 className="text-base">Department</h1>
                </div>
              </div>
              <p className="mt-5  text-base">
                Explore diverse languages, connect with cultures, and embark on
                a linguistic journey like no other. Learn, engage, and celebrate
                the power of language with our vibrant community. Join us today!
              </p>
            </div>
            <div className="mx-10 md:my-10 md:me-10 p-4 h-fit border">
              <div className="flex gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-2">College Name 1</h1>
                  <h1 className="text-xl">Summer Sage</h1>
                  <h1 className="text-base">Department</h1>
                </div>
              </div>
              <p className="mt-5  text-base">
                Explore diverse languages, connect with cultures, and embark on
                a linguistic journey like no other. Learn, engage, and celebrate
                the power of language with our vibrant community. Join us today!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
