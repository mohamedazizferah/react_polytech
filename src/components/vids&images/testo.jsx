import img1 from "./images/pngwing.com.png"
import img2 from "./images/modal-giftbox-dango.png"
import ReactPlayer from "react-player";
import "./testo.css"
function VidsnImages(){
    return(
<>
        <div style={{border:'solid',borderColor:"black",borderWidth:'1px'  ,maxWidth:'100vw'}}>
            <h1 className='title red'>Images here</h1>
            <img src={img1} style={{maxWidth:'200px', maxHeight:'200px'}} />
            <img src={img2} style={{maxWidth:'200px', maxHeight:'200px'}} />   
        </div>
        <br/>
        <h1 className='title red'>Videos Here</h1>
        <div className="vidplayer">
        
        <ReactPlayer
        url="https://youtu.be/dIbl4lvQQus"
      />
      </div>
      <br/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5jw6ESx9CaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    );
}
export default VidsnImages