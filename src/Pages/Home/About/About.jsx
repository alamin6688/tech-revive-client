

const About = () => {
  return (
    <div className="hero bg-base-200 mt-8 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row pb-10">
        <div className='lg:w-1/2 relative'>
        <img src="https://i.postimg.cc/cLyC2b3W/male-mechanics-working-together-car-shop.jpg" 
            className="w-3/4 rounded-lg shadow-2xl"/>
        <img src="https://i.postimg.cc/4dJhMFry/men-working-cutting-mdf-board.jpg" 
            className="w-1/2 absolute top-1/2 right-5 rounded-lg shadow-2xl border-8 border-white "/>
        </div>
        <div className='lg:w-1/2 space-y-5 mt-12'> 
            <h3 className='text-[#FF3811] text-[20px] font-bold'>
                About us
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold">
                We are qualified & <br /> highly experienced <br /> in this field
            </h1>
            <p className="py-6 text-[18px]">
                Backed by industry certifications, Our seasoned team ensures precise diagnoses and reliable repairs. Your devices are in capable hands with our proven track record of excellence.
            </p>
            <p className="py-6 text-[18px]">
                Certified experts with years of hands-on experience. Trust us for skilled solutions tailored to your needs .
            </p>
            <button className="btn bg-[#FF3811] hover:bg-[#ff2a00] text-white">
                Get More Info
            </button>
        </div>
      </div>
    </div>
  );
};

export default About;