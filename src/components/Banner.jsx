import banner3 from "../assets/banner3.jpg";

const Banner = () => {
  return (
    <header
      className="bg-image py-5 bg"
      style={{
        backgroundImage: `url(${banner3})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <h1>Buscador de Bebidas</h1>
    </header>
  );
};

export default Banner;
