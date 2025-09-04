import { motion } from "framer-motion";
import Slider from "react-slick";

const Hero = () => {
  const slides = [
    "/images/student1.png",
    "/images/student2.png",
    "/images/student3.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative">
      {/* Slider Background */}
      <Slider {...settings}>
        {slides.map((img, i) => (
          <div key={i}>
            <img
              src={img}
              alt="student life"
              className="w-full h-[80vh] object-cover opacity-70"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/40">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Welcome to Student Life Toolkit 🎓
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl"
        >
          Manage your student life smarter – schedule, budget, study & more.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          🚀 Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
