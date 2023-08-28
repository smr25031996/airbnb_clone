import "./App.css";
import dataFile from "./data/data";
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from "./components/Card";

function App() {
  const dataArray = dataFile.map((element) => {
    return (
      <Card

        key={element.id}
        // img={element.coverImg}
        // rating={element.stats.rating}
        // number={element.stats.reviewCount}
        // location={element.location}
        // heading={element.title}
        // price={element.price}
        // openSpots={element.openSpots}
        item={element}

      />
    );
  });
  return (
    
    <div>
      <NavBar />
      <Hero />
      <div className="grid-container">{dataArray}</div>
    </div>
  );
}

export default App;
