import Hero from "@/src/components/home/Hero";
import AboutUs from "../aboutus/page";
import Producto from "../producto/page";
import Contacto from "../contacto/page";


const Page = () => {
    return <div>
        <section id="inicio">
            <Hero />
        </section>
        <section id="producto">  
            <Producto />       
        </section>
        <section id="aboutus">
            <AboutUs />
        </section>
        <section id="contacto">
            <Contacto />
        </section>
        </div>;

};

export default Page;