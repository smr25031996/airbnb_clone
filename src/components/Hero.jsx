import heroImg from "../assets/Group.png"
export default function Hero(){
    return(
        <div>
            <section className="main">
                <img className="photo" src={heroImg} alt="" />
                <h1 className="hero_header">Online Experiences</h1>
            <p className="hero_text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>            </section>
        </div>
    )
}