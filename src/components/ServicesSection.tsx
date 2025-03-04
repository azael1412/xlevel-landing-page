import { useState } from "react";
import serviceOneImg from "../assets/img/service_1.svg";
import serviceTwoImg from "../assets/img/service_2.svg";
import serviceThreeImg from "../assets/img/service_3.svg";

interface Service {
  title : string
  img : string
  description : string
}
const services : Service[] = [
  {
    img: serviceOneImg,
    title: "PERFORMANCE",
    description:
      "SPORTS CONDITIONING PERSONAL / GROUP TRAINING SPECIALTY SERVICES",
  },
  {
    img: serviceTwoImg,
    title: "EVALUATION",
    description:
      "3D BODY SCAN IN-DEPTH BODY ASSESSMENT PHYSICAL AND DIETARY ASSESSMENT",
  },
  {
    img: serviceThreeImg,
    title: "STRENGTH",
    description: "WEIGHT TRAINING RESISTANCE TRAINING RECOVERY TRAINING",
  },
];
const ServicesSection = () => {
  // Estado para controlar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imágenes y sus detalles

  // Función para moverse al siguiente servicio
  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  // Función para moverse al servicio anterior
  const prevService = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  return (
    <section className="mt-20 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="uppercase text-7xl leading-16 md:text-8xl text-center md:leading-24 md:max-w[630px] md:max-h-[192px] mx-auto">
          Our <span className="text-primary inline">Services</span>
        </h2>
        {/* Botones solo para dispositivos pequeños */}
        <div className="hidden justify-end gap-8 sm:flex md:hidden">
          <button
            onClick={prevService}
            className="w-16 h-16 text-2xl bg-white text-black rounded-full cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={nextService}
            className="w-16 h-16 text-2xl bg-primary text-white rounded-full cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      <p className="font-poppins my-8 font-semibold md:text-2xl text-center">
        Delivered By Highly Trained Fitness and Health Professionals
      </p>

      {/* Contenedor del slider */}
      <div className="flex gap-8 md:overflow-x-scroll md:scrollbar-hidden">
        <div className="hidden md:flex gap-8">
          {/* Mostrar todos los servicios en una fila */}
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[446px] h-[608px] rounded-2xl relative bg-cover bg-center"
              style={{ backgroundImage: `url(${service.img})` }}
            >
              <div className="flex flex-col justify-end w-full h-full">
                <div className="bg-black opacity-90 p-4 rounded-lg">
                  <h4 className="uppercase text-4xl text-white my-5">
                    {service.title}
                  </h4>
                  <p className="uppercase text-white font-poppins md:max-w-64">
                    {service.description}
                  </p>
                  <button className="bg-primary cursor-pointer font-medium md:text-2xl text-left leading-7 text-white py-2 px-4 rounded-lg mt-4 block w-fit md:w-full h-15">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Para dispositivos pequeños, mostrar el slider */}
        <div
          className="md:hidden flex justify-center overflow-hidden"
          style={{ position: "relative" }}
        >
          <div
            className="max-w-[446px] h-[608px] rounded-2xl relative bg-cover bg-center transition-transform duration-500"
            style={{ backgroundImage: `url(${services[currentIndex].img})` }}
          >
            <div className="flex flex-col justify-end w-full h-full">
              <div className="bg-black opacity-90 p-4 rounded-lg">
                <h4 className="uppercase text-4xl text-white my-5">
                  {services[currentIndex].title}
                </h4>
                <p className="uppercase text-white font-poppins md:max-w-64">
                  {services[currentIndex].description}
                </p>
                <button className="bg-primary cursor-pointer font-normal md:text-2xl text-center leading-7 text-white py-2 px-3 rounded-lg mt-4 block w-fit ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Puntos de navegación visibles solo en dispositivos pequeños */}
      </div>
      <div className="flex justify-center mt-4 md:hidden">
        {services.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentIndex === index ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
        </div>
    </section>
  );
};

export default ServicesSection;