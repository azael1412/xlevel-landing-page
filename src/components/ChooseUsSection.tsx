const ChooseUsSection = () => {
  return (
    <section className="max-w-5xl mx-auto mt-20">
      <h2 className="text-center text-7xl leading-16  md:text-8xl md:leading-24">
        Why <span className="text-primary">Choose Us</span>
      </h2>
      <p className="font-poppins md:max-w-[573px] md:max-h-[48px] mx-auto leading-6 my-8 px-9 md:px-0">
        Gym workouts offer a versatile and customizable experience, allowing
        everyone to set specific fitness goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-9 px-9 md:px-[98px]">
        <div className="border-2 border-primary py-6 px-10">
          <p className="text-4xl leading-12 font-normal">01</p>
          <h3 className="text-primary text-2xl font-normal mt-3">
            Mobile Team
          </h3>
          <p className="font-poppins leading-6 font-light">
            We bring our trainers, workout technology and equipment to you,
            making every workout private, customized and convenient
          </p>
        </div>
        <div className="border-2 border-primary py-6 px-10">
          <p className="text-4xl leading-12 font-normal">02</p>
          <h3 className="text-primary text-2xl font-normal mt-3">
            Bespoke Experience
          </h3>
          <p className="font-poppins leading-6 font-light">
            We make every workout fun, goal-oriented and customized for your
            age, fitness level, health condition, or group size
          </p>
        </div>
        <div className="border-2 border-primary py-6 px-10">
          <p className="text-4xl leading-12 font-normal">03</p>
          <h3 className="text-primary text-2xl font-normal mt-3">
            Advanced Technology
          </h3>
          <p className="font-poppins leading-6 font-light">
            We enable you to experience fitness and health results that go
            beyond the scale and mirror with our 3D body visualization
            technology{" "}
          </p>
        </div>
        <div className="border-2 border-primary py-6 px-10">
          <p className="text-4xl leading-12 font-normal">04</p>
          <h3 className="text-primary text-2xl font-normal mt-3">
            Satisfaction Guaranteed
          </h3>
          <p className="font-poppins leading-6 font-light">
            We bring our trainers, workout technology and equipment to you,
            making every workout private, customized and convenient
          </p>
        </div>
      </div>
    </section>
  );
};
export default ChooseUsSection;
