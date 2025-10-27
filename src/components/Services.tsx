
import React from 'react';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider">Professional Service</span>
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white my-4">Insurance Billing & Claims Advocacy</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Navigating the complexities of insurance claims can be daunting. With my expertise, I fight for unpaid and underpaid claims to ensure you receive the reimbursement you're entitled to. I advocate on behalf of both healthcare facilities and individuals, turning denials into approvals and maximizing revenue.</p>
                        
                        <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Why Partner With Me?</h4>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                           <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i><span><strong>Proven Results:</strong> A track record of successfully overturning denied claims and recovering significant revenue.</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i><span><strong>Industry Expertise:</strong> Deep knowledge of payer policies, billing codes, and the appeals process within the behavioral health sector.</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i><span><strong>Dedicated Advocacy:</strong> A relentless approach to ensure fair and timely payment for the services you provide.</span></li>
                        </ul>

                        <a 
                            href="https://www.fiverr.com/amitmishra_pro/insurance-claims-advocacy" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-8 inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-green-700 hover:scale-105"
                        >
                            <i className="fas fa-gavel mr-2"></i>View Service on Fiverr
                        </a>
                    </div>
                    <div className="text-center" data-aos="fade-left" data-aos-delay="200">
                         <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                            <img 
                                src="https://lh3.googleusercontent.com/pw/AP1GczPWTMZmzfJclDo_KBBWt9zfEPlHfGYJBGMn_3NNSZ_2bYu0vR4ZyjoUuZxtb_I0cCkoUfFwutxxY_qU3e_BspR2kHyt9Cj-CGIyLhqB7pMTlzygQS0O=w1920-h1080" 
                                alt="A professional discussing insurance claims and billing" 
                                className="w-full h-auto object-cover" 
                            />
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;