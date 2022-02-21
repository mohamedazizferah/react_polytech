import img from "./giphy.gif"
import Profile from "./profile";
import "./profile.css";

function Pdf(){

    return (
        <div className="img">
    <img src={img} style={{maxWidth:'200px', maxHeight:'200px'}} />
    </div>
    );
}
export default Pdf;