import React from "react";
import { RegisterTaskProps } from "../../utils/types/Task";
import { Button, Container, Input } from "./styles";



export function RegisterTask(props: RegisterTaskProps) {

  return (
    <Container>
      <Input
        type="text"
        placeholder="Enter your task"
        value={props.value}
        onChange={props.changeValue}
      />
      <Button onClick={props.submit}>Cadastrar</Button>
    </Container>
  );
}
