import Cases from "../components/Home/Cases"
import Faq from "../components/Home/Faq"
import Features from "../components/Home/Features"
import Hero from "../components/Home/Hero"
import Products from "../components/Home/Products"
import Testimonials from "../components/Home/Testimonials"
import Navbar from "../components/Navbar"
import Objects from "/src/assets/bgs/Objects.png"


function Home() {
    return(
        <>
            <header>
                <img src={Objects} alt="" className="absolute left-0 top-0 -z-20"/>
                <Navbar />
                <Hero />
            </header>
            <main>
                <Products />
                <Cases />
                <Features />
                <Faq />
                <Testimonials />
            </main>
        </>
    )
}

export default Home