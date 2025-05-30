import { Link } from "react-router-dom"
import Tick from "/src/assets/icons/tick.svg"
import Uz from "/src/assets/flags/uz.svg"
import Usa from "/src/assets/flags/USA.webp"
import { useRef, useState } from "react"
import { FaDollarSign, FaEthereum, FaEuroSign } from "react-icons/fa"
import { BsCurrencyBitcoin } from "react-icons/bs"
import Abstract from "/src/assets/bgs/AbstractDesign.png"


function Hero() {
    const lastTransactions = [
        { name: "Joel Kenley", sum: 68.00 },
        { name: "Mark Smith", sum: 68.00 },
        { name: "Lenen Roy", sum: 68.00 },
    ]

    const supportedCurrency = [<FaDollarSign />, <FaEuroSign />, <BsCurrencyBitcoin />, <FaEthereum />]

    const [uzs, updUzs] = useState(12935.91)
    const [usd, updUsd] = useState(1.00)

    const exchangeRate = 12935.91

    const uzsRef = useRef()
    const usdRef = useRef()

    const checkIndex = (e) => {
        switch (e) {
            case 0:
                return "z-20"
            case 1:
                return "-z-10 scale-90 opacity-50"
            case 2:
                return "-z-20 scale-80 opacity-30"
            default:
                return "hidden"
        }
    }



    return (
        <section>
            <div className="custom-container lg:my-10 mb-12">

                <div className="flex lg:flex-row flex-col justify-center items-center gap-35 lg:gap-15 lg:justify-between">

                    <div className="flex flex-col lg:items-start items-center gap-5">
                        <div className="bg-[#262626] w-fit font-[200] py-2 px-5 rounded-full flex items-center gap-1 mb-4 text-[12px] md:text-[14px] lg:text-[18px]">
                            <img src={Tick} alt="" className="w-[20px] h-[20px]" />
                            <p>No LLC Required, No Credit Check.</p>
                        </div>

                        <div className="max-w-[650px] flex flex-col text-center lg:text-left gap-4">
                            <h1 className="font-[500] w-full text-[28px] lg:text-[38px]">Welcome to YourBank Empowering Your <span className="text-[#CAFF33]">Financial Journey</span></h1>
                            <p className="font-[200] w-full text-[14px] lg:text-[18px]">
                                At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
                            </p>
                        </div>

                        <Link className="w-fit text-[14px] lg:text-[18px] text-[#1c1c1c] bg-[#caff33] py-4 px-7 rounded-full lg:my-10">Open Account</Link>
                    </div>

                    <div className="relative">
                        <img src={Abstract} alt="" className="absolute -right-8 -top-8 lg:-right-12 lg:-top-9 -z-10"/>
                        <div className="border relative min-w-[100px] max-w-[500px] rounded-xl border-[#262626] bg-[#1c1c1c] w-fit max-h-[625px] min-h-[365px] h-full pb-2 p-8 z-10">
                            <div className="absolute mx-4 -left-[10%] lg:-left-[11%] -top-[6%] lg:-top-[8%] flex flex-row items-center gap-2 bg-[#22251B] px-4 py-3 rounded-xl">
                                <svg className="w-[32px] h-[32px] lg:w-[38px] lg:h-[38px]" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <circle cx="32" cy="32" r="30" fill="#D4FF32" />
                                    <line x1="32" y1="20" x2="32" y2="44" stroke="#1D1E17" strokeWidth="3" strokeLinecap="round" />
                                    <line x1="20" y1="32" x2="44" y2="32" stroke="#1D1E17" strokeWidth="3" strokeLinecap="round" />
                                </svg>

                                <div className="flex flex-col">
                                    <p className="text-[14px] lg:text-[18px]">+ $5000,00</p>
                                    <p className="font-[200] text-[10px] lg:text-[14px]">Monthly Income</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <h3 className="text-[16px] lg:text-[18px]">Your Transactions</h3>

                                <div className="max-h-[181px] h-full -space-y-6 overflow-y-hidden relative">
                                    {lastTransactions.map((transaction, index) => (
                                        <div
                                            key={index}
                                            className={`flex relative items-baseline-last justify-between bg-[#1c1c1c] border border-[#262626] rounded-xl px-4 py-3 ${checkIndex(index)}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* Transaction Icon */}
                                                <svg
                                                    className="w-[30px] h-[30px] lg:w-[38px] lg:h-[38px]"
                                                    viewBox="0 0 64 64"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                >
                                                    <circle cx="32" cy="32" r="30" fill="#D4FF32" />
                                                    <path
                                                        d="M20 24h20l-4-4m4 4l-4 4"
                                                        stroke="#1D1E17"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M44 40H24l4 4m-4-4l4-4"
                                                        stroke="#1D1E17"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>

                                                <div className="-space-y-0.5 lg:space-y-0">
                                                    <p className="text-[12px] lg:text-[15px] font-light text-white/60">Transaction</p>
                                                    <h3 className="text-[13px] lg:text-[17px] text-white font-medium">{transaction.name}</h3>
                                                </div>
                                            </div>

                                            <p className="text-[15px] lg:text-[20px] font-semibold text-white">
                                                -${transaction.sum.toFixed(2)}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-3">
                                    <h3 className="text-[16px] lg:text-[18px]">Money Exchange</h3>
                                    <div className="grid grid-cols-2 border max-h-[175px] h-full border-[#262626] bg-[#1c1c1c] rounded-xl border-collapse">
                                        <div className="flex flex-col gap-3 border-r border-b p-4 border-[#262626] border-collapse">
                                            <div className="flex flex-row items-center gap-2">
                                                <img src={Uz} alt="Flag" className="rounded-[100%] w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]" />
                                                <p className="text-[13px] lg:text-[15px]">UZS</p>
                                            </div>
                                            <p className="text-[12px] lg:text-[14px] font-[200]">Uzbek Sums</p>
                                        </div>

                                        <div className="flex flex-col gap-3 border-l border-b p-4 border-[#262626] border-collapse">
                                            <div className="flex flex-row items-center gap-2">
                                                <img src={Usa} alt="Flag" className="rounded-[100%] w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]" />
                                                <p className="text-[13px] lg:text-[15px]">USD</p>
                                            </div>
                                            <p className="text-[12px] lg:text-[14px] font-[200]">US Dollars</p>
                                        </div>

                                        <div className="min-h-[75px] border-r border-t border-collapse border-[#262626] p-4">
                                            <input type="number" className="outline-0 no-spinner h-full w-full text-[16px] lg:text-[18px]" value={uzs} onChange={(e) => {
                                                const value = parseFloat(e.target.value) || 0;
                                                updUzs(value)
                                                updUsd((value / exchangeRate).toFixed(2))
                                            }} />
                                        </div>
                                        <div className="min-h-[75px] border-l border-t border-collapse border-[#262626] p-4">
                                            <input type="number" className="outline-0 no-spinner h-full w-full text-[16px] lg:text-[18px]" value={usd} onChange={(e) => {
                                                const value = parseFloat(e.target.value) || 0;
                                                updUsd(value)
                                                updUzs((value * exchangeRate).toFixed(2))
                                            }} />
                                        </div>
                                    </div>

                                    <button className="text-[#D1FF4D] bg-[#D1FF4D]/10 rounded-full py-3 w-full cursor-pointer hover:bg-[#D1FF4D]/30 transition-all duration-300 mt-3 text-[16px] lg:text-[18px]">Exchange</button>
                                </div>

                            </div>
                            <div className="rounded-full bg-[#CAFF33]/10 py-2 px-4 absolute -bottom-[13%] right-0 flex flex-row items-center justify-self-end gap-2">
                                <p className="text-[14px] lg:text-[16px]">Supported Currency</p>
                                <div className="bg-[#1A1A1A] rounded-full p-2 flex gap-2 text-[14px] lg:text-[16px]">
                                    {supportedCurrency.map((item, index) => (
                                        <span key={index} className="bg-[#262626] p-1 rounded-full text-[#caff33]">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero