import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="font-poppins max-w-7xl mt-20 mx-auto ">
      <div className="flex flex-col lg:flex-row lg:justify-between mb-8">
        <div className="flex flex-col justify-center items-start gap-8">
          <p className="p-2 font-normal w-72 h-24">
            <span className="text-primary font-bold">XLEVEL</span> was founded
            by fitness, health and technology experts committed to making
            fitness and health more fit for your place and pace.
          </p>
          <p className="p-2 font-normal">Copyright Xlevel Fitness + Health</p>
        </div>
        <ul className="p-2 font-normal">
          <a href="#service" className="text-primary font-medium p-2">
            <li>Service</li>
          </a>
          <a href="#performance" className="p-2">
            <li>Performance</li>
          </a>
          <a href="#evaluation" className="p-2">
            <li>Evaluation</li>
          </a>
          <a href="#location" className="p-2">
            <li>Location</li>
          </a>
          <a href="#strength" className="p-2">
            <li>Strength</li>
          </a>
          <a href="#intensity" className="p-2">
            <li>Intensity</li>
          </a>
          <a href="#recovery" className="p-2">
            <li>Recovery</li>
          </a>
        </ul>

        <ul className="p-2 font-normal">
          <a href="#company" className="text-primary font-medium p-2">
            <li>Company</li>
          </a>
          <a href="#service-plan" className="p-2">
            <li>Service</li>
          </a>
          <a href="#plan" className="p-2">
            <li>Plan</li>
          </a>
          <a href="#location" className="p-2">
            <li>Location</li>
          </a>
          <a href="#our-team" className="p-2">
            <li>Our Team</li>
          </a>
          <a href="#blog" className="p-2">
            <li>Blog</li>
          </a>
          <a href="#contact-us" className="p-2">
            <li>Contact Us</li>
          </a>
        </ul>

        {/* Aquí está la sección que quieres que esté en la parte superior */}
        <div className="flex flex-col justify-start items-start mt-0 p-2">
          <p className="text-primary font-medium p-2">Join a Newsletter</p>
          <p className="font-normal my-2 p-2">Your Email</p>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4 justify-items-center lg:justify-items-start w-full ">
            <input
              type="text"
              className="h-14 w-full  lg:mx-0 p-2 block border-2 border-primary md:col-span-2 outline-0"
              placeholder="Enter Your E-mail"
            />
            <button className="bg-primary lg:mx-0 h-14 block p-2 cursor-pointer w-full">
              Subscribe
            </button>
          </div>
          <div className=" flex mt-6 gap-4 justify-start items-center mx-auto md:mx-0">
            <FaInstagram className="bg-primary text-2xl rounded-full w-8 h-8 p-2 cursor-pointer lg:hover:scale-150 lg:hover:transition-transform" />
            <RiTwitterXFill className="bg-primary text-2xl rounded-full w-8 h-8 p-2 cursor-point lg:hover:lg:scale-150 lg:hover:transition-transform" />
            <FaFacebookF className="bg-primary text-2xl rounded-full w-8 h-8 p-2 cursor-pointer lg:hover:scale-150 lg:hover:transition-transform" />
          </div>
        </div>
      </div>
      <div className="border-primary border-t-2 flex flex-col lg:flex-row lg:justify-between lg:items-center py-20">
        <p className="p-2">Copyright LevelX</p>
        <div className="p-2 flex flex-row gap-4 lg:justify-center lg:items-center">
          <FaLocationDot className="bg-primary text-2xl rounded-full w-8 h-8 p-2 cursor-pointer lg:hover:scale-150 lg:hover:transition-transform" />
          <p>Los Angeles, CA</p>
        </div>
        <div className="p-2 flex flex-row gap-4 lg:justify-center lg:items-center">
          <MdEmail className="bg-primary text-2xl rounded-full w-8 h-8 p-2 cursor-pointer lg:hover:scale-150 lg:hover:transition-transform" />
          <p>Info@XLevelFitness.com</p>
        </div>
        <div className="p-2 flex flex-row gap-4 lg:justify-center lg:items-center">
          <FaPhone className="bg-primary text-2xl rounded-full w-8 h-8 p-2 cursor-pointer lg:hover:scale-150 lg:hover:transition-transform" />
          <p>+1 (323) 833-4436</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
