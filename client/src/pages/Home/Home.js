import * as React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

import "./Home.scss";

const Home = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <section className="Home">
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </section>
  );
};

export default Home;
