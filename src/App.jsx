// import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import CustomerReviews from "./sections/CustomerReviews";
import HeroSection from "./sections/HeroSection";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQualityProducts from "./sections/SuperQualityProducts";
import Navbar from "./componets/Navbar";

const App = () => (
  <main className="relative">
    {/* nav */}
    <Navbar />
    {/* hero */}
    <section className="xl:padding-1 wide:padding-r padding-b ">
      <HeroSection />
    </section>
    {/* popular products */}
    <section className="padding">
      <PopularProducts />
    </section>
    {/* super quality */}
    <section className="padding">
      <SuperQualityProducts />
    </section>
    {/* services */}
    <section className="padding-x py-10">
      <Services />
    </section>
    {/* special offer */}
    <section className="padding">
      <SpecialOffer />
    </section>
    {/* customer reviews */}
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-black ">
      <Footer />
    </section>

  </main>
);

export default App;