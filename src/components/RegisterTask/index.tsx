/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Button, Container, Input } from "./styles";
import { v4 as uuidv4 } from "uuid";
import Toastify, { showToast } from "../../utils/toastify";

interface TasksProps {
  id: string;
  task: string;
  createdAt: Date;
  ready: boolean;
}

export function RegisterTask() {
  const [tasks, setTasks] = useState<TasksProps[] | []>([]);
  const [newTask, setNewTask] = useState("");
  const [message, setMessage] = useState(false);

  const id = uuidv4();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  function handleSubmit(e: React.MouseEventHandler<HTMLButtonElement> | any) {
    e.preventDefault();
    const createNewTask = {
      id: id,
      task: newTask,
      createdAt: new Date(),
      ready: false,
    };

    function corretTask() {
      setTasks([...tasks, createNewTask]);
      setNewTask("");
      setMessage(true);
      showToast({ type: "success", message: "Sua task foi criada!" });
    }

    function incorrectTask() {
      setMessage(true);
      showToast({ type: "error", message: "Digite sua task!" });
    }

    newTask === "" ? incorrectTask() : corretTask();
  }

  return (
    <Container>
      <Input
        type="text"
        placeholder="Enter your task"
        value={newTask}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Cadastrar</Button>

      {
        message && (
          <Toastify />
        )
      }
    </Container>
  );
}
