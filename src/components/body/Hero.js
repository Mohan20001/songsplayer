import "./bodyStyle/hero.css";
function Hero() {
let mystyle={
    width:"100%",
    height:"51.55vw",
    minHeight:"280px",
    background:"url('https://i.scdn.co/image/ab67616d0000b27353a2e11c1bde700722fecd2e') no-repeat",
    backgroundSize:"100% auto"
}
    return(
        <div style={mystyle} className="Home-sextion">
          <div className="hero-content">
               <p className="p-text">lorem text hello this is some sample textlorem text hello this is some sample textlorem text hello this is some sample textlorem text hello this is some sample textlorem text hello this is some sample textlorem text hello this is some sample textlorem text hello this is some sample textlorem text hello this is some sample textlorem text hello this is some sample textlorem text hello this is some sample text</p> 
          </div>
        </div>
    );
}
export default Hero;