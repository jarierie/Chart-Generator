import React, { useEffect } from "react";
import { useState } from "react";
import { Input } from "@chakra-ui/input";
import { FormLabel } from "@chakra-ui/form-control";
import { useDispatch, useSelector } from "react-redux";
import { addMapAction } from "../actions/addMapAction";

const MapInput = (props) => {
  const [localState, setLocalState] = useState({
    name: props.name,
    location: props.location,
    data: props.data,
  });

  // Get global state
  const getState = useSelector((state) => state.currentMap);

  const handleChange = (e) => {
    setLocalState({ ...localState, data: parseInt(e.target.value) });
  };

  const submitDispatch = useDispatch();

  useEffect(() => {
    console.log(getState);
  }, [getState]);

  useEffect(() => {
    const submit = () => {
      submitDispatch(addMapAction(localState));
    };
    if (props.submitState === true) {
      submit();
    } else {
      return;
    }
  }, [props.submitState]);
  return (
    <>
      <FormLabel>{props.name}</FormLabel>
      <Input
        width='50%'
        onChange={handleChange}
        value={localState.data}
      ></Input>
    </>
  );
};

export default MapInput;
