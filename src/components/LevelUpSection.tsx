import listIcon from "../assets/img/list_icon.png";

const LevelUpSection = () => {
  return (
    <section className="mt-20 max-w-5xl mx-auto mb-32">
      <div className="flex  justify-between items-center">
        <h2 className="uppercase text-7xl leading-16 lg:text-8xl text-center lg:leading-24 lg:max-w[654px] lg:max-h-[218px] mx-auto">
          <span className="text-primary">LEVEL UP</span> YOUR{" "}
          <span className="lg:block">
            JOURNEY WITH <span className="text-primary">XLEVEL</span>
          </span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:justify-between mt-14 ">
        <div className="flex flex-col lg:hover:scale-110 lg:transition-transform justify-evenly items-start w-[289px] h-[521px] shadow-lg border-2 border-primary rounded-lg p-5 mx-5">
          <h3 className="uppercase text-4xl text-primary">LEVEL 1</h3>
          <h4 className="text-5xl font-poppins font-bold">$25</h4>
          <p className="font-extralight my-3 font-poppins">6 Week Package</p>
          <ul className="px-6 font-normal font-poppins" style={{listStyleImage: `url(${listIcon})`}}>
            <li className="py-2">Unlimited Gym Access</li>
            <li className="py-2">6 Week Package</li>
            <li className="py-2">12 - 18 Training Sessions</li>
            <li className="py-2">Mobile App Access</li>
          </ul>
            <button className="bg-primary outline-0 mt-3 font-poppins text-[18px] rounded-xl w-full px-2 py-2 cursor-pointer">Register Now</button>
        </div>

        <div className="flex flex-col lg:hover:scale-110 lg:transition-transform justify-evenly items-start w-[289px] h-[600px] shadow-lg bg-primary rounded-lg p-5 mx-5">
          <h3 className="uppercase text-4xl ">LEVEL 2</h3>
          <h4 className="text-5xl font-poppins font-bold">$55</h4>
          <p className="font-extralight  font-poppins">63 Month Package</p>
          <ul className="px-6 font-normal font-poppins" style={{listStyleImage: `url(${listIcon})`}}>
            <li className="py-2">2 XLEVEL Assessments</li>
            <li className="py-2">24 - 36 Training Sessions</li>
            <li className="py-2">2 Dietitian Consultation</li>
            <li className="py-2">6 Group Classes</li>
            <li className="py-2">Mobile App Access</li>
          </ul>
            <button className="bg-black outline-0 mt-3 font-poppins text-[18px] rounded-xl w-full px-2 py-2 cursor-pointer">Register Now</button>
        </div>

        <div className="flex flex-col lg:hover:scale-110 lg:transition-transform justify-evenly items-start w-[289px] h-[521px] shadow-lg border-2 border-primary rounded-lg p-5 mx-5">
          <h3 className="uppercase text-4xl text-primary">LEVEL 3</h3>
          <h4 className="text-5xl font-poppins font-bold">$75</h4>
          <p className="font-extralight  font-poppins">6 Month Package</p>
          <ul className="px-6 font-normal font-poppins" style={{listStyleImage: `url(${listIcon})`}}>
            <li className="py-2">4 XLEVEL Assessments</li>
            <li className="py-2">48 - 72 Training Sessions</li>
            <li className="py-2">3 Dietitian Consultation</li>
            <li className="py-2">Unlimited Group Classes</li>
            <li className="py-2">Mobile App Access</li>
          </ul>
            <button className="bg-primary outline-0 mt-3 font-poppins text-[18px] rounded-xl w-full px-2 py-2 cursor-pointer">Register Now</button>
        </div>
      </div>
    </section>
  );
};
export default LevelUpSection;
