import { FaBriefcase } from "react-icons/fa"
import { FaMoneyCheckDollar } from "react-icons/fa6"
import { IoArchive } from "react-icons/io5"


function Individual() {
    const forIndividual = [
            {icon: <FaBriefcase />, h1: "Checking Accounts", p: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."},
            {icon: <IoArchive />, h1: "Savings Accounts", p: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."},
            {icon: <FaMoneyCheckDollar />, h1: "Loans and Mortgages", p: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."},
        ]
    return(
        <section>
            <div className="flex flex-col lg:flex-row justify-evenly items-stretch my-10 lg:my-35">
                {forIndividual.map((item, index) => (
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
    )
}

export default Individual