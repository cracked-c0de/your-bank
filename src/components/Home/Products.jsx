import { useState } from "react"
import Individual from "./Products/Individual"
import Business from "./Products/Business"


function Products() {
    const [active, setActive] = useState(1)


    return (
        <section className="mt-30">
            <div className="custom-container">
                <div className="flex flex-col text-center lg:text-left lg:flex-row justify-center items-center lg:justify-between lg:items-end gap-7">
                    <div className="flex flex-col max-w-[820px] gap-5">
                        <h1 className="text-[28px] lg:text-[38px] font-[600]">Our <span className="text-[#caff33]">Products</span></h1>
                        <p className="lg:text-[18px] text-[14px] text-[#B3B3B3] font-[300]">
                            Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations
                        </p>
                    </div>
                    <div className="border-rounded border border-[#262626] h-fit w-fit p-3 rounded-full bg-[#1c1c1c] text-[14px] lg:text-[16px] text-nowrap">
                        <div className="flex gap-5 relative lg:text-left text-center">
                            <div className={`absolute left-0 top-0 h-full bg-[#caff33] w-[50%] transition-all duration-300 rounded-full z-10 ${active == 1 ? "translate-x-0" : "translate-x-full"}`} />
                            <div onClick={() => setActive(1)} className={`z-20  py-2.5 px-5 ${active == 1 ? "cursor-default" : "cursor-pointer"}`}>
                                <p className={`${active == 1 ? "text-[#1c1c1c]" : "text-white"}`}>For Individuals</p>
                            </div>
                            <div onClick={() => setActive(2)} className={`z-20  py-2.5 px-5 ${active == 2 ? "cursor-default" : "cursor-pointer"}`}>
                                <p className={`${active == 2 ? "text-[#1c1c1c]" : "text-white"}`}>For Businesses</p>
                            </div>
                        </div>
                    </div>
                </div>

                {active == 1 ? <Individual /> : <Business />}

            </div>
        </section>
    )
}

export default Products