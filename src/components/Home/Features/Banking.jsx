import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md"


function Banking({show}) {
    const banking = [
        { text: "24/7 Account Access", p: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease." },
        { text: "Mobile Banking App", p: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet." },
        { text: "Secure Transactions", p: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information." },
        { text: "Bill Pay and Transfers", p: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks." },
    ]
    const financial = [
        { text: "Budgeting Tools", p: "Track your spending and plan your finances with our intuitive budgeting tools. Set goals, categorize expenses, and gain insights into your financial habits." },
        { text: "Investment Insights", p: "Make informed decisions with real-time market data, portfolio tracking, and expert insights tailored to your financial goals." },
        { text: "Savings Goals", p: "Visualize and automate your savings progress. Set personalized goals and watch your savings grow over time with minimal effort." },
        { text: "Financial Calculators", p: "Estimate loan payments, plan for retirement, or calculate savings growth with our suite of easy-to-use financial calculators." }
    ];
    const customer = [
        { text: "24/7 Customer Support", p: "Get assistance whenever you need it through our round-the-clock support via phone, chat, or email. We're always here to help." },
        { text: "Personalized Assistance", p: "Receive tailored help based on your account and needs. Our representatives are trained to provide solutions that fit you." },
        { text: "FAQ & Help Center", p: "Find quick answers to common questions in our comprehensive Help Center. Save time by exploring FAQs and guides." },
        { text: "Feedback & Improvements", p: "We value your feedback. Share your experience to help us improve our services and offer better banking solutions." }
    ];
    
    const [shown, updShown] = useState([])
    useEffect(() => {
        updShown(() => {
            switch (show) {
                case 1:
                    return banking
                case 2:
                    return financial
                case 3:
                    return customer
                default:
                    return banking
            }
        })
    }, [show])


    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-stretch place-content-center gap-5">
                {shown.map((item, index) => (
                    <div key={index} className="flex flex-col border-2 border-[#262626] bg-[#1c1c1c] p-10 rounded-xl gap-5">
                        <div className="flex justify-between items-center">
                            <h1 className="text-[18px] lg:text-[22px]">{item.text}</h1>
                            <MdArrowOutward className="text-[24px] lg:text-[34px] text-[#caff33]" />
                        </div>

                        <p className="text-[#B3B3B3] font-light lg:text-[18px] text-[14px]">{item.p}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Banking