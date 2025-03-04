import contactImg from "../assets/img/contact.svg";

const Contact = () => {
  return (
    <section className="max-w-5xl mx-auto  ">
      <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-0">
        <img
          src={contactImg}
          alt="contact"
          className="object-cover block mx-auto lg:mt-0 rotate-2"
        />
        <div>
          <h2 className="uppercase text-7xl leading-16 lg:text-8xl text-center lg:leading-24 lg:w-[507px] lg:h-[192px]">
            Let’s start gym{" "}
            <span className="text-primary inline lg:block">training now</span>
          </h2>
          <p className="font-poppins font-normal mt-10">
            Please select a time and date for a consultation, our team will
            reach out to you at the selected time
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ">
            <input
              type="text"
              placeholder="Enter your Name.."
              className="block h-14 font-poppins px-2 py-2 border-2 border-gray-100"
            />
            <input
              type="text"
              placeholder="Enter your Number Phone"
              className="block h-14 font-poppins px-2 py-2 border-2 border-gray-100"
            />
            <input
              type="text"
              placeholder="Enter your Email Address"
              className="block lg:col-span-2 h-14 font-poppins px-2 py-2 border-2 border-gray-100"
            />
          </div>
          <button className="uppercase border-2 border-primary w-44 h-[72px] mt-10 text-primary cursor-pointer lg:hover:scale-110 lg:transition-transform ">
            {" "}
            lest join now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
