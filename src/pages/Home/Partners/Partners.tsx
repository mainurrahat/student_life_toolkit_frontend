// src/components/Partners/Partners.tsx
import phLogo from "../../../assets/PH.jfif"; // example path
import tmsLogo from "../../../assets/10ms.jfif";
import upskillLogo from "../../../assets/ups.png";
import sheikhLogo from "../../../assets/logo.jpg";
import edtechLogo from "../../../assets/ups.png";

const partners = [
  {
    name: "Programming Hero",
    logo: phLogo,
    link: "https://www.programming-hero.com/",
  },
  {
    name: "10 Minute School",
    logo: tmsLogo,
    link: "https://www.10minuteschool.com/",
  },
  { name: "Upskill", logo: upskillLogo, link: "https://upskill.com.bd/" },
  { name: "Sheikhupura Academy", logo: sheikhLogo, link: "#" },
  { name: "EdTech Bangladesh", logo: edtechLogo, link: "#" },
];

const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Partners & Sponsors
          </h2>
          <p className="mt-2 text-gray-600">
            Proudly collaborating with Bangladesh's leading EdTech companies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
