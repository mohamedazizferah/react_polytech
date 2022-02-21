import Pdf from "./pdf";
import Fullname from "./fullName";
import Skills from "./skills";
import "./profile.css"

function Profile(){
    return(
        <div className="container">
            <div className="imgNfn">
                <Pdf />
        
            <Fullname />
            </div>
            <div className="sk"> <Skills /></div>
        </div>
    );
}
export default Profile;