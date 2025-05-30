import { Link, useLocation } from "react-router-dom"
import Logo from "/src/assets/Logo.svg"
import { useEffect, useState } from "react"

function Navbar() {
    const location = useLocation()
    const [navOpen, setNavOpen] = useState(false)
    const nav = [
        { name: "Home", link: "/" },
        { name: "Careers", link: "/careers" },
        { name: "About", link: "/about" },
        { name: "Security", link: "/security" },
    ]

    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; // Optional
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto'; // Optional
        }
    }, [navOpen]);
    return (
        <nav>
            <div className="custom-container">
                <div className="z-10 flex justify-between items-center bg-[#1c1c1c] border-2 border-[#262626] rounded-full text-[18px] py-4 px-4 lg:py-6 lg:px-7">
                    <img src={Logo} alt="Logo" className="cursor-pointer w-[120px] h-[35px] px-2 lg:w-[155px] lg:h-[40px]" />

                    <ul className="hidden lg:flex items-center gap-3">
                        {nav.map((key, index) => (
                            <li key={index}>
                                <Link className={`${key.link == location.pathname ? "bg-[#262626] rounded-full py-2 px-4" : "hover:bg-[#262626] hover:rounded-full py-2 px-4"} transition-all duration-300`} to={key.link}>{key.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex flex-row items-center justify-center gap-5">
                        <button><Link to="/sign-up" className="border-2 border-[#caff33] rounded-full py-3 px-5 hover:bg-[#CAFF33] hover:text-black transition-all duration-300">Sign Up</Link></button>
                        <button><Link to="/login" className="bg-[#CAFF33] text-black py-3 px-6 rounded-full border-2 border-[#caff33] hover:bg-transparent hover:text-white transition-all duration-300">Login</Link></button>
                    </div>

                    <div className="relative block lg:hidden">
                        <button className="bg-[#CAFF33] py-3 px-5 rounded-full" onClick={() => setNavOpen(!navOpen)}>
                            {navOpen ? (
                                // X icon
                                <svg width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <line x1="16" y1="16" x2="48" y2="48" stroke="black" strokeWidth="4" strokeLinecap="round" />
                                    <line x1="48" y1="16" x2="16" y2="48" stroke="black" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <line x1="8" y1="16" x2="56" y2="16" stroke="black" strokeWidth="4" strokeLinecap="round" />
                                    <line x1="8" y1="32" x2="56" y2="32" stroke="black" strokeWidth="4" strokeLinecap="round" />
                                    <line x1="24" y1="48" x2="56" y2="48" stroke="black" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            )}
                        </button>


                        <div className={`text-[19px] border-2 flex flex-col justify-between items-center h-[70dvh] fixed top-35 right-7 bg-[#1c1c1c] border-[#262626] min-w-[75vw] max-w-[320px] custom-container rounded-[50px] z-70 transition-all duration-500 ${navOpen ? "translate-x-0" : "translate-x-[120%]"}`}>
                            <ul className="flex flex-col gap-5 items-center">
                                {nav.map((key, index) => (
                                    <li key={index}>
                                        <Link className={`${key.link == location.pathname ? "bg-[#262626] rounded-full py-2 px-4" : "hover:bg-[#262626] hover:rounded-full py-2 px-4"} transition-all duration-300`} to={key.link}>{key.name}</Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col gap-4 w-[70dvw] text-center px-5">
                                <Link to="/sign-up" className="border-2 border-[#caff33] rounded-full py-3 w-full hover:bg-[#CAFF33] hover:text-black transition-all duration-300 text-[16px]">Sign Up</Link>
                                <Link to="/login" className="bg-[#CAFF33] text-black py-3 w-full rounded-full border-2 border-[#caff33] hover:bg-transparent hover:text-white transition-all duration-300 text-[16px]">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar