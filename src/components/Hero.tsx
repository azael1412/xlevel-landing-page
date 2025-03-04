import image from "./../assets/img/bg_1.svg";

const Hero = () => {
  return (
    <main className="relative">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-black from-20% to-neutral-900 to-80% opacity-40 z-0"></div>
      <div
        className="bg-cover pl-4 md:pl-0 bg-right-bottom lg:bg-right-top w-full h-screen flex flex-col items-start justify-center gap-8 lg:gap-0 lg:block "
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className=" lg:absolute text-7xl text-balance leading-16 lg:text-8xl lg:top-63 lg:left-24 z-10 lg:w-[720px] lg:leading-25 lg:h-76 font-normal">
          LOS ANGELES’ PREMIER{" "}
          <span className="text-red-500 font-bold">
            MOBILE FITNESS AND HEALTH PROFESSIONALS
          </span>
        </h1>
        <p className="font-poppins lg:absolute lg:top-147 lg:left-24 z-10 lg:w-149 lg:leading-6 lg:h-18 font-normal">
          Level up your fitness and health journey with XLEVELs onsite
          personalized training, fitness technology and dietitian services
        </p>

        <button className="outline-0 self-center block lg:absolute w-[200px] h-[50px] lg:w-[260px] lg:h-[72px] text-3xl uppercase lg:left-24 lg:top-[691px] z-20 rounded-xl border-1 lg:text-5xl leading-6  border-primary  text-primary cursor-pointer md:hover:scale-110 md:transition-transform">
          get the app
        </button>
        <div className="lg:absolute flex w-full lg:flex-row lg:justify-between items-center justify-center lg:top-[831.5px] lg:left-24 lg:w-[559px] lg:h-[82.5]">
          <div className="border-r-2 border-gray-500">
            <p className="text-primary text-5xl text-center p-2 md:p-4 ">
              05+
              <span className="block  text-base font-poppins">
                Years of Experience
              </span>
            </p>
          </div>
          <div className="border-r-2 border-gray-500">
            <p className="text-primary text-5xl text-center p-2 md:p-4">
              1000+
              <span className="block  text-base font-poppins">
                Members Join
              </span>
            </p>
          </div>
          <div>
            <p className="text-primary text-5xl text-center p-2 md:p-4">
              1000+
              <span className="block  text-base font-poppins">
                Happy members
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
