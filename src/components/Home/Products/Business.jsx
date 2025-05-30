import { FaBuilding, FaCreditCard, FaChartLine } from "react-icons/fa6";

function Business() {
    const forBusiness = [
        {
            icon: <FaBuilding />,
            h1: "Business Accounts",
            p: "Manage your business finances with our tailored checking and savings account options designed specifically for businesses of all sizes. Enjoy features like expense tracking, multi-user access, and dedicated support."
        },
        {
            icon: <FaCreditCard />,
            h1: "Business Loans & Credit",
            p: "Fuel your growth with our flexible business loan and credit solutions. From equipment financing to working capital loans, we support your expansion every step of the way."
        },
        {
            icon: <FaChartLine />,
            h1: "Cash Flow Management",
            p: "Stay on top of your cash flow with tools and insights that help you forecast, monitor, and optimize your finances. Make informed decisions to keep your business running smoothly."
        },
    ];

    return (
        <section>
            <div className="flex flex-col lg:flex-row justify-evenly items-stretch my-10 lg:my-35">
                {forBusiness.map((item, index) => (
                    <div key={index} className="flex gap-5 text-center flex-col items-center border-b-2 lg:border-b-0 lg:border-r-2 last:border-0 w-full border-[#262626] lg:px-10 lg:py-2 py-10">
                        <div className="text-[28px] lg:text-[30px] text-[#caff33] border-2 bg-gradient-to-t from-transparent to-[#caff33]/10 border-[#caff33]/25 rounded-[100%] p-5 transition-all hover:shadow-[0px_0px_0px_15px_#caff33]/5 mb-3">
                            {item.icon}
                        </div>
                        <h1 className="text-[20px] lg:text-[24px]">{item.h1}</h1>
                        <p className="text-[14px] lg:text-[16px] font-[300] text-[#B3B3B3]">{item.p}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Business;
