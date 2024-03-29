import React, { useEffect } from "react";
import ReactMapGl, { NavigationControl } from "react-map-gl";
import DeckGl from "deck.gl";
import { HeatmapLayer } from "deck.gl";
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const ViewMap = () => {
  const getData = useSelector((state) => state.currentMap);

  const [data, setData] = useState();

  useEffect(() => {
    setData(getData);
  }, [getData]);

  //Navigation Control Style
  const navControlStyle = {
    left: 30,
    top: 20,
  };

  //Initial View
  const [viewport, setViewport] = useState({
    longitude: 120.3421,
    latitude: 16.6232,
    zoom: 15,
    width: "100%",
    height: "100%",
  });
  //Layer
  const layers = new HeatmapLayer({
    id: "heatmapLayer",
    data: data,
    getPosition: (d) => d.location,
    getWeight: (d) => d.data,
    aggregation: "SUM",
    radiusPixels: 200,
  });

  return (
    <>
      <Container>
        <DeckGl initialViewState={viewport} controller={true} layers={layers}>
          <ReactMapGl
            mapStyle='mapbox://styles/rierie/cklf0hh7l3o6o18mp3pumatv8'
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
          >
            {" "}
            <NavigationControl
              showZoom={false}
              showCompass={true}
              style={navControlStyle}
            />
          </ReactMapGl>{" "}
        </DeckGl>
      </Container>
    </>
  );
};

export default ViewMap;
