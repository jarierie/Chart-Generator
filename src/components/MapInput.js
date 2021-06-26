import React from "react";
import { Input } from "@chakra-ui/input";
import { FormLabel } from "@chakra-ui/form-control";

const MapInput = (props) => {
  return (
    <>
      <FormLabel>{props.name}</FormLabel>
      <Input
        type='Number'
        width='50%'
        onChange={props.onChangeMethod}
        value={props.data}
      ></Input>
    </>
  );
};

export default MapInput;
