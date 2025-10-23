
import React, { useState } from 'react';

const tabs = [
    'Executive Dashboard',
    'Chart of Accounts',
    'Income Statement',
    'Accounts Receivable',
    'Balance Sheet',
    'Journal Entries'
];

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A6741] dark:focus:ring-offset-gray-800 ${
            active
                ? 'bg-[#4A6741] text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
    >
        {children}
    </button>
);

const DashboardView = () => (
    <div className="overflow-x-auto">
        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">Key Performance Indicators</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Real-Time Financial Overview</p>
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="bg-gray-100 dark:bg-gray-700 text-xs uppercase">
                <tr>
                    <th className="px-4 py-3">Metric</th>
                    <th className="px-4 py-3 text-right">Current Period</th>
                    <th className="px-4 py-3 text-right">Previous Period</th>
                    <th className="px-4 py-3 text-right">% Change</th>
                    <th className="px-4 py-3 text-right">Target</th>
                    <th className="px-4 py-3 text-center">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 font-medium">Total Revenue</td>
                    <td className="px-4 py-3 text-right">$125,000</td>
                    <td className="px-4 py-3 text-right">$120,000</td>
                    <td className="px-4 py-3 text-right text-green-600">4.2%</td>
                    <td className="px-4 py-3 text-right">$150,000</td>
                    <td className="px-4 py-3 text-center"><span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">ON TRACK</span></td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 font-medium">Net Income</td>
                    <td className="px-4 py-3 text-right">$30,000</td>
                    <td className="px-4 py-3 text-right">$20,000</td>
                    <td className="px-4 py-3 text-right text-green-600">50.0%</td>
                    <td className="px-4 py-3 text-right">$50,000</td>
                    <td className="px-4 py-3 text-center"><span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">GOOD</span></td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 font-medium">Cash Position</td>
                    <td className="px-4 py-3 text-right">$45,000</td>
                    <td className="px-4 py-3 text-right">$40,000</td>
                    <td className="px-4 py-3 text-right text-green-600">12.5%</td>
                    <td className="px-4 py-3 text-right">$25,000</td>
                    <td className="px-4 py-3 text-center"><span className="px-2 py-1 text-xs font-semibold text-[#D4AF37] bg-yellow-100 rounded-full">EXCELLENT</span></td>
                </tr>
                <tr>
                    <td className="px-4 py-3 font-medium">Accounts Receivable</td>
                    <td className="px-4 py-3 text-right">$28,500</td>
                    <td className="px-4 py-3 text-right">$30,000</td>
                    <td className="px-4 py-3 text-right text-green-600">-5.0%</td>
                    <td className="px-4 py-3 text-right">$30,000</td>
                    <td className="px-4 py-3 text-center"><span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">GOOD</span></td>
                </tr>
            </tbody>
        </table>
    </div>
);

const ChartOfAccountsView = () => (
    <div className="overflow-x-auto">
        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">Chart of Accounts</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">The Foundation of Your Financial System</p>
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="bg-gray-100 dark:bg-gray-700 text-xs uppercase">
                <tr>
                    <th className="px-4 py-3">Account #</th>
                    <th className="px-4 py-3">Account Name</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3 text-right">Current Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-3">1000</td>
                    <td className="px-4 py-3 font-medium">Cash - Operating Acct</td>
                    <td className="px-4 py-3">Asset</td>
                    <td className="px-4 py-3 text-right">$25,000</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50 border-b dark:border-gray-700">
                    <td className="px-4 py-3">1200</td>
                    <td className="px-4 py-3 font-medium">Accounts Receivable</td>
                    <td className="px-4 py-3">Asset</td>
                    <td className="px-4 py-3 text-right">$18,500</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-3">2000</td>
                    <td className="px-4 py-3 font-medium">Accounts Payable</td>
                    <td className="px-4 py-3">Liability</td>
                    <td className="px-4 py-3 text-right">$8,500</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50 border-b dark:border-gray-700">
                    <td className="px-4 py-3">4000</td>
                    <td className="px-4 py-3 font-medium">Sales Revenue</td>
                    <td className="px-4 py-3">Revenue</td>
                    <td className="px-4 py-3 text-right">$125,000</td>
                </tr>
                 <tr>
                    <td className="px-4 py-3">5000</td>
                    <td className="px-4 py-3 font-medium">Office Expenses</td>
                    <td className="px-4 py-3">Expense</td>
                    <td className="px-4 py-3 text-right">$15,000</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const IncomeStatementView = () => (
    <div className="overflow-x-auto">
        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">Income Statement</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Profit & Loss Analysis - Year to Date</p>
        <div className="space-y-2 text-sm">
            <div className="font-bold uppercase text-gray-500 dark:text-gray-400">Revenue</div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-1"><span>Sales Revenue</span><span>$125,000</span></div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-1"><span>Service Revenue</span><span>$25,000</span></div>
            <div className="flex justify-between font-bold pt-1"><span>TOTAL REVENUE</span><span>$153,500</span></div>
            
            <div className="font-bold uppercase text-gray-500 dark:text-gray-400 pt-4">Cost of Goods Sold</div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-1"><span>Materials</span><span>$35,000</span></div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-1"><span>Direct Labor</span><span>$28,000</span></div>
             <div className="flex justify-between font-bold pt-1"><span>TOTAL COGS</span><span>$63,000</span></div>

            <div className="flex justify-between font-extrabold pt-2 text-base bg-yellow-100 dark:bg-[#D4AF37]/20 p-2 rounded-md"><span>GROSS PROFIT</span><span>$90,500</span></div>

            <div className="font-bold uppercase text-gray-500 dark:text-gray-400 pt-4">Operating Expenses</div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-1"><span>Salaries & Wages</span><span>$45,000</span></div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-1"><span>Rent</span><span>$18,000</span></div>
        </div>
    </div>
);
const AccountsReceivableView = () => (
     <div className="overflow-x-auto">
        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">Accounts Receivable</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Customer Invoices and Payment Tracking</p>
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="bg-gray-100 dark:bg-gray-700 text-xs uppercase">
                <tr>
                    <th className="px-4 py-3">Customer</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3 text-right">Amount</th>
                    <th className="px-4 py-3 text-right">Balance</th>
                    <th className="px-4 py-3 text-center">Days Outstanding</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 font-medium">ABC Corp</td>
                    <td className="px-4 py-3">2024-01-10</td>
                    <td className="px-4 py-3 text-right">$15,000</td>
                    <td className="px-4 py-3 text-right">$5,000</td>
                    <td className="px-4 py-3 text-center text-red-500">25</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50 border-b dark:border-gray-700">
                    <td className="px-4 py-3 font-medium">XYZ Inc</td>
                    <td className="px-4 py-3">2024-01-15</td>
                    <td className="px-4 py-3 text-right">$8,500</td>
                    <td className="px-4 py-3 text-right">$8,500</td>
                    <td className="px-4 py-3 text-center text-orange-500">20</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 font-medium">DEF Company</td>
                    <td className="px-4 py-3">2024-01-25</td>
                    <td className="px-4 py-3 text-right">$6,800</td>
                    <td className="px-4 py-3 text-right">$3,800</td>
                    <td className="px-4 py-3 text-center text-green-600">10</td>
                </tr>
            </tbody>
        </table>
    </div>
);
const BalanceSheetView = () => (
    <div className="overflow-x-auto">
        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">Balance Sheet</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Financial Position Statement</p>
        <div className="space-y-2 text-sm">
            <div className="font-bold uppercase text-gray-500 dark:text-gray-400">Assets</div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-1 pl-4"><span>Cash - Operating</span><span>$45,000</span></div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-1 pl-4"><span>Accounts Receivable</span><span>$28,500</span></div>
            <div className="flex justify-between font-bold pt-1 bg-gray-100 dark:bg-gray-700 p-2 rounded-md"><span>TOTAL ASSETS</span><span>$145,500</span></div>

            <div className="font-bold uppercase text-gray-500 dark:text-gray-400 pt-4">Liabilities</div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-1 pl-4"><span>Accounts Payable</span><span>$8,500</span></div>
             <div className="flex justify-between font-bold pt-1 bg-gray-100 dark:bg-gray-700 p-2 rounded-md"><span>TOTAL LIABILITIES</span><span>$11,700</span></div>

            <div className="font-bold uppercase text-gray-500 dark:text-gray-400 pt-4">Equity</div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-1 pl-4"><span>Owner Equity</span><span>$75,000</span></div>
            <div className="flex justify-between font-bold pt-1 bg-gray-100 dark:bg-gray-700 p-2 rounded-md"><span>TOTAL EQUITY</span><span>$133,800</span></div>
        </div>
    </div>
);
const JournalEntriesView = () => (
    <div className="overflow-x-auto">
        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">Journal Entries</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Transaction Recording & Double-Entry Bookkeeping</p>
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="bg-gray-100 dark:bg-gray-700 text-xs uppercase">
                <tr>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Account</th>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3 text-right">Debit</th>
                    <th className="px-4 py-3 text-right">Credit</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-3" rowSpan={2}>2024-01-05</td>
                    <td className="px-4 py-3">1500</td>
                    <td className="px-4 py-3 font-medium">Purchase office equipment</td>
                    <td className="px-4 py-3 text-right">$15,000</td>
                    <td className="px-4 py-3 text-right"></td>
                </tr>
                <tr className="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"><td className="px-4 py-3 text-right">1000</td><td className="pl-8 text-gray-500 dark:text-gray-400">Cash</td><td className="px-4 py-3 text-right"></td><td className="px-4 py-3 text-right">$15,000</td></tr>
                
                 <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-3" rowSpan={2}>2024-01-15</td>
                    <td className="px-4 py-3">5000</td>
                    <td className="px-4 py-3 font-medium">Office rent payment</td>
                    <td className="px-4 py-3 text-right">$2,500</td>
                    <td className="px-4 py-3 text-right"></td>
                </tr>
                <tr className="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"><td className="px-4 py-3 text-right">1000</td><td className="pl-8 text-gray-500 dark:text-gray-400">Cash</td><td className="px-4 py-3 text-right"></td><td className="px-4 py-3 text-right">$2,500</td></tr>
            </tbody>
        </table>
    </div>
);


const Projects: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Executive Dashboard');

    const renderContent = () => {
        switch (activeTab) {
            case 'Executive Dashboard': return <DashboardView />;
            case 'Chart of Accounts': return <ChartOfAccountsView />;
            case 'Income Statement': return <IncomeStatementView />;
            case 'Accounts Receivable': return <AccountsReceivableView />;
            case 'Balance Sheet': return <BalanceSheetView />;
            case 'Journal Entries': return <JournalEntriesView />;
            default: return <DashboardView />;
        }
    };
    
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Flagship Projects</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">A selection of ventures showcasing my expertise in system design, financial modeling, and business development.</p>
                </div>

                <div className="space-y-24">
                    {/* Project 1: Keystone Ledger */}
                    <div className="grid lg:grid-cols-5 gap-12 items-start">
                        <div className="lg:col-span-2" data-aos="fade-right">
                             <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Keystone Ledger</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">A professional-grade accounting system, designed to transform complex financial data into actionable insights. It elevates the standard spreadsheet into a sophisticated, beautifully branded financial management platform.</p>
                            
                            <div className="my-8 rounded-xl overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="100">
                                <div className="aspect-video">
                                    <iframe 
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/wswkrEFEVV8?si=yOy658H3y-ocsvxN" 
                                        title="YouTube video player for Keystone Ledger Professional" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 mt-8">Core Features</h4>
                            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                               <li className="flex items-start"><i className="fas fa-tachometer-alt text-[#4A6741] mt-1 mr-3"></i><span><strong>Real-Time Dashboard:</strong> Executive KPI tracking with visual status indicators.</span></li>
                               <li className="flex items-start"><i className="fas fa-file-invoice-dollar text-[#4A6741] mt-1 mr-3"></i><span><strong>Automated Statements:</strong> Instantly generate Income Statements, Balance Sheets, and more.</span></li>
                               <li className="flex items-start"><i className="fas fa-calculator text-[#4A6741] mt-1 mr-3"></i><span><strong>Double-Entry System:</strong> Professional, validated transaction recording for accuracy.</span></li>
                               <li className="flex items-start"><i className="fas fa-palette text-[#4A6741] mt-1 mr-3"></i><span><strong>Sophisticated Branding:</strong> A clean, professional interface designed to impress investors and lenders.</span></li>
                            </ul>
                        </div>
                        
                        <div className="lg:col-span-3" data-aos="fade-left" data-aos-delay="200">
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
                                 <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                                   <div className="flex items-center justify-between">
                                     <h3 className="font-bold text-lg text-[#2C3E50] dark:text-white">Keystone Ledger Professional 2025</h3>
                                     <div className="flex items-center gap-2">
                                         <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                         <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                         <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                     </div>
                                   </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {tabs.map(tab => (
                                            <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
                                                {tab}
                                            </TabButton>
                                        ))}
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg min-h-[300px]">
                                        {renderContent()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: The Vending Machine Blueprint */}
                    <div className="grid lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-2" data-aos="fade-right">
                           <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                              <img src="https://lh3.googleusercontent.com/pw/AP1GczNvTV8ofgBpuRhh4cakJIxpEP2nIKR3Qx6HwB_YvUXyTSvfSEa3vAYoPtmCqnWsVD7nrf1uXqVn2nk37ntxmfbHN3ujq5NRQHAiOPrjL5upO8naJrhc=w1920-h1080" alt="The Vending Machine Blueprint Cover" className="w-full h-auto object-cover" />
                           </div>
                        </div>
                        <div className="lg:col-span-3" data-aos="fade-left">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">The Vending Machine Blueprint</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">A comprehensive digital course and e-book designed to guide entrepreneurs through every stage of building and scaling a profitable vending machine business. This blueprint demystifies the industry, transforming a simple side hustle into a scalable, data-driven retail enterprise.</p>

                            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 mt-8">Course Highlights</h4>
                            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                               <li className="flex items-start"><i className="fas fa-map-marked-alt text-blue-500 mt-1 mr-3"></i><span><strong>The 4 Pillars of Success:</strong> Master location, product, technology, and efficiency.</span></li>
                               <li className="flex items-start"><i className="fas fa-cash-register text-teal-500 mt-1 mr-3"></i><span><strong>Financial Roadmaps:</strong> Detailed startup budgets and profitability calculators.</span></li>
                               <li className="flex items-start"><i className="fas fa-search-location text-blue-500 mt-1 mr-3"></i><span><strong>Location Scouting:</strong> Proven strategies to find and secure high-traffic locations.</span></li>
                               <li className="flex items-start"><i className="fas fa-cogs text-teal-500 mt-1 mr-3"></i><span><strong>Tech Integration:</strong> Leverage cashless systems and VMS for massive efficiency gains.</span></li>
                            </ul>
                            <a href="https://roomservicebranding.com/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-blue-700 hover:scale-105">
                                <i className="fas fa-rocket mr-2"></i>Launch Your Vending Business
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;