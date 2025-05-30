import { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


function Faq() {
    const [showAll, setShowAll] = useState(false)
    const faqs = [
        { q: "How do I open an account with YourBank?", a: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.' },
        { q: "What documents do I need to provide to apply for a loan?", a: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process." },
        { q: "How can I access my accounts online?", a: `Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.` },
        { q: "Are my transactions and personal information secure?", a: 'At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.' },
        { q: "What types of accounts does YourBank offer?", a: "YourBank offers a variety of accounts to meet your needs, including checking accounts, savings accounts, business accounts, and high-yield savings options. Visit our website or contact a representative to learn more about each type and choose the best one for your financial goals." },
        { q: "Can I open a joint account?", a: "Yes, YourBank allows you to open joint accounts with another individual. During the account application process, simply select the option for a joint account and provide the required information for both parties. If you need help, our team is here to assist you every step of the way." },
        { q: "How do I report a lost or stolen debit card?", a: "If your debit card is lost or stolen, please report it immediately by calling our 24/7 customer support line or logging into your online banking account and using the 'Report Lost Card' feature. We’ll deactivate your card to prevent unauthorized transactions and issue you a replacement right away." },
        { q: "Does YourBank offer mobile banking?", a: "Yes, YourBank offers a fully featured mobile banking app available for iOS and Android. With our app, you can check balances, transfer funds, pay bills, deposit checks, and more—all from your mobile device. Download it today from the App Store or Google Play." },
        { q: "Are there any fees for maintaining an account?", a: "YourBank offers several account options, some of which come with no monthly maintenance fees. Others may have fees depending on your balance or transaction volume. Detailed fee information is available on our website or by speaking with a customer representative." }
    ]

    const displayedFAQs = showAll ? faqs : faqs.slice(0, 4);

    return (
        <section>
            <div className="custom-container flex-col">
                <div className="flex flex-col gap-5 text-center lg:text-left my-10">
                    <h1 className="text-[28px] lg:text-[38px] font-medium"><span className="text-[#caff33]">Frequently</span> Asked Questions</h1>
                    <p className="font-light text-[14px] lg:text-[18px] text-[#b3b3b3] max-w-[1240px]">Still you have any questions? Contact our Team via support@yourbank.com</p>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 place-items-stretch place-content-center gap-5 relative`}>
                    {displayedFAQs.map((item, index) => (
                        <div key={index} className="flex flex-col p-7.5 lg:p-12.5 border rounded-xl border-[#262626] gap-5 relative">
                            <h3 className="text-[18px] lg:text-[20px] border-b-2 pb-5 border-b-[#262626] z-0">{item.q}</h3>
                            <p className="text-[14px] lg:text-[18px] font-light text-[#B3B3B3] z-0">{item.a}</p>
                            {(!showAll && (index == 2)) && <div className="absolute z-10 bg-gradient-to-t from-[#1a1a1a]/100 to-[#1a1a1a]/35 top-0 left-0 w-full h-full rounded-xl lg:block hidden" />}
                            {(!showAll && (index == 3)) && <div className="absolute z-10 bg-gradient-to-t from-[#1a1a1a]/100 to-[#1a1a1a]/35 top-0 left-0 w-full h-full rounded-xl" />}
                        </div>
                    ))}
                </div>
                <button onClick={() => setShowAll(!showAll)} className="my-10 bg-[#1c1c1c] text-[18px] items-center mx-auto border-2 border-[#262626] py-3 px-6 rounded-full cursor-pointer text-center flex flex-row gap-1 hover:bg-[#262626] transition-all duration-300" >
                    {!showAll ? (
                        <>
                            Show More <MdKeyboardArrowDown className="text-[22px]" />
                        </>
                    ) : (
                        <>
                            Show Less <MdKeyboardArrowUp className="text-[22px]" />
                        </>
                    )}
                </button>
            </div>
        </section>
    )
}

export default Faq