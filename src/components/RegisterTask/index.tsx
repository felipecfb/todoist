/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Button, Container, Form, Input } from "./styles";
import { v4 as uuidv4 } from 'uuid';

export function RegisterTask() {
  const [tasks, setTasks] = useState([{}]);
  const [task, setTask] = useState("");

  const id = uuidv4();

  function handleSubmit(e: any) {
    e.preventDefault();
    const newTask = {
      id: id,
      task,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
    setTask("");
    console.log(tasks);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button>Cadastrar</Button>
      </Form>
    </Container>
  );
}
