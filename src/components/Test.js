import { Button } from "@chakra-ui/button";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MapInput from "./MapInput";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { addMapAction } from "../actions/addMapAction";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Test = () => {
  const getData = useSelector((state) => state.currentMap);
  const [mapData, setMapData] = useState({
    dallangayanOeste: {
      name: "Dallangayan Oeste",
      location: [120.3407, 16.63],
      data: Number,
    },
    santiagoNorte: {
      name: "Santiago Norte",
      location: [120.3392, 16.6157],
      data: Number,
    },
    santiagoSur: {
      name: "Santiago Sur",
      location: [120.3349, 16.6098],
      data: Number,
    },
    tanqui: {
      name: "Tanqui",
      location: [120.3232, 16.6107],
      data: Number,
    },
  });
  const submitDispatch = useDispatch();

  //Method
  const handleSubmitMap = () => {
    submitDispatch(addMapAction(Object.values(mapData)));
  };

  useEffect(() => {
    console.log(getData);
  }, [getData]);

  return (
    <>
      <Nav></Nav>
      <Container>
        <MapInput
          name={mapData.dallangayanOeste.name}
          value={mapData.dallangayanOeste.data}
          onChangeMethod={(e) => {
            setMapData({
              ...mapData,
              dallangayanOeste: {
                name: mapData.dallangayanOeste.name,
                location: mapData.dallangayanOeste.location,
                data: parseInt(e.target.value),
              },
            });
          }}
        ></MapInput>
        <MapInput
          name={mapData.santiagoNorte.name}
          value={mapData.santiagoNorte.data}
          onChangeMethod={(e) => {
            setMapData({
              ...mapData,
              santiagoNorte: {
                name: mapData.santiagoNorte.name,
                location: mapData.santiagoNorte.location,
                data: parseInt(e.target.value),
              },
            });
          }}
        ></MapInput>
        <MapInput
          name={mapData.santiagoSur.name}
          value={mapData.santiagoSur.data}
          onChangeMethod={(e) => {
            setMapData({
              ...mapData,
              santiagoSur: {
                name: mapData.santiagoSur.name,
                location: mapData.santiagoSur.location,
                data: parseInt(e.target.value),
              },
            });
          }}
        ></MapInput>
        <MapInput
          name={mapData.tanqui.name}
          value={mapData.tanqui.data}
          onChangeMethod={(e) => {
            setMapData({
              ...mapData,
              tanqui: {
                name: mapData.tanqui.name,
                location: mapData.tanqui.location,
                data: parseInt(e.target.value),
              },
            });
          }}
        ></MapInput>

        <Button
          width='200px'
          bg='purple.300'
          mt='10px'
          onClick={handleSubmitMap}
        >
          Submit
        </Button>
      </Container>
    </>
  );
};

export default Test;
