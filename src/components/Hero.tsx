const Hero = () => {
  return (
    <section className="hero relative max-w-[120.000rem] h-[34.500rem] bg-[#00463D] flex items-center mx-auto">
      <div className="hero-bg w-full h-full opacity-[.20] absolute z-0 top-0 left-0"></div>
      <div className="text-center relative z-10 max-w-[82.688rem] mx-auto">
        <h1 className="text-white text-[2.5rem] lg:text-[4rem] font-[700] leading-[2.8rem] lg:leading-[3.750rem]">
          Busca entre más de 150.000 productos de más de 7000 marcas
        </h1>
        <h3 className="text-white opacity-[.80] font-['Playfair_Display'] text-[1.25rem] lg:text-[1.750rem] lg:leading-[2.250rem] leading-[1.875rem] mt-8 w-[80%] mx-auto">
          Promofarma es es la parafarmacia online que agrupa el catálogo de más
          de 1.000 farmacias y otros vendedores en una sola web.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
