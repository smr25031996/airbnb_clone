import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import swim from "./assets/swim.jpg"
import bycycle from "./assets/bycyle.jpg"
import wedding from "./assets/wedding.jpg"
import shopping from "./assets/shopping.jpeg"
import tour from "./assets/tour.jpeg"
import forest from "./assets/forest.jpeg"
import ArrayRendering from "./components/arrayrendring";
function App() {
  return (
  //   <div>
  //     <NavBar />
  //     <Hero/>
  //    <div className="grid-container">
  //    <Card 
  //          img={swim}
  //          rating={5.0}
  //          number={6}
  //          country="USA"
  //          heading="Life Lesson with Cathie James"
  //          price={136}   
  //     />
  //      <Card 
  //          img={wedding}
  //          rating={4.0}
  //          number={6}
  //          country="USA"
  //          heading="Let Get Married"
  //          price={200}     
  //     />
  //      <Card 
  //          img={bycycle}
  //          rating={4.7}
  //          number={6}
  //          country="Peru"
  //          heading="Explore the unexplored"
  //          price={100}  
  //     />
  //       <Card 
  //          img={shopping}
  //          rating={3.7}
  //          number={8}
  //          country="France"
  //          heading="Shopping Heaven _Shopping Guide"
  //          price={50}  
  //     /><Card 
  //          img={tour}
  //          rating={3.7}
  //          number={5}
  //          country="Greece"
  //          heading="Exploaring Old! "
  //          price={75}  
  //     />
  //     <Card 
  //          img={forest}
  //          rating={3.7}
  //          number={5}
  //          country="Africa"
  //          heading="Into the wild! "
  //          price={75}  
  //     />
  //    </div>
  //     {/* <Prop/> */}
  // </div>
  <ArrayRendering />
  
  );
}

export default App;
