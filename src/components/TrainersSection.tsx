import { useState } from "react";
import professionalOneImg from "../assets/img/professional_1.svg";
import professionalTwoImg from "../assets/img/professional_2.svg";
import professionalThreeImg from "../assets/img/professional_3.svg";
import professionalFourImg from "../assets/img/professional_4.svg";
import starts from "../assets/img/starts.svg";

interface Occupation {
  title: string;
  img: string;
  name: string;
}
// Array de imágenes y sus detalles
const occupations: Occupation[] = [
  {
    img: professionalOneImg,
    title: "Borney Exiteid",
    name: "Rate Trainer",
  },
  {
    img: professionalTwoImg,
    title: "elsa windia",
    name: "Rate Trainer",
  },
  {
    img: professionalThreeImg,
    title: "Geourge aryo",
    name: "Rate Trainer",
  },
  {
    img: professionalFourImg,
    title: "Elisa Espinosa",
    name: "Rate Trainer",
  },
];
const TrainersSection = () => {
  // Estado para controlar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para moverse al siguiente servicio
  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % occupations.length);
  };

  // Función para moverse al servicio anterior
  const prevService = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + occupations.length) % occupations.length
    );
  };

  return (
    <section className="mt-20 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="uppercase text-7xl leading-16 md:text-8xl text-center md:leading-24 md:max-w[630px] md:max-h-[192px] mx-auto">
          Our professional{" "}
          <span className="text-primary inline md:block">trainers</span>
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
        Whether you're looking to set up a home gym or enhance your current
        workout routine
      </p>

      {/* Contenedor del slider */}
      <div className="flex gap-8 justify-center md:justify-start md:overflow-x-scroll md:scrollbar-hidden ">
        <div className="hidden md:flex gap-8">
          {/* Mostrar todos los servicios en una fila */}
          {occupations.map((service, index) => (
            <div
              key={index}
              className="w-[446px] h-[608px] rounded-2xl relative bg-cover bg-center"
              style={{ backgroundImage: `url(${service.img})` }}
            >
              <div className="flex flex-col justify-end  w-full h-full">
                <div className="bg-black opacity-90 p-4 rounded-lg">
                  <h4 className="uppercase text-4xl text-white my-5 text-center">
                    {service.title}
                  </h4>
                  <p className="uppercase text-white text-center mx-auto font-poppins md:max-w-64 mb-5">
                    {service.name}
                  </p>
                  <img
                    src={starts}
                    alt="starts"
                    className="object-cover block my-0 mx-auto"
                  />
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
            className="w-[446px] h-[608px] rounded-2xl relative bg-cover bg-center transition-transform duration-500"
            style={{ backgroundImage: `url(${occupations[currentIndex].img})` }}
          >
            <div className="flex flex-col justify-end w-full h-full">
              <div className="bg-black opacity-90 p-4 rounded-lg">
                <h4 className="uppercase text-4xl text-white  text-center my-5">
                  {occupations[currentIndex].title}
                </h4>
                <p className="uppercase text-white font-poppins md:max-w-64 text-center mb-5">
                  {occupations[currentIndex].name}
                </p>
                <img
                  src={starts}
                  alt="starts"
                  className="object-cover block my-0 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Puntos de navegación visibles solo en dispositivos pequeños */}
      </div>
      <div className="flex justify-center mt-4 md:hidden">
        {occupations.map((_, index) => (
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

export default TrainersSection;
