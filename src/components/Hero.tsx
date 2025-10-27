import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 pt-20" id="home">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <p className="text-blue-600 dark:text-blue-400 mb-2 text-lg font-semibold">Healthcare Business Development</p>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">Innovating Healthcare.<br />Driving Growth.</h1>
                        <p className="text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-lg">A seasoned expert in optimizing revenue cycles and fostering strategic partnerships within the behavioral health sector.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-blue-700 hover:scale-105">
                                <i className="fas fa-paper-plane mr-2"></i>Let's Connect
                            </a>
                            <a 
                              href="https://www.linkedin.com/in/amitmishraclear"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white hover:scale-105"
                            >
                              <i className="fab fa-linkedin mr-2"></i>View LinkedIn Profile
                            </a>
                        </div>
                    </div>
                    <div className="text-center" data-aos="fade-left" data-aos-delay="200">
                         <div className="relative group">
                            <img src="https://lh3.googleusercontent.com/pw/AP1GczMu3e3iaz8PTuoYQg5kMktD3y0cCKwoUxLDUbjVSTQ2qZ7lY0GtumDhtDLK55LW8_ok5k06PvQa97lU9l_P-mmzzY1Akd-NapF5RZsxu55hun0Ppmij=w1920-h1080" alt="Amit Mishra Profile" className="w-full max-w-sm mx-auto h-auto rounded-full object-cover relative z-10 shadow-2xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
