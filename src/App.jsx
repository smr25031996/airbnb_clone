import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import  Prop from "./components/Prop" 
import swim from "./assets/swim.jpg"
import bycycle from "./assets/bycyle.jpg"
import wedding from "./assets/wedding.jpg"
function App() {
  return (
    <div>
      <NavBar />
      <Hero/>
     <div className="grid-container">
     <Card 
           img={swim}
           rating={5.0}
           number={6}
           country="USA"
           heading="Life Lesson with Cathie James"
           price={136}   
      />
       <Card 
           img={wedding}
           rating={4.0}
           number={6}
           country="USA"
           heading="Let Get Married"
           price={200}     
      />
       <Card 
           img={bycycle}
           rating={4.7}
           number={6}
           country="Peru"
           heading="Explore the unexplored"
           price={100}  
      />
     </div>
      {/* <Prop/> */}
  </div>
  );
}

export default App;
