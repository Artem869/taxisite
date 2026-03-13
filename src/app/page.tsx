import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Cars from '@/components/Cars'
import WhyChoose from '@/components/WhyChoose'
import Conditions from '@/components/Conditions'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <Hero />
                <Cars />
                <WhyChoose />
                <Conditions />
                <About />
                <Reviews />
                <FAQ />
            </main>
            <Footer />
        </>
    )
}
