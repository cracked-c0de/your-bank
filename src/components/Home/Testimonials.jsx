import { useState } from "react"


function Testimonials() {
    const [active, setActive] = useState(1)

    const testimonialsIndividuals = [
        { text: "YourBank's savings tools helped me set realistic goals and track my progress easily. It’s like having a financial advisor in my pocket.", auth: "Alex M" },
        { text: "I never thought banking could be this simple. The intuitive interface and fast support keep me coming back.", auth: "Jessica L" },
        { text: "Managing my money has become stress-free thanks to YourBank’s budgeting features. Everything is just a tap away.", auth: "Chris W" },
        { text: "I love the app’s clean design and instant notifications. It makes me feel in control of my spending.", auth: "Emma C" },
        { text: "YourBank made it easy to open an account and start saving immediately. No paperwork, no stress.", auth: "Noah P" },
        { text: "I used to dread checking my finances. Now I check them daily. YourBank really changed that for me.", auth: "Liam R" }
    ]

    const testimonialsBusinesses = [
        { text: "YourBank's business credit solutions helped me scale faster than I imagined. Flexible and reliable!", auth: "Sophia T" },
        { text: "Opening a business account was seamless. Everything I need is in one dashboard, and it just works.", auth: "James N" },
        { text: "Payroll, invoicing, cash flow — YourBank makes it all manageable with clear insights and reports.", auth: "Natalie B" },
        { text: "Switching to YourBank cut our banking overhead significantly. It's modern banking for modern teams.", auth: "David H" },
        { text: "The onboarding for business was fast, and the customer service was top-tier.", auth: "Olivia D" },
        { text: "We use YourBank’s integrations with accounting software daily. It has saved us hours every month.", auth: "Mark S" }
    ]

    return (
        <section>
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

                <div className="">

                </div>
            </div>
        </section>
    )
}

export default Testimonials