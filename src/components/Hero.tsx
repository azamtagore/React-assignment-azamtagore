const Hero = () => {
    return (
        <div className="container mx-auto flex justify-between justify-content text-2xl items-center p-4 bg-gray-100 text-black">
            <section>
                <h1 className="text-4xl font-bold text-black-900"> Build Your Ideal</h1>
                <h1 className="text-4xl font-bold textbrand-gradient"> Development Stack</h1>
                <p> Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Explore Technologies
                    </button>
                    <button> Learn More</button>
                </div>
            </section>
            <section>
                <img src="/src/assets/banner-stack.png" alt="hero" />
            </section>
        </div>
    );
};

export default Hero;