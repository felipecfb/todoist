import React from "react";
import { Button, Container, Form, Input } from "./styles";

export function RegisterTask() {
  return (
    <Container>
      <Form action="" >
          <Input type="text" placeholder="Enter your task" />
        <Button>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
