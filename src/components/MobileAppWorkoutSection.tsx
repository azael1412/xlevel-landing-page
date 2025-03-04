import mobileImg from "../assets/img/mobile.svg";

const MobileAppWorkoutSection = () => {
  return (
    <section className="max-w-5xl mx-auto mt-20">
      <h2 className="uppercase text-7xl leading-16 md:text-8xl text-center md:leading-24 md:max-w[630px] md:max-h-[192px]">
        mobile app{" "}
        <span className="text-primary inline md:block">for workout</span>
      </h2>
      <div className="flex flex-col-reverse md:flex-row md:gap-10 justify-center items-center md:justify-between md:content-between mt-10 md:max-w-[1024px] px-9 md:mx-auto">
        <img
          src={mobileImg}
          alt="mobile app"
          className="object-cover block  mt-8 md:mt-0"
        />
        <div>
          <ul className="list-disc font-poppins md:leading-7 md:text-2xl  font-semibold ">
            <li className="p-3">24X7 Support from our trainers</li>
            <li className="p-3">Professional Approach</li>
            <li className="p-3">Scintific Proven Workout Plans</li>
            <li className="p-3">Personalised Workout Plans</li>
            <li className="p-3">IOS, Android App and Web Portal</li>
            <li className="p-3">Exercises Video Add ons</li>
          </ul>
          <button className="uppercase outline-0 rounded-xl mt-6 w-[200px] h-[50px] md:w-[240px] md:h-[72px]  border-1 text-3xl md:text-5xl md:leading-6 border-primary  text-primary cursor-pointer md:hover:scale-110 md:transition-transform">
            Try on
          </button>
        </div>
      </div>
    </section>
  );
};
export default MobileAppWorkoutSection;
