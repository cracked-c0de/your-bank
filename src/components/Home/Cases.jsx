import { AiFillDollarCircle } from "react-icons/ai"
import { FaBookOpen, FaHandHoldingUsd } from "react-icons/fa"
import { FaMoneyCheckDollar } from "react-icons/fa6"
import { IoBusiness } from "react-icons/io5"
import { MdHome, MdSavings } from "react-icons/md"
import { TbPresentationAnalyticsFilled } from "react-icons/tb"
import Dots from "/src/assets/bgs/dots.svg"


function Cases() {
    const individualBox = [
        { icon: <FaHandHoldingUsd />, text: "Managing Personal Finances" },
        { icon: <MdSavings />, text: "Saving for the Future" },
        { icon: <MdHome />, text: "Homeownership" },
        { icon: <FaBookOpen />, text: "Education Funding" },
    ]
    const businessBox = [
        { icon: <IoBusiness />, text: "Startups and Entrepreneurs" },
        { icon: <FaMoneyCheckDollar />, text: "Cash Flow Management" },
        { icon: <TbPresentationAnalyticsFilled />, text: "Business Expansion" },
        { icon: <AiFillDollarCircle />, text: "Payment Solutions" },
    ]
    const individualPercent = [
        { percent: 78, p: "Secure Retirement Planning" },
        { percent: 63, p: "Manageable Debt Consolidation" },
        { percent: 91, p: "Reducing financial burdens" },
    ]
    const businessPercent = [
        { percent: 65, p: "Cash Flow Management" },
        { percent: 70, p: "Drive Business Expansion" },
        { percent: 45, p: "Streamline payroll processing" },
    ]

    return (
        <section>
            <div className="custom-container">
                <div className="flex flex-col gap-5 text-center lg:text-left">
                    <h1 className="text-[28px] lg:text-[38px] font-medium text-[#caff33]">Use Cases</h1>
                    <p className="font-light text-[14px] lg:text-[18px] text-[#b3b3b3]">At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 w-full place-items-stretch place-content-between gap-15 my-15">
                    <div className="bg-[#1C1C1C] rounded-xl p-5 grid grid-cols-2 gap-5 relative z-0 overflow-hidden">
                        <img src={Dots} alt="" className="absolute z-10 w-[250px] h-[260px] -top-[5%] -left-[5%]"/>
                        {individualBox.map((item, index) => (
                            <div key={index} className="bg-[#1a1a1a] border-[#262626] border-2 z-20 rounded-xl flex flex-col items-center justify-stretch py-6 px-15 gap-4">
                                <div className="text-[24px] lg:text-[30px] text-[#caff33] border-2 bg-gradient-to-t from-transparent to-[#caff33]/10 border-[#caff33]/25 rounded-[100%] p-5 transition-all hover:shadow-[0px_0px_0px_15px_#caff33]/5 mb-3">
                                    {item.icon}
                                </div>
                                <h3 className="text-center lg:text-[18px] text-[14px]">{item.text}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-5 text-center lg:text-left">
                            <h2 className="font-medium text-[26px]">For Individuals</h2>
                            <p className="font-light text-[16px] text-[#b3b3b3]">For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                        </div>

                        <div className="flex flex-col lg:flex-row items-stretch justify-between last:border-0 my-10 gap-10">
                            {individualPercent.map((item, index) => (
                                <div key={index} className="flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 px-10 border-dashed lg:justify-start justify-center items-center lg:items-start last:border-0 border-[#262626] lg:gap-5 pb-10">
                                    <h3 className="text-[40px] text-[#caff33]">{item.percent}%</h3>
                                    <p className="text-[15px] font-light text-[#b3b3b3] text-left">{item.p}</p>
                                </div>
                            ))}
                        </div>

                        <button className="w-fit lg:self-start self-center py-3 px-6 border-2 rounded-full border-[#262626] bg-[#1c1c1c] text-[14px] cursor-pointer hover:bg-[#262626] transition-all duration-300">Learn More</button>
                    </div>



                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-5 lg:text-left text-center">
                            <h2 className="font-medium text-[26px]">For Business</h2>
                            <p className="font-light text-[16px] text-[#b3b3b3]"> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them</p>
                        </div>

                        <div className="flex flex-col lg:flex-row items-stretch justify-between last:border-0 my-10">
                            {businessPercent.map((item, index) => (
                                <div key={index} className="flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 px-10 border-dashed lg:justify-start justify-center items-center lg:items-start last:border-0 border-[#262626] lg:gap-5 pb-10">
                                    <h3 className="text-[40px] text-[#caff33]">{item.percent}%</h3>
                                    <p className="text-[15px] font-light text-[#b3b3b3] text-left">{item.p}</p>
                                </div>
                            ))}
                        </div>

                        <button className="w-fit lg:self-start self-center py-3 px-6 border-2 rounded-full border-[#262626] bg-[#1c1c1c] text-[14px] cursor-pointer hover:bg-[#262626] transition-all duration-300">Learn More</button>
                    </div>

                    <div className="bg-[#1C1C1C] dotted-background rounded-xl p-5 grid grid-cols-2 gap-3 relative z-0 overflow-hidden">
                        <img src={Dots} alt="" className="absolute z-10 w-[250px] h-[260px] -top-[5%] lg:rotate-90 lg:-right-[5%]"/>
                        {businessBox.map((item, index) => (
                            <div key={index} className="bg-[#1a1a1a] z-20 border-[#262626] border-2 rounded-xl flex flex-col items-center justify-stretch py-6 px-15 gap-4">
                                <div className="text-[24px] lg:text-[30px] text-[#caff33] border-2 bg-gradient-to-t from-transparent to-[#caff33]/10 border-[#caff33]/25 rounded-[100%] p-5 transition-all hover:shadow-[0px_0px_0px_15px_#caff33]/5 mb-3">
                                    {item.icon}
                                </div>
                                <h3 className="text-center text-[14px] lg:text-[18px]">{item.text}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cases