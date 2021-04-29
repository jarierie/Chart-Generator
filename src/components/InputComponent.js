import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React from "react";

const InputComponent = (props) => {
  return (
    <>
      <FormControl>
        <FormLabel>{props.formLabel}</FormLabel>
        <Input
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          type={props.type}
        ></Input>
      </FormControl>
    </>
  );
};

export default InputComponent;
