import { CarouselCompo } from '@/public/components/Carousel'
import Cta from '@/public/components/Cta'
import FooterBar from '@/public/components/Footer'
import Help from '@/public/components/Help'
import Hero from '@/public/components/Hero'
import Jobs from '@/public/components/Jobs'

const Home = () => {
    return <>
        <Hero />
        <CarouselCompo />
        <Cta />
        <Jobs />
        <Help />
        <FooterBar />
    </>
}

export default Home