import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // ✅ important
const testimonials = [
  {
    name: "Rakib",
    role: "CSE Student",
    feedback: "This app helped me never miss a class! Highly recommended.",
  },
  {
    name: "Nabila",
    role: "BBA Student",
    feedback: "Budget Tracker saved me from overspending every month.",
  },
  {
    name: "Sami",
    role: "EEE Student",
    feedback: "Exam Q&A generator made my practice so easy and fast!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#37353E] mb-4">
          What Students Say
        </h2>
        <p className="text-gray-600 mb-10">
          Hear from students who improved their productivity with our toolkit.
        </p>

        <Swiper
          modules={[Pagination]} // ✅ Correct
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-2xl p-6 mx-4 h-full flex flex-col justify-between">
                <p className="text-gray-700 mb-4">"{t.feedback}"</p>
                <h4 className="text-[#715A5A] font-semibold">{t.name}</h4>
                <span className="text-gray-500 text-sm">{t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
