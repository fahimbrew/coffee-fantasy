import backgroundImage from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div
      className="hero md:h-[500px] h-[300px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md"></div>
      </div>
    </div>
  );
};

export default Banner;
