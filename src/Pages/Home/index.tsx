import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { RegisterTask } from "../../components/RegisterTask";
import { TaskList } from "../../components/TaskList";
import { showToast } from "../../utils/toastify";
import { v4 as uuidv4 } from "uuid";
import { TasksProps } from "../../utils/types/Task";


export default function Home() {
  const [tasks, setTasks] = useState<TasksProps[] | []>([]);
  const [newTask, setNewTask] = useState("");

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
      checked: false,
    };

    if (newTask !== "") {
      setTasks([...tasks, createNewTask]);
      setNewTask("");
      showToast({ type: "success", message: "Sua task foi criada!" });
    } else {
      showToast({ type: "error", message: "Digite sua task!" });
    }
  }

  function handleChecked() {
    tasks.map((check) => id === check.id);
  }

  return (
    <>
      <Header />
      <RegisterTask
        value={newTask}
        changeValue={handleChange}
        submit={handleSubmit}
      />
      {tasks.map((values) => (
        <TaskList task={values.task} createdAt={values.createdAt} ready={values.checked} check={handleChecked} />
      ))}
      <Footer />
    </>
  );
}
