import * as React from "react";
import { useState } from "react";
import ReactMapGL,{Marker , FlyToInterpolator} from "react-map-gl";
import axios from "axios"
import MarkerImg from "../../img/marker.png"
import "./Home.scss";

const Home = () => {


const [wc , setWc] = useState([])
const searchWc = async (e) =>{

  e.preventDefault();

 

  let wc = e.target.wc.value

 
let obj = {

  name: wc

}
  let resultWc = await axios.post("/api/search",obj );


  console.log(resultWc.data)

  setWc(resultWc.data)
  

}






  const [viewport, setViewport] = useState({
    width: "80vw",
    height: "40vh",
    latitude: 40.4205026,
    longitude: -3.7254743,
    zoom: 10,
  });
  console.log(wc)

  const mapeo = () =>{




    
  }
 
  return (

    <div>
      <form onSubmit={searchWc}>
      <label>Buscar WC</label>
      <input type="text" name="wc"/>
      <button >BUSCAR</button>
      </form>
    <section className="Home">
      <ReactMapGL  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}  {...viewport}   onViewportChange={(nextViewport) => setViewport(nextViewport)}>
   
{wc.map((item,i)=>(  
  
  <Marker key={i}
  latitude={item.latitude} 
  longitude={item.longitude}
  offsetLeft={-20}
  offsetTop={-30}

  
 >
<div className="marker" > 
</div>

 </Marker>       ))}

{/*  <Marker
  latitude={40.4153275} 
  longitude={-3.7087922}
  offsetLeft={-20}
  offsetTop={-30}

  
 >
<div><img className="marker" src="https://www.pngfind.com/pngs/m/326-3268483_location-logo-png-map-marker-alt-transparent-png.png"></img>
</div>

 </Marker> */}

       </ReactMapGL>
    </section>
    
   
    </div>
  );
};

export default Home;
