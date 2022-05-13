import React, { useState } from "react";

import { RegisterTask } from "../../components/RegisterTask";

import { showToast } from "../../utils/toastify";
import { v4 as uuidv4 } from "uuid";
import { TasksProps, TaskListProps } from "../../utils/types/Task";
import { TaskList } from "../TaskList";

export function TaskContent() {
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
      createdAt: new Date().toLocaleDateString('pt-BR'),
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

  function checkTask(id: string) {
    const findTask = tasks.filter((task) => {
      return task.id === id
    });
    findTask.forEach(function(task) {
      task.checked = true;
      setTasks([...tasks])
    });
  }

  function deleteTask(id: string) {
    const removeTask = tasks.filter((task) => {
      return task.id !== id
    });
    setTasks(removeTask);
  }

  return (
    <>
      <RegisterTask
        value={newTask}
        changeValue={handleChange}
        submit={handleSubmit}
      />
      {tasks.map((values) => (
        <TaskList
          key={values.id}
          task={values.task}
          createdAt={values.createdAt}
          ready={values.checked}
          checkTask={() => checkTask(values.id)}
          deleteTask={() => deleteTask(values.id)}
        />
      ))}
    </>
  );
}
