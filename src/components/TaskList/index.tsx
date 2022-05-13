import React from "react";

import CheckIcon from "../../assets/check.png";
import TrashIcon from "../../assets/trash.png";
import { TaskListProps } from "../../utils/types/Task";
import { Container, Task, TaskContent, Icon, Check, Trash } from "./styles";

export function TaskList(props: TaskListProps) {
  return (
    <Container>
      <Task>
        <Check onClick={props.checkTask}>
          {props.ready && <Icon src={CheckIcon} alt=""  />}
        </Check>
        <TaskContent>{props.task}</TaskContent>
        <TaskContent>{props.createdAt.toString()}</TaskContent>
        <Trash onClick={props.deleteTask}>
          <Icon src={TrashIcon} alt=""  />
        </Trash>
      </Task>
    </Container>
  );
}
