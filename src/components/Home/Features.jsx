import { useState } from "react"
import Banking from "./Features/Banking"


function Features() {
    const [active, updActive] = useState(1)

    return (
        <section>
            <div className="custom-container">
                <div className="flex flex-col gap-5 text-center lg:text-left my-10">
                    <h1 className="text-[28px] lg:text-[38px] font-medium">Our <span className="text-[#caff33]">Features</span></h1>
                    <p className="font-light text-[14px] lg:text-[18px] text-[#b3b3b3] max-w-[1240px]">Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between w-full gap-5 lg:items-baseline">
                    <div className="overflow-x-auto md:overflow-visible hide-scrollbar">
                        <div className="bg-[#1c1c1c] p-8 min-w-max rounded-xl flex flex-row md:flex-col text-nowrap items-center justify-center gap-5 my-10">
                            <button onClick={() => updActive(1)} className={`border-2 py-4 px-6 rounded-full border-[#262626] w-full transition-all duration-300 ${active == 1 ? "text-[#caff33] bg-[#1A1A1A] cursor-default" : "hover:bg-[#1a1a1a] hover:text-[#caff33] cursor-pointer"}`}>Online Banking</button>
                            <button onClick={() => updActive(2)} className={`border-2 py-4 px-6 rounded-full border-[#262626] w-full transition-all duration-300 ${active == 2 ? "text-[#caff33] bg-[#1A1A1A] cursor-default" : "hover:bg-[#1a1a1a] hover:text-[#caff33] cursor-pointer"}`}>Financial Tools</button>
                            <button onClick={() => updActive(3)} className={`border-2 py-4 px-6 rounded-full border-[#262626] w-full transition-all duration-300 ${active == 3 ? "text-[#caff33] bg-[#1A1A1A] cursor-default" : "hover:bg-[#1a1a1a] hover:text-[#caff33] cursor-pointer"}`}>Customer Support</button>
                        </div>
                    </div>

                    <Banking show={active} />
                </div>
            </div>
        </section>
    )
}

export default Features