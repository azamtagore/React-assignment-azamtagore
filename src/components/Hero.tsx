const Hero = () => {
    return (
        <div className="container mx-auto flex justify-between justify-content text-2xl items-center p-4 bg-gray-100 text-black">
            <section>
                <h1 className="text-6xl font-bold text-black-900"> Build Your Ideal</h1>
                <h1 className="brand-gradient text-6xl font-bold textbrand-gradient"> Development Stack</h1>
                <p className="p-10"> Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="space-x-4">
                    <button className="bg-brand-gradient hover:bg-blue-700 text-white font-bold p-4 rounded-2xl">
                        Explore Technologiess
                    </button>
                    <button className="border border-gray-400 m-2 font-bold p-4 rounded-2xl"> Learn More</button>
                </div>
            </section>
            <section>
                <img className= "w-200" src="/src/assets/banner-stack.png" alt="hero" />
            </section>
        </div>
    );
};

export default Hero;