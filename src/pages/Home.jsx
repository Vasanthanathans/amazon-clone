import HeroSection from "../components/HeroSection";
import TechBanner from "../components/TechBanner";
import ProductCard from "../components/ProductCard";
import data from "../data/cards.json";

function Home() {
  const cards = data.cards;

  return (
    <>
      <HeroSection />
      <TechBanner />
      <div style={{ transform: 'scaleX(-1)' }}>
        <TechBanner />
      </div>
      <div className="container-fluid">
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-md-3" key={index}>
              <ProductCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;