const Intro = () => {
  return (
    <div
      className="hero mt-4 lg:min-h-[calc(100vh-200px)] bg-red-200"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/7WBVCpk/happy-high-school-students-raising-their-hands-on-a-class.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content py-4 lg:py-0 text-center text-neutral-content">
        <div className="md:max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 ">
            College Reserve is a creative and unique name for a web application
            that offers college booking facilities. The play on words with
            College (a collection of different elements) and Reserve (to book or
            set aside) adds a clever touch to the name. It suggests a platform
            where users can reserve and organize diverse college facilities or
            spaces for various events and activities.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
