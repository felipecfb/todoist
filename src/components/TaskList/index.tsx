import React, { MouseEventHandler, useState } from 'react';

import CheckIcon from '../../assets/check.png';
import TrashIcon from '../../assets/trash.png';
import { TaskListProps } from '../../utils/types/Task';
import { Container, Task, TaskContent, Icon, Check, IconCheck } from './styles';



export function TaskList(props: TaskListProps) {
  return (
    <Container>
      <Task>
        <Check>
          {
            props.ready && (
              <IconCheck src={CheckIcon} alt="" onClick={props.check} />
            )
          }
        </Check>
        <TaskContent>{props.task}</TaskContent>
        <TaskContent>{props.createdAt.toString()}</TaskContent>
        <Icon src={TrashIcon} alt="" />
      </Task>
    </Container>
  )
};
